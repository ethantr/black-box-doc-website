export function Credits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
        <h3 className="text-xl font-semibold mb-4">Core Team</h3>
        <ul className="space-y-4">
          {[
            {
              "name": "Ethan Teber-Rossi",
              "role": "Software and Sound Designer",
              "bio": "Worked on music system design, custom software, and circuit development for interactive sound behaviours."
            },
            {
              "name": "Darcy Gilbert",
              "role": "Software and Sound Designer",
              "bio": "Contributed to software architecture, audio interaction design, and building the embedded circuit systems."
            },
            {
              "name": "Kira Jackson",
              "role": "Creative and Physical Designer",
              "bio": "Led the creative direction and was responsible for the design and construction of the physical enclosures."
            },
            {
              "name": "Fiona Chu",
              "role": "Creative and Physical Designer",
              "bio": "Focused on visual and spatial design, and co-developed the physical housing for the installation."
            }
          ].map((person, index) => (
            <li key={index} className="border-l-2 border-purple-500 pl-4">
              <h4 className="font-semibold text-lg">{person.name}</h4>
              <p className="text-purple-300 text-sm">{person.role}</p>
              <p className="text-zinc-400 text-sm mt-1">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
          <h3 className="text-xl font-semibold mb-4">Collaborators & Support</h3>
          <ul className="space-y-3">
            {[
              "Pia Van Gelder - ",
              "NIME 2025 - ",
              "The Australian National University - ",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
          <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Arduino IDE",
              "Teensy Audio Library",
              "Pure Data",
              "Eagle PCB Design",
              "Fusion 360",
              "Max/MSP",
              "Processing",
              "Laser Cutter",
            ].map((tool, index) => (
              <div key={index} className="bg-black/30 rounded-md px-3 py-2 text-center">
                {tool}
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className="md:col-span-2 bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
        <h3 className="text-xl font-semibold mb-4">Project Repository</h3>
        <div className="flex items-center gap-4">
          <div className="bg-black/30 rounded-md p-4 flex-1">
            <p className="text-zinc-300 mb-2">
              All code, schematics, and documentation are available under an open-source license:
            </p>
            <div className="flex items-center gap-2 text-blue-400">
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
              <a href="#" className="hover:underline">
                github.com/black-box-choir
              </a>
            </div>
          </div>
          {/* <div className="bg-black/30 rounded-md p-4 flex-1">
            <p className="text-zinc-300 mb-2">For more information and contact:</p>
            <div className="flex items-center gap-2 text-blue-400">
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
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <a href="#" className="hover:underline">
                contact@blackboxchoir.art
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
