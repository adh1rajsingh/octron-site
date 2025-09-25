import Image from "next/image";

export default function Features() {
  return (
    <section id="how-it-works" className="section-padding bg-neutral-50">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How NAVR Works
          </h2>
          
          <div className="flex justify-center mb-8">
            <Image
              src="/SysDesign.png"
              alt="NAVR System Design Architecture"
              width={1200}
              height={800}
              className="w-full h-auto max-w-6xl rounded-lg"
            />
          </div>

          {/* Additional Images */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <Image
                src="/side.jpeg"
                alt="NAVR Side View"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/front.png"
                alt="NAVR Front View"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}