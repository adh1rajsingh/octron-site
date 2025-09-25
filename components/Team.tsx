import { Linkedin } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-950 mb-4">
            Team
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Anmol Garg LinkedIn Badge */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-lg">
            <div className="flex items-center space-x-4">
              <img 
                src="/anmol.jpeg"
                alt="Anmol Garg"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base">Anmol Garg</h3>
                <p className="text-base text-gray-600">Co-Founder</p>
                <p className="text-sm text-gray-500">PhD Drug Design 2030 | Flywheel AI | Stanford</p>
              </div>
              <a 
                href="https://www.linkedin.com/in/anmolgarg404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 p-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Adhiraj Singh LinkedIn Badge */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-lg">
            <div className="flex items-center space-x-4">
              <img 
                src="/adhiraj.png"
                alt="Adhiraj Singh"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base">Adhiraj Singh</h3>
                <p className="text-base text-gray-600">Co-Founder</p>
                <p className="text-sm text-gray-500">Founded Praxis Works | Rutgers University</p>
              </div>
              <a 
                href="https://www.linkedin.com/in/adh1raj-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 p-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
