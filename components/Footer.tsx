import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="section-padding bg-neutral-900 text-neutral-100">
      <div className="max-w-8xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-semibold text-white mb-4">
                Octron
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-lg">
                Pioneering the future of mental healthcare through innovative 
                NeuroAdaptive VR Therapy technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">
                  Penn State University, PA
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:info@octron.com" 
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  info@octron.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+1-555-0123" 
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  +1 (555) 012-3456
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-800 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-white mb-6">
              Get in Touch
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Tell us about your interest in NAVR..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>
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