import Image from "next/image";
import { ArrowRight, Brain, Activity, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-200">
                <Brain className="w-4 h-4 mr-2" />
                Octron: Pioneering the Future of Mental Healthcare
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-neutral-950 leading-tight">
                Introducing{" "}
                <span className="text-primary-600">NAVR</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-neutral-700 leading-snug">
                Objective, Personalized Mental Health Diagnostics
              </h2>
            </div>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
              NAVR, the flagship product from Octron, integrates immersive Virtual Reality 
              with real-time biofeedback and Artificial Intelligence to provide a new standard 
              in assessing and treating ADHD and anxiety disorders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#solution" className="btn btn-primary group">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#research" className="btn btn-secondary">
                View Research
              </a>
            </div>

            {/* Key features preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Immersive VR</h4>
                  <p className="text-sm text-neutral-600">Controlled environments</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Real-time Data</h4>
                  <p className="text-sm text-neutral-600">16+ biometric streams</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Adaptive AI</h4>
                  <p className="text-sm text-neutral-600">Personalized therapy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-50 to-accent-50">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Neural network visualization representing NAVR's AI-driven approach to mental health assessment"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}