"use client"

import { useRef, useEffect } from "react"

export function CircuitDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Colors
    const bgColor = "#111111"
    const gridColor = "#222222"
    const wireColor = "#4a9eff"
    const componentColor = "#ffffff"
    const highlightColor = "#ff4a9e"
    const textColor = "#aaaaaa"

    // Draw background
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 1

    const gridSize = 20
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Draw Arduino
    const drawArduino = (x: number, y: number) => {
      ctx.fillStyle = "#1a759f"
      ctx.fillRect(x, y, 120, 80)

      // Pins
      ctx.fillStyle = "#34a0a4"
      ctx.fillRect(x + 10, y - 5, 100, 10)
      ctx.fillRect(x + 10, y + 80 - 5, 100, 10)

      // Text
      ctx.fillStyle = textColor
      ctx.font = "12px monospace"
      ctx.fillText("Arduino", x + 35, y + 45)
    }

    // Draw speaker
    const drawSpeaker = (x: number, y: number) => {
      ctx.fillStyle = componentColor
      ctx.beginPath()
      ctx.arc(x, y, 20, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(x, y, 15, 0, Math.PI * 2)
      ctx.strokeStyle = bgColor
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(x, y, 10, 0, Math.PI * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.stroke()
    }

    // Draw sensor
    const drawSensor = (x: number, y: number) => {
      ctx.fillStyle = "#9d4edd"
      ctx.fillRect(x, y, 40, 20)

      // Pins
      ctx.fillStyle = componentColor
      ctx.fillRect(x + 5, y + 20, 5, 10)
      ctx.fillRect(x + 15, y + 20, 5, 10)
      ctx.fillRect(x + 30, y + 20, 5, 10)

      // Text
      ctx.fillStyle = textColor
      ctx.font = "10px monospace"
      ctx.fillText("SENSOR", x + 2, y + 14)
    }

    // Draw amplifier
    const drawAmplifier = (x: number, y: number) => {
      ctx.fillStyle = "#f72585"
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + 60, y + 30)
      ctx.lineTo(x, y + 60)
      ctx.closePath()
      ctx.fill()

      // Text
      ctx.fillStyle = textColor
      ctx.font = "10px monospace"
      ctx.fillText("AMP", x + 20, y + 34)
    }

    // Draw capacitor
    const drawCapacitor = (x: number, y: number, rotation = 0) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)

      ctx.strokeStyle = componentColor
      ctx.lineWidth = 2

      // Vertical lines
      ctx.beginPath()
      ctx.moveTo(0, -10)
      ctx.lineTo(0, -5)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(0, 5)
      ctx.lineTo(0, 10)
      ctx.stroke()

      // Plates
      ctx.beginPath()
      ctx.moveTo(-10, -5)
      ctx.lineTo(10, -5)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(-10, 5)
      ctx.lineTo(10, 5)
      ctx.stroke()

      ctx.restore()
    }

    // Draw resistor
    const drawResistor = (x: number, y: number, rotation = 0) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)

      ctx.strokeStyle = componentColor
      ctx.lineWidth = 2

      // Leads
      ctx.beginPath()
      ctx.moveTo(-15, 0)
      ctx.lineTo(-10, 0)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(10, 0)
      ctx.lineTo(15, 0)
      ctx.stroke()

      // Resistor body
      ctx.beginPath()
      ctx.moveTo(-10, 0)
      ctx.lineTo(-10, -5)
      ctx.lineTo(-5, -5)
      ctx.lineTo(-3, 5)
      ctx.lineTo(0, -5)
      ctx.lineTo(3, 5)
      ctx.lineTo(5, -5)
      ctx.lineTo(8, 5)
      ctx.lineTo(10, 5)
      ctx.lineTo(10, 0)
      ctx.stroke()

      ctx.restore()
    }

    // Draw wires
    const drawWire = (x1: number, y1: number, x2: number, y2: number, color = wireColor) => {
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.beginPath()

      // If it's a straight line
      if (x1 === x2 || y1 === y2) {
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
      } else {
        // If it's not a straight line, create an L shape
        ctx.moveTo(x1, y1)
        ctx.lineTo(x1, y2)
        ctx.lineTo(x2, y2)
      }

      ctx.stroke()
    }

    // Draw components
    drawArduino(100, 150)
    drawSensor(50, 50)
    drawSensor(150, 50)
    drawSensor(250, 50)
    drawAmplifier(300, 150)
    drawSpeaker(450, 180)

    // Draw passive components
    drawCapacitor(250, 150, 90)
    drawResistor(200, 100, 90)
    drawResistor(350, 120, 0)
    drawCapacitor(400, 150, 0)

    // Draw wires
    drawWire(70, 80, 70, 150, wireColor)
    drawWire(70, 150, 100, 150, wireColor)

    drawWire(170, 80, 170, 100, wireColor)
    drawWire(170, 100, 200, 100, wireColor)
    drawWire(200, 100, 200, 150, wireColor)
    drawWire(200, 150, 220, 150, wireColor)

    drawWire(270, 80, 270, 150, wireColor)
    drawWire(270, 150, 300, 150, highlightColor)

    drawWire(220, 190, 250, 190, wireColor)
    drawWire(250, 190, 250, 210, wireColor)
    drawWire(250, 210, 360, 210, wireColor)
    drawWire(360, 210, 360, 180, wireColor)

    drawWire(360, 180, 400, 180, highlightColor)
    drawWire(400, 180, 430, 180, highlightColor)

    // Labels
    ctx.fillStyle = textColor
    ctx.font = "12px monospace"
    ctx.fillText("Main Sound Generation Circuit", 150, 20)
    ctx.fillText("Piezo", 50, 40)
    ctx.fillText("Light", 150, 40)
    ctx.fillText("Touch", 250, 40)
    ctx.fillText("Signal Path", 350, 250)

    // Signal path legend
    ctx.strokeStyle = wireColor
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(150, 250)
    ctx.lineTo(200, 250)
    ctx.stroke()
    ctx.fillText("Control Signal", 210, 250)

    ctx.strokeStyle = highlightColor
    ctx.beginPath()
    ctx.moveTo(150, 270)
    ctx.lineTo(200, 270)
    ctx.stroke()
    ctx.fillText("Audio Signal", 210, 270)
  }, [])

  return (
    <div className="w-full">
      <canvas ref={canvasRef} className="w-full h-[400px] rounded-lg border border-zinc-700" />
      <p className="text-sm text-zinc-400 mt-3 text-center">
        Simplified circuit diagram of the main sound generation module
      </p>
    </div>
  )
}
