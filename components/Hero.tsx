import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-12 bg-white">
      {/* The Plan Text */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
        <span 
          className="text-xl md:text-2xl text-indigo-700 transform rotate-6 inline-block font-kalam scribble-underline"
          style={{ 
            textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.2)',
            letterSpacing: '0.5px'
          }}
        >
          The Plan
        </span>
      </div>
      <div className="max-w-8xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-indigo-900 leading-tight">
              NeuroAdaptive<br />
              Virtual<br />
              <div className="flex items-center gap-4">
                <span>Reality</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600">by</span>
                <Image
                  src="/logo.png"
                  alt="Octron Logo"
                  width={70}
                  height={21}
                  className="h-6 w-auto md:h-7"
                  priority
                />
              </div>
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-auto lg:mr-0 lg:mt-32">
            <div className="relative lg:transform lg:translate-x-8">
              <Image
                src="/header.png"
                alt="Person wearing VR headset with neural visualization"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}