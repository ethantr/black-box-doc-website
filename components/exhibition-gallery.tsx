"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const exhibitionImages = [
  {
    src: "/boxes at sunset.jpg?height=600&width=800",
    alt: "Black Box Choir exhibition at sunset with ambient lighting",
    caption: "Black Box Choir exhibition at sunset",
  },
  {
    src: "/Kira box ETR 2.jpg?height=600&width=800",
    alt: "Final testing of tactile box",
    caption: "Final testing of tactile box",
  },
  // {
  //   src: "/placeholder.svg?height=600&width=800",
  //   alt: "Visitor interacting with the sound interface through touch sensors",
  //   caption: "Interactive sound exploration",
  // },
  // {
  //   src: "/placeholder.svg?height=600&width=800",
  //   alt: "Projection mapping on the wall showing circuit diagrams and sound waves",
  //   caption: "Visual accompaniment to the sonic experience",
  // },
  {
    src: "/making box.jpeg?height=600&width=800",
    alt: "Tactile box development",
    caption: "Tactile box development",
  },
  // {
  //   src: "/placeholder.svg?height=600&width=800",
  //   alt: "Wide shot of the exhibition space during a performance",
  //   caption: "Live performance with the Black Box Choir",
  // },
]

export function ExhibitionGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exhibitionImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="p-4 text-sm text-white">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black/90 border-zinc-800">
          {selectedImage !== null && (
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={exhibitionImages[selectedImage].src || "/placeholder.svg"}
                  alt={exhibitionImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-lg">{exhibitionImages[selectedImage].caption}</p>
                <p className="text-sm text-zinc-400 mt-1">{exhibitionImages[selectedImage].alt}</p>
              </div>
              <div className="flex justify-center gap-2 mt-2">
                {exhibitionImages.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      selectedImage === index ? "bg-white scale-125" : "bg-zinc-600",
                    )}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
