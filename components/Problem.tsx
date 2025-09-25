import Image from "next/image";

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-neutral-50">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-950 mb-6">
              The Limits of Subjective Assessment
            </h2>
          </div>

          {/* Paragraph with inline image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Traditional mental health diagnostics rely on subjective self-reports and periodic 
              clinical observation. This can lead to a lack of objectivity, delayed treatment 
              adjustments, and one-size-fits-all approaches that don&apos;t address the unique 
              neurophysiological needs of every patient.
            </p>
            <div className="relative max-w-md mx-auto lg:ml-18 lg:mr-0">
              <Image
                src="/info.png"
                alt="Mental health assessment challenges illustration"
                width={280}
                height={200}
                className="w-full h-auto object-cover rounded-lg bg-transparent"
              />
            </div>
          </div>

          {/* Problem Points in 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-surface rounded-xl p-6 border border-border/50 shadow-sm">
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Super Slow Process
              </h3>
              <p className="text-neutral-600">
                Even the simplest processes like serving an initial identification battery of tests 
                is done through paper. These are time consuming and result in major backlogs in appointments.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border/50 shadow-sm">
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Lack of Objectivity
              </h3>
              <p className="text-neutral-600">
                Reliance on subjective reports can lead to inconsistent and unreliable assessments, 
                making it difficult to track progress accurately.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border/50 shadow-sm">
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Delayed Adjustments
              </h3>
              <p className="text-neutral-600">
                Irregular clinical observations may miss critical changes in patient condition, 
                resulting in delayed treatment modifications.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border/50 shadow-sm">
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