
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-accent">Skills</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-secondary rounded-lg border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-text-primary">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
