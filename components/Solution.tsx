import Image from "next/image";
import { CheckCircle, Database, Lightbulb } from "lucide-react";

export default function Solution() {
  return (
    <section id="solution" className="section-padding">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital brain visualization showing AI-powered neural network analysis"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
                <CheckCircle className="w-4 h-4 mr-2" />
                Our Innovation
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-950">
                NAVR: Data-Driven Insight, Real-Time Adaptation
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                NAVR creates a closed-loop system that revolutionizes mental healthcare. 
                By capturing objective physiological data in real-time within controlled 
                VR environments, our AI-driven platform offers a truly personalized and 
                adaptive therapeutic experience.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Database className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                    Objective Measurement
                  </h3>
                  <p className="text-neutral-600">
                    Real-time physiological data eliminates subjective bias and provides 
                    accurate, quantifiable metrics for assessment and treatment tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                    Adaptive Intelligence
                  </h3>
                  <p className="text-neutral-600">
                    AI continuously learns and adapts to each patient&apos;s unique patterns, 
                    optimizing therapeutic interventions in real-time for maximum effectiveness.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                    Clinical Integration
                  </h3>
                  <p className="text-neutral-600">
                    Seamlessly integrates with existing clinical workflows, providing 
                    clear, actionable reports that enhance decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}