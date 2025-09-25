export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div 
            className="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="medium" 
            data-theme="light" 
            data-type="HORIZONTAL" 
            data-vanity="anmolgarg404" 
            data-version="v1"
          >
            <a 
              className="badge-base__link LI-simple-link" 
              href="https://www.linkedin.com/in/anmolgarg404?trk=profile-badge"
            >
              Anmol Garg
            </a>
          </div>

          <div 
            className="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="medium" 
            data-theme="light" 
            data-type="HORIZONTAL" 
            data-vanity="adh1raj-singh" 
            data-version="v1"
          >
            <a 
              className="badge-base__link LI-simple-link" 
              href="https://www.linkedin.com/in/adh1raj-singh?trk=profile-badge"
            >
              Adhiraj Singh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
