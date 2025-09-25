import { AlertCircle, Target, Zap } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-neutral-50">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-medium border border-red-200">
              <AlertCircle className="w-4 h-4 mr-2" />
              Current Challenges
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-950">
              The Limits of Subjective Assessment
            </h2>
            
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mx-auto">
              Traditional mental health diagnostics rely on subjective self-reports and periodic 
              clinical observation. This can lead to a lack of objectivity, delayed treatment 
              adjustments, and one-size-fits-all approaches that don&apos;t address the unique 
              neurophysiological needs of every patient.
            </p>
          </div>

          {/* Problem Points */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-surface rounded-xl p-6 border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Lack of Objectivity
              </h3>
              <p className="text-neutral-600">
                Reliance on subjective reports can lead to inconsistent and unreliable assessments, 
                making it difficult to track progress accurately.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Delayed Adjustments
              </h3>
              <p className="text-neutral-600">
                Periodic clinical observations may miss critical changes in patient condition, 
                resulting in delayed treatment modifications.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                One-Size-Fits-All
              </h3>
              <p className="text-neutral-600">
                Generic approaches fail to account for individual neurophysiological differences, 
                limiting treatment effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}