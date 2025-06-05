import { GlitchText } from "@/components/glitch-text"
import { ProcessGallery } from "@/components/process-gallery"
import { ExhibitionGallery } from "@/components/exhibition-gallery"
import { TechnicalDetails } from "@/components/technical-details"
import { Credits } from "@/components/credits"
import { ScrollProgress } from "@/components/scroll-progress"
import { CircuitAnimation } from "@/components/circuit-animation"
import { VideoSection } from "@/components/video-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CircuitAnimation />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            <GlitchText>BLACK BOX CHOIR</GlitchText>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Voices from the Circuits: An exploration of machine musicality through Arduino interfaces
          </p>
          <div className="flex justify-center">
            <button className="group relative px-6 py-3 overflow-hidden rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <span className="relative z-10">Explore Documentation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    An interactive sound work exploring collaboration between humans and machines.
    </h2>
    <div className="prose prose-lg prose-invert max-w-none">
      <p>
        This installation features two separate but visually paired boxes, each responding to human interaction through measures of touch and movement. When activated, each box produces sound and light. Their outputs harmonise in real time, inviting participants to engage side-by-side, and co-create an evolving sonic landscape.
      </p>
      <p>
        The work explores layered collaboration: between performers, between each person and the machine, and between human intention and AI-generated response. While human interaction initiates each sound, the machine ultimately determines what is heard, drawing on a memory of past interactions to influence its decisions and shift the sound over time.
      </p>
      <p>
        Who, then, is performing? Who is composing? The Black Box Choir invites you to experiment and listen for the answer.
      </p>
    </div>
  </div>
</section>

      {/* Video Section - Replacing Audio Experience */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience the Choir</h2>
          <VideoSection />
        </div>
      </section>

      {/* Exhibition Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Exhibition</h2>
          <ExhibitionGallery />
        </div>
      </section>

      {/* Process Documentation */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Behind the Black Box</h2>
          <ProcessGallery />
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Inside the Machines</h2>
          <TechnicalDetails />
        </div>
      </section>

      {/* Credits */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Creators</h2>
          <Credits />
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Black Box Choir</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
