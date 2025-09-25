import { GraduationCap, Award, Users } from "lucide-react";

export default function Credibility() {
  return (
    <section id="credibility" className="section-padding">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200">
              <GraduationCap className="w-4 h-4 mr-2" />
              Scientific Foundation
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-950">
              Grounded in Scientific Research
            </h2>
            
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mx-auto">
              Developed through a collaboration between the College of Medicine and the 
              College of Engineering at Penn State, the technology behind NAVR is built 
              on a foundation of rigorous academic research and clinical validation.
            </p>
          </div>

          {/* Credibility indicators */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-surface rounded-xl p-8 border border-border/50 shadow-sm text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                Academic Excellence
              </h3>
              <p className="text-neutral-600">
                Developed through collaboration between Penn State&apos;s College of Medicine 
                and College of Engineering, ensuring both clinical relevance and technical rigor.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-8 border border-border/50 shadow-sm text-center">
              <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                Clinical Validation
              </h3>
              <p className="text-neutral-600">
                Our research methodology has undergone rigorous peer review and clinical 
                testing to ensure safety, efficacy, and real-world applicability.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-8 border border-border/50 shadow-sm text-center">
              <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                Expert Team
              </h3>
              <p className="text-neutral-600">
                Our multidisciplinary team combines expertise in neuroscience, engineering, 
                computer science, and clinical psychology for comprehensive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}