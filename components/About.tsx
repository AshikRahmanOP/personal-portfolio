
import React from 'react';

const PROFILE_IMAGE_URL = 'https://i.postimg.cc/7hTrTY9Z/portfolio-2nd-picture-2.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About <span className="text-accent">Me</span></h2>
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-96 h-96 sm:w-96 sm:h-96 rounded-full bg-primary overflow-hidden border-4 border-accent shadow-lg shadow-accent/20 relative">
              <img
                src={PROFILE_IMAGE_URL}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Frontend Developer!</h3>
            <p className="text-text-secondary mb-6">
              Hello! I'm a self-taught Frontend Developer based in the digital world. My journey into web development started with a curiosity for how things work on the internet. Since then, I've been dedicated to learning new technologies and building beautiful, functional websites and applications. I specialize in React and love bringing designs to life with clean, efficient code.
            </p>
            <p className="text-text-secondary mb-8">
              When I'm not coding, I enjoy exploring new creative hobbies, contributing to open-source projects, and staying up-to-date with the latest industry trends.
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
