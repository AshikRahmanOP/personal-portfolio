import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      level: 'BSc in Computer Science & Engineering',
      institution: 'American International University-Bangladesh',
      location: 'Dhaka, Bangladesh',
      period: '2023 - Present',
      status: 'Currently Studying',
      details: 'Focusing on Software Engineering and Web Development'
    },
    {
      id: 2,
      level: 'Higher Secondary Certificate (HSC)',
      institution: 'Dhaka City College',
      location: 'Dhaka, Bangladesh',
      period: '2019 - 2021',
      status: 'Completed',
      details: 'Science Group'
    },
    {
      id: 3,
      level: 'Secondary School Certificate (SSC)',
      institution: 'Police Lines School and College',
      location: 'Rangpur, Bangladesh',
      period: '2017 - 2019',
      status: 'Completed',
      details: 'Science Group'
    }
  ];

  return (
    <section id="education" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education <span className="text-accent">Journey</span></h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20"></div>
          
          {/* Education Items */}
          <div className="space-y-16">
            {education.map((edu, index) => (
              <div 
                key={edu.id}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full"></div>
                
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-secondary p-6 rounded-lg border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{edu.level}</h3>
                    <h4 className="text-xl text-accent mb-2">{edu.institution}</h4>
                    <p className="text-text-secondary mb-1">{edu.location}</p>
                    <p className="text-text-secondary mb-2">{edu.period}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      edu.status === 'Currently Studying' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-green-500/20 text-green-500'
                    }`}>
                      {edu.status}
                    </span>
                    <p className="mt-3 text-text-secondary">{edu.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;