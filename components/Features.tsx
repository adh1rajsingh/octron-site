import { Brain, Activity, Cpu } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Immersive Virtual Reality (VR)",
      description: "NAVR uses cutting-edge VR to create controlled, repeatable scenarios that test cognitive functions like attention and focus in an engaging way. This provides a standardized environment for precise assessment.",
      color: "primary",
    },
    {
      icon: Activity,
      title: "Real-Time Biofeedback",
      description: "Wearable sensors continuously monitor over 16 physiological streams, including heart rate, skin conductance, and motion. This provides an objective, real-time window into a patient's cognitive and emotional state.",
      color: "accent",
    },
    {
      icon: Cpu,
      title: "Adaptive AI Engine",
      description: "NAVR's sophisticated AI analyzes the biofeedback data to identify patterns and classify cognitive states. The \"NeuroAdaptive\" system then dynamically adjusts the VR experience to optimize the therapeutic journey, generating clear, data-driven reports for clinicians.",
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    if (color === "accent") {
      return {
        iconBg: "bg-accent-100",
        iconText: "text-accent-600",
        gradient: "from-accent-50 to-accent-100/50",
      };
    }
    return {
      iconBg: "bg-primary-100",
      iconText: "text-primary-600",
      gradient: "from-primary-50 to-primary-100/50",
    };
  };

  return (
    <section id="how-it-works" className="section-padding bg-neutral-50">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-200">
            <Cpu className="w-4 h-4 mr-2" />
            How NAVR Works
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-950 max-w-4xl mx-auto">
            Three-Component System for Personalized Mental Healthcare
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            NAVR combines immersive technology, real-time monitoring, and intelligent adaptation 
            to create a comprehensive platform for mental health assessment and treatment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const IconComponent = feature.icon;
            
            return (
              <div key={index} className="card group">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl ${colorClasses.iconBg} flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${colorClasses.iconText}`} />
                  </div>
                  <div className="text-3xl font-serif font-light text-neutral-300">
                    0{index + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Process flow indicator */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex items-center space-x-4">
            {[0, 1, 2].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary-500" />
                {index < 2 && (
                  <div className="w-12 h-0.5 bg-primary-200 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}