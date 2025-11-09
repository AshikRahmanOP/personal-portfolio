import React from 'react';
import { certificates } from '../data/certificates';

const Certificates: React.FC = () => {

  return (
    <section id="certificates" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-text-primary">Certificates & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-primary rounded-lg border-2 border-transparent hover:border-accent overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div 
                className="relative group cursor-pointer" 
                onClick={() => window.open(certificate.image, '_blank')}
                role="button"
                aria-label={`View ${certificate.title} certificate`}
              >
                {certificate.image.endsWith('.pdf') ? (
                  <div className="w-full h-48 bg-primary flex items-center justify-center">
                    <div className="text-accent text-6xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-primary bg-accent bg-opacity-75 px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Click to view full size
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">{certificate.title}</h3>
                <p className="text-sm text-text-secondary">{certificate.issuer} • {certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;