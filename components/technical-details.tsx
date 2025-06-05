"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CircuitDiagram } from "@/components/circuit-diagram"

export function TechnicalDetails() {
  return (
    <div className="space-y-8">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
        <h3 className="text-xl font-semibold mb-4">Hardware Components</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "Arduino Mega",
              description: "Main controller for complex sound generation nodes",
              quantity: 3,
            },
            {
              name: "Arduino Nano",
              description: "Compact controllers for satellite sound units",
              quantity: 5,
            },
            {
              name: "Adafruit Music Maker Shield",
              description: "Digital audio generation and processing",
              quantity: 3,
            },
            {
              name: "Custom PCBs",
              description: "Purpose-built circuit boards for specific sound functions",
              quantity: 8,
            },
            {
              name: "Piezo Sensors",
              description: "Vibration and touch detection for interaction",
              quantity: 12,
            },
            {
              name: "Photoresistors",
              description: "Light-based interaction sensors",
              quantity: 10,
            },
            {
              name: "Speakers (various sizes)",
              description: "Sound output devices distributed throughout the space",
              quantity: 15,
            },
            {
              name: "Amplifier Modules",
              description: "Signal boosting for audio output",
              quantity: 8,
            },
          ].map((component, index) => (
            <li key={index} className="flex justify-between p-3 bg-black/30 rounded-md">
              <div>
                <h4 className="font-medium">{component.name}</h4>
                <p className="text-sm text-zinc-400">{component.description}</p>
              </div>
              <div className="bg-zinc-700 h-6 px-2 rounded-full text-xs flex items-center justify-center">
                x{component.quantity}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
        <h3 className="text-xl font-semibold mb-4">Circuit Design</h3>
        <CircuitDiagram />
      </div>

      <Accordion
        type="single"
        collapsible
        className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700"
      >
        <AccordionItem value="sound-generation" className="border-b-zinc-700">
          <AccordionTrigger className="hover:no-underline">
            <h3 className="text-xl font-semibold">Sound Generation Techniques</h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-medium text-lg">AI Markov Chains</h4>
                <p className="text-zinc-300">
                  The core of the choir's "memory" is built on AI-driven Markov chain models that analyze and remember
                  patterns of interaction. This allows each node to develop a unique response profile based on its
                  history of interactions, creating an emergent behavior that evolves throughout the exhibition period.
                  The system gradually builds a probabilistic model of visitor engagement patterns, allowing it to
                  anticipate and respond in increasingly sophisticated ways.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Frequency Modulation</h4>
                <p className="text-zinc-300">
                  The primary nodes use frequency modulation synthesis, where a carrier wave's frequency is modulated by
                  another wave, creating complex timbres. This allows for a wide range of expressive sounds from
                  bell-like tones to harsh noise textures.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Granular Synthesis</h4>
                <p className="text-zinc-300">
                  Several units employ granular synthesis, breaking sounds into tiny "grains" that can be manipulated
                  and rearranged. This creates evolving textures that respond to environmental changes detected by the
                  sensors.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Feedback Networks</h4>
                <p className="text-zinc-300">
                  The choir incorporates controlled audio feedback loops between units, creating emergent behaviors
                  where the machines respond not only to human interaction but to each other's sonic output.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="interaction" className="border-b-zinc-700">
          <AccordionTrigger className="hover:no-underline">
            <h3 className="text-xl font-semibold">Interaction Design</h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-medium text-lg">Anti-HCI Approach</h4>
                <p className="text-zinc-300">
                  The Black Box Choir deliberately subverts traditional human-computer interaction principles by
                  designing interactions that don't all function as expected. This "anti-HCI" approach forces visitors
                  to explore and discover which interactions actually work, creating a more engaging and mysterious
                  experience. Some sensors appear functional but produce no response, while others hidden from obvious
                  view dramatically alter the choir's behavior when discovered.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Tactile Interaction System</h4>
                <p className="text-zinc-300">
                  One primary interaction mode features mechanical arms with various tactile surfaces. Visitors must
                  discover the correct pressure, motion, and contact points to elicit responses from the system. These
                  physical interfaces create a more intimate connection between human and machine, requiring bodily
                  engagement rather than just button-pressing.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Sensor-Based System</h4>
                <p className="text-zinc-300">
                  The second major interaction type uses an array of hidden and visible sensors (proximity, light,
                  temperature, and electromagnetic) that respond to visitor presence and movement in the space. This
                  system creates a more ambient, environmental interaction where visitors may not always be aware of how
                  their actions affect the choir's behavior.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Environmental Awareness</h4>
                <p className="text-zinc-300">
                  Light sensors and microphones allow the system to respond to the gallery environment, creating a
                  dynamic installation that evolves throughout the day and reacts to the overall sonic environment.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="software" className="border-b-0">
          <AccordionTrigger className="hover:no-underline">
            <h3 className="text-xl font-semibold">Software Architecture</h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-medium text-lg">Distributed Intelligence</h4>
                <p className="text-zinc-300">
                  Each node runs its own firmware but communicates with other nodes via I2C protocol, creating a
                  distributed network of sound-generating entities that can function both independently and as a
                  coordinated system.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Algorithmic Composition</h4>
                <p className="text-zinc-300">
                  Stochastic processes and Markov chains determine sound evolution over time, creating non-repeating
                  patterns that maintain musical coherence while constantly evolving in response to environmental
                  inputs.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Machine Learning Elements</h4>
                <p className="text-zinc-300">
                  A simple neural network implementation allows the system to learn from interaction patterns over the
                  course of the exhibition, gradually adapting its responses to create a more engaging experience for
                  returning visitors.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
