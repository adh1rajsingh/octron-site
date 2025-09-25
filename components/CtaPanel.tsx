import { Download, FileText, ArrowRight } from "lucide-react";

export default function CtaPanel() {
  return (
    <section id="research" className="section-padding bg-gradient-to-br from-primary-50 via-background to-accent-50">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-surface/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-200">
                <FileText className="w-4 h-4 mr-2" />
                Research & Documentation
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-950">
                Read Our Research
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Download our published papers to learn more about the technology and 
                clinical findings behind the NAVR platform. Discover the scientific 
                foundation that makes our approach revolutionary.
              </p>

              <div className="flex justify-center">
                <a 
                  href="https://ieeexplore.ieee.org/document/11058475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary group"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Whitepaper
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Research highlights */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 text-sm">
                <div className="flex items-center justify-center space-x-2 text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span>Peer-reviewed studies</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-accent-500" />
                  <span>Clinical validation data</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span>Technical specifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}