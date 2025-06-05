"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"

interface VideoPlayerProps {
  title: string
  description: string
  videoSrc: string
  posterSrc?: string
}

export function VideoPlayer({ title, description, videoSrc, posterSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }

    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setIsFullscreen(!isFullscreen)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return

    const progress = (video.currentTime / video.duration) * 100
    setProgress(progress)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return

    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    video.currentTime = pos * video.duration
  }

  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-600 transition-all duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-zinc-400 text-sm mt-1">{description}</p>
      </div>

      <div ref={containerRef} className="relative bg-black">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          className="w-full aspect-video object-contain"
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying && (
            <button
              onClick={togglePlayPause}
              className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <Play size={32} className="text-white ml-1" />
            </button>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={togglePlayPause}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>

            <div
              className="flex-1 h-1.5 bg-zinc-700 rounded-full cursor-pointer relative"
              onClick={handleProgressClick}
            >
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function VideoSection() {
  return (
    <div className="space-y-8">
      <VideoPlayer
        title="Black Box Choir: Exhibition Overview"
        description="A walkthrough of the exhibition space showing the choir in action and visitor interactions"
        videoSrc="/videos/exhibition-overview.mp4"
        posterSrc="/placeholder.svg?height=720&width=1280"
      />

    </div>
  )
}
