
import React, { useState, useEffect, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-secondary rounded-lg overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-200 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <button onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }} 
              className="px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent/80 transition-colors"
              >
                Live Demo
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-secondary rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-text-primary">{project.title}</h2>
            <button 
              onClick={onClose}
              className="text-text-secondary hover:text-accent"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="space-y-6">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img src={project.screenshots[0]} alt={project.title} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">Description</h3>
                <p className="text-text-secondary">{project.longDescription || project.description}</p>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && (
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary rounded-full text-sm text-text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.challenges && (
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Challenges & Solutions</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex justify-center space-x-4 pt-4">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-accent text-primary rounded-lg hover:bg-accent/80 transition-colors"
                >
                  View Live Demo
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <ProjectCard 
              key={index} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
