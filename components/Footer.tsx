
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-text-secondary mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Your Name | All Rights Reserved.
        </p>
        <div className="flex space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
