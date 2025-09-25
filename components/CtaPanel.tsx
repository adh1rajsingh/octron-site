"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function CtaPanel() {
  const [selectedPdf, setSelectedPdf] = useState<{file: string, title: string} | null>(null);

  const pdfs = [
    {
      id: 1,
      title: "Virtual Reality, AI and Biofeedback to Treat Attention and Anxiety Disorders",
      file: "/Virtual_Reality__AI_and_Biofeedback_to_Treat_Attention_and_Anxiety_Disorders___Systematic_Review_and_Meta_Analysis-2.pdf",
      preview: "/virtual_reality.png"
    },
    {
      id: 2,
      title: "Enhancing ADHD Diagnostic Assessments with Virtual Reality integrated with Biofeedback and Artificial Intelligence",
      file: "/export_Enhancing_ADHD_Diagnostic_Assessments_with_Virtual_Reality_integrated_with_Biofeedback_and_Artificial_Intelligence.pdf",
      preview: "/export.png"
    }
  ];

  return (
    <>
      <section id="research" className="section-padding bg-gradient-to-br from-primary-50 via-background to-accent-50">
        <div className="max-w-8xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-950">
              Read Our Research
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {pdfs.map((pdf) => (
              <div
                key={pdf.id}
                className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedPdf({file: pdf.file, title: pdf.title})}
              >
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={pdf.preview}
                    alt="PDF Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">{selectedPdf.title}</h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={selectedPdf.file}
                className="w-full h-full rounded"
                title="PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}