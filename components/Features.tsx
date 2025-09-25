import Image from "next/image";

export default function Features() {
  return (
    <section id="how-it-works" className="section-padding bg-neutral-50">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-200">
            How NAVR Works
          </div>
          
          <div className="flex justify-center">
            <Image
              src="/SysDesign.png"
              alt="NAVR System Design Architecture"
              width={1200}
              height={800}
              className="w-full h-auto max-w-6xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}