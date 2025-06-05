"use client"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const processCategories = [
  {
    id: "sketches",
    label: "Initial Sketches",
    items: [
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Hand-drawn circuit diagram with notes",
        caption: "Early circuit design concepts",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Sketch of the exhibition layout",
        caption: "Spatial arrangement planning",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Notebook page with sound pattern ideas",
        caption: "Sound pattern brainstorming",
      },
    ],
  },
  {
    id: "prototyping",
    label: "Prototyping",
    items: [
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Breadboard with Arduino and components",
        caption: "First working prototype",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Testing different sensors",
        caption: "Sensor comparison tests",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Failed prototype with burnt components",
        caption: "Learning from failure: overloaded circuit",
      },
    ],
  },
  {
    id: "code",
    label: "Code Development",
    items: [
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Screenshot of Arduino code",
        caption: "Core sound generation algorithm",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Debugging session with oscilloscope",
        caption: "Troubleshooting timing issues",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Whiteboard with system architecture",
        caption: "System architecture planning",
      },
    ],
  },
  {
    id: "assembly",
    label: "Final Assembly",
    items: [
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Soldering components to PCB",
        caption: "Permanent circuit assembly",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Enclosure construction",
        caption: "Building the 'black boxes'",
      },
      {
        src: "/placeholder.svg?height=500&width=700",
        alt: "Final testing before exhibition",
        caption: "System integration testing",
      },
    ],
  },
]

export function ProcessGallery() {
  return (
    <Tabs defaultValue="sketches" className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-zinc-800/50 rounded-lg p-1 mb-8">
        {processCategories.map((category) => (
          <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-zinc-700">
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {processCategories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.items.map((item, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-zinc-300">{item.caption}</p>
                <p className="text-xs text-zinc-500 mt-1">{item.alt}</p>
              </div>
            ))}
          </div>

          {category.id === "code" && (
            <div className="mt-8 p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <h3 className="text-lg font-semibold mb-4">Sample Arduino Code</h3>
              <pre className="text-xs md:text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                <code className="text-green-400">
                  {`// Black Box Choir - Sound Generation Module
// Part of node #2 - "Harmonic Resonator"

#include <Audio.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SerialFlash.h>

// GUItool: begin automatically generated code
AudioSynthWaveform       waveform1;      // xy=110,75
AudioSynthWaveformModulated waveformMod1;   // xy=125,142
AudioEffectEnvelope      envelope1;      // xy=267,75
AudioEffectDelay         delay1;         // xy=421,142
AudioMixer4              mixer1;         // xy=590,117
AudioOutputI2S           i2s1;           // xy=760,120
AudioConnection          patchCord1(waveform1, envelope1);
AudioConnection          patchCord2(waveformMod1, 0, mixer1, 1);
AudioConnection          patchCord3(envelope1, 0, mixer1, 0);
AudioConnection          patchCord4(envelope1, delay1);
AudioConnection          patchCord5(delay1, 0, mixer1, 2);
AudioConnection          patchCord6(mixer1, 0, i2s1, 0);
AudioConnection          patchCord7(mixer1, 0, i2s1, 1);
AudioControlSGTL5000     sgtl5000_1;     // xy=705,193
// GUItool: end automatically generated code

const int SENSOR_PIN = A0;
int sensorValue = 0;
float frequency = 220.0;
float modFrequency = 110.0;

void setup() {
  Serial.begin(9600);
  AudioMemory(20);
  
  sgtl5000_1.enable();
  sgtl5000_1.volume(0.7);
  
  waveform1.begin(WAVEFORM_SINE);
  waveform1.frequency(frequency);
  waveform1.amplitude(0.8);
  
  waveformMod1.begin(WAVEFORM_SINE);
  waveformMod1.frequency(modFrequency);
  waveformMod1.amplitude(0.5);
  
  envelope1.attack(50);
  envelope1.decay(50);
  envelope1.sustain(0.8);
  envelope1.release(250);
  
  delay1.delay(0, 300);
  
  mixer1.gain(0, 0.7);
  mixer1.gain(1, 0.3);
  mixer1.gain(2, 0.2);
}

void loop() {
  sensorValue = analogRead(SENSOR_PIN);
  
  // Map sensor value to frequency range
  frequency = map(sensorValue, 0, 1023, 110, 880);
  modFrequency = frequency / 2.0;
  
  waveform1.frequency(frequency);
  waveformMod1.frequency(modFrequency);
  
  // Trigger envelope based on threshold
  if (sensorValue > 800 && !envelope1.isActive()) {
    envelope1.noteOn();
    delay(50);
  } else if (sensorValue < 200 && envelope1.isActive()) {
    envelope1.noteOff();
  }
  
  delay(10);
}`}
                </code>
              </pre>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}
