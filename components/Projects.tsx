
import React, { useState, useEffect, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-200 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
            </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projectTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(p => p.tags.forEach(tag => tags.add(tag)));
    return ['All', ...Array.from(tags)];
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.tags.includes(activeFilter)));
    }
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Latest <span className="text-accent">Projects</span></h2>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {projectTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 ${
                activeFilter === tag 
                  ? 'bg-accent text-primary' 
                  : 'bg-primary text-text-primary hover:bg-accent hover:text-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
