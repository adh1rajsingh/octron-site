import { Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="section-padding bg-neutral-900 text-neutral-100">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/o-logo.png"
              alt="Octron Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
                <h3 className="text-3xl font-montserrat font-semibold text-white">
                  OCTRON
                </h3>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
            <a 
              href="mailto:info@octron.com" 
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              info@octron.com
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © 2024 Octron. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}