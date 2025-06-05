"use client"

import { useRef, useEffect } from "react"

export function CircuitAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Circuit node class
    class Node {
      x: number
      y: number
      connections: Node[]
      size: number
      pulseSize: number
      pulseOpacity: number
      isPulsing: boolean
      pulseSpeed: number
      color: string

      constructor(x: number, y: number, size: number, color: string) {
        this.x = x
        this.y = y
        this.connections = []
        this.size = size
        this.pulseSize = 0
        this.pulseOpacity = 0
        this.isPulsing = false
        this.pulseSpeed = 0.5 + Math.random() * 1.5
        this.color = color
      }

      connect(node: Node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node)
        }
      }

      startPulse() {
        this.isPulsing = true
        this.pulseSize = 0
        this.pulseOpacity = 1
      }

      update() {
        if (this.isPulsing) {
          this.pulseSize += this.pulseSpeed
          this.pulseOpacity -= 0.01 * this.pulseSpeed

          if (this.pulseOpacity <= 0) {
            this.isPulsing = false
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw connections
        ctx.strokeStyle = this.color
        ctx.lineWidth = 1

        this.connections.forEach((node) => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()
        })

        // Draw pulse
        if (this.isPulsing) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.pulseSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${Number.parseInt(this.color.slice(1, 3), 16)}, ${Number.parseInt(this.color.slice(3, 5), 16)}, ${Number.parseInt(this.color.slice(5, 7), 16)}, ${this.pulseOpacity})`
          ctx.fill()
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create nodes
    const nodeCount = Math.floor(window.innerWidth / 100)
    const nodes: Node[] = []
    const colors = ["#9d4edd", "#c77dff", "#7b2cbf", "#5a189a", "#3c096c"]

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = 1 + Math.random() * 3
      const color = colors[Math.floor(Math.random() * colors.length)]

      nodes.push(new Node(x, y, size, color))
    }

    // Connect nodes
    nodes.forEach((node) => {
      const connectionsCount = Math.floor(1 + Math.random() * 3)

      for (let i = 0; i < connectionsCount; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        if (randomNode !== node) {
          node.connect(randomNode)
        }
      }
    })

    // Animation loop
    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw(ctx)
      })

      // Randomly pulse nodes
      if (Math.random() < 0.03) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        randomNode.startPulse()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 bg-black opacity-40" />
}
