import React from 'react';

const PROFILE_IMAGE_URL = "https://i.postimg.cc/7hTrTY9Z/portfolio-2nd-picture-2.png";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">

      {/* Soft Background Decoration */}
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 rounded-full bg-accent/20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <h2 className="text-4xl font-bold text-center mb-14">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* BIG Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="w-[26rem] h-[26rem] rounded-3xl overflow-hidden border-4 border-accent shadow-xl shadow-accent/20 transition transform duration-500 group-hover:scale-[1.03]">
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-accent/30 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Frontend Developer</h3>

            <p className="text-text-secondary leading-relaxed mb-6">
              I’m a passionate frontend developer dedicated to creating modern, clean, and responsive websites. 
              I specialize in React and Tailwind CSS, focusing on building user-friendly interfaces that combine aesthetics 
              with functionality.
            </p>

            <p className="text-text-secondary leading-relaxed mb-8">
              I enjoy exploring new technologies, designing creative layouts, and turning ideas into beautiful,
              interactive web experiences. When I’m not coding, I love learning, experimenting with new tools,
              and contributing to the developer community.
            </p>

            <a
              href="#contact"
              className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-xl hover:bg-accent/80 transition duration-300 shadow-md"
            >
              Contact Me
            </a>
            <a
              href="https://www.youtube.com/your-video-id" // Placeholder URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md ml-4"
            >
              Self Intro
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
