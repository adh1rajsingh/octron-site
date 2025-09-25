import { Download, FileText, ArrowRight } from "lucide-react";

export default function CtaPanel() {
  return (
    <section id="research" className="section-padding bg-gradient-to-br from-primary-50 via-background to-accent-50">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="flex items-center justify-center gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-950">
            Read Our Research
          </h2>
          
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
      </div>
    </section>
  );
}