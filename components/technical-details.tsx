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
              "name": "Arduino Uno R3",
              "description": "Main controller units for interactive sound nodes",
              "quantity": 2
            },
            {
              "name": "Adafruit Music Maker Shield",
              "description": "Digital audio generation and processing (paired with Uno)",
              "quantity": 2
            },
            {
              "name": "Amplifier Modules",
              "description": "Boosts audio signal from Music Maker Shield (paired with speakers and switches)",
              "quantity": 2
            },
            {
              "name": "Speakers (various sizes)",
              "description": "Output devices for sound playback, integrated with amplifier modules",
              "quantity": 2
            },
            {
              "name": "Switches",
              "description": "Physical interface for toggling sound modules",
              "quantity": 2
            },
            {
              "name": "Film Pressure Sensors",
              "description": "Responsive to touch and pressure for triggering sound events",
              "quantity": 2
            },
            {
              "name": "Ultrasonic Sensors",
              "description": "Distance sensing for interactive spatial triggers",
              "quantity": 3
            },
            {
              "name": "LED (Blue)",
              "description": "Visual indicator for system state or user feedback",
              "quantity": 1
            },
            {
              "name": "LED (Green)",
              "description": "Visual indicator for system state or user feedback",
              "quantity": 1
            },
            {
              "name": "Battery Packs",
              "description": "Portable power supply for off-grid operation",
              "quantity": 2
            }
          ]
            .map((component, index) => (
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

      {/* <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
        <h3 className="text-xl font-semibold mb-4">Circuit Design</h3>
        <CircuitDiagram />
      </div> */}

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
                <h4 className="font-medium text-lg">MIDI Synthesis with Timed Sequencing</h4>
                <p className="text-zinc-300">
                  The system uses MIDI over a VS1053 synthesiser module, generating layered four-note chords in sync with an 8-step sequencer. Chords are regenerated periodically depending on distance input, blending ambient pads with rhythmically evolving harmony.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Dynamic Volume Mapping</h4>
                <p className="text-zinc-300">
                  A second ultrasonic sensor adjusts the overall volume in real time, mapping proximity to MIDI CC 7 (volume). This enables expressive control over loudness through body movement alone.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Low Frequency Oscillator Effects</h4>
                <p className="text-zinc-300">
                  A software LFO modulates parameters like filter brightness over time, giving subtle motion to the otherwise static pad sounds. This introduces organic variation even when inputs remain steady.
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
                <h4 className="font-medium text-lg">Proximity-Driven Sound Logic</h4>
                <p className="text-zinc-300">
                  Two ultrasonic sensors detect hand movement and presence. The first controls the rate of chord regeneration, with closer proximity accelerating harmonic changes. The second sensor adjusts output volume, rewarding physical closeness with louder, more immersive sound.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Responsive LED Feedback</h4>
                <p className="text-zinc-300">
                  A built-in LED provides immediate visual feedback tied to sensor activity. Brightness and blinking patterns reflect changes in proximity and chord transitions, helping users intuitively understand the system’s state.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Exploratory Interaction</h4>
                <p className="text-zinc-300">
                  The system encourages a hands-on, embodied approach to interaction. Visitors can wave, hold, or experiment with distance to influence the system’s sound behaviour—emphasising playful experimentation over precise control.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg">Material and Form as Interface</h4>
                <p className="text-zinc-300">
                  The design embraces handmade aesthetics, using cloth, cardboard, and paper straw framing to evoke a lantern-like object. These tactile and translucent materials support the idea of the sound “glowing” from within, reinforcing the metaphor of light as sound.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="software" className="border-b-0">
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
        </AccordionItem> */}
      </Accordion>
    </div>
  )
}
