
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

// The user should replace this URL with a link to their own profile image.
// An image with a transparent background is recommended for best results.
const PROFILE_IMAGE_URL = 'https://i.postimg.cc/QdG9TjC2/user-profile.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mt-2 mb-4">
            Creative Designer & Developer
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto md:mx-0 mb-8">
            I'm a passionate developer with expertise in creating modern and responsive web applications. I love turning ideas into reality through code.
          </p>
          
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 border-2 border-accent rounded-full text-accent flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <a
            href="#"
            className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-secondary overflow-hidden border-4 border-accent shadow-lg shadow-accent/20">
                 <img
                    src={PROFILE_IMAGE_URL}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
