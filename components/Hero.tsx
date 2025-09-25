import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-12 bg-white">
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
                  width={300}
                  height={100}
                  className="h-16 w-auto md:h-20 lg:h-24"
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