
import React from 'react';
import { NavLink, SocialLink, Skill, Project } from './types';

// Icons as JSX elements
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.facebook.com/bigbossxd/about', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, label: 'Facebook' },
  { href: 'https://x.com/Ashikra11692671', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/ashik-rahman-836532383/', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, label: 'LinkedIn' },
];

export const SKILLS: Skill[] = [
    { name: 'HTML5', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.28-.002.607 6.72h8.777l-.262 2.877-2.824.786-2.823-.786-.186-2.11h-2.61l.33 4.171L12 17.49l5.025-1.385.684-7.355H8.531z"/></svg> },
    { name: 'CSS3', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.15 4.013l-12.822.001.232 2.622 10.059-.002-.231 2.718H6.62l.232 2.622h8.14l-.325 3.597-3.238.903-3.237-.903-.22-2.47H5.13l.33 4.171L12 19.987l6.539-1.819.92-10.155H18.65z"/></svg> },
    { name: 'JavaScript', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.05 18.513c.186-1.12.22-2.133.093-3.04-.26-1.826-1.026-3.4-2.2-4.666-1.173-1.267-2.626-2.08-4.293-2.427-.986-.2-2.013-.226-3.026-.08-1.027.147-2.014.48-2.92.973-.907.493-1.747 1.146-2.48 1.933.226-.226.413-.44.586-.653l1.8-2.226c.22-.267.386-.547.506-.84.12-.293.187-.601.187-.92a.854.854 0 00-.28-.68c-.186-.187-.44-.28-.76-.28-.293 0-.573.093-.84.28-.267.187-.507.426-.72.72l-2.013 2.52c-.187.24-.36.507-.507.787-.147.28-.267.586-.36.906-.093.32-.133.653-.12.986.013.334.08.654.187.96.107.307.254.6.427.867.173.266.374.52.587.747-1.106 1.346-1.72 2.96-1.72 4.773 0 .2.014.4.04.586.026.187.08.374.147.547.066.173.16.333.266.48.107.147.227.28.36.4-.24.226-.453.467-.64.707l-1.573 1.973c-.24.293-.427.601-.56.92-.133.32-.2.653-.2.987 0 .346.093.666.28.96.187.293.44.506.76.64.32.133.64.2.96.2.293 0 .573-.067.84-.2.266-.133.506-.32.72-.56l2.013-2.52c.24-.293.44-.601.6-92.16-.32.2-.64.346-.947.346-.373 0-.706-.12-1-.36-.293-.24-.52-.547-.68-.92-.16-.373-.24-.787-.24-1.227 0-1.4.453-2.666 1.36-3.8 1.48-1.827 3.546-2.747 6.2-2.747 1.133 0 2.2.173 3.2.52.987.346 1.867.866 2.627 1.56.76.693 1.373 1.533 1.84 2.52.467.986.733 2.053.8 3.2.067 1.147 0 2.267-.2 3.36-.187.986-.534 1.893-1.04 2.72-.507.826-1.16 1.533-1.96 2.12-.8.586-1.693.973-2.68 1.16-.987.187-1.987.173-2.987-.04-1-.213-1.947-.6-2.84-1.146-.893-.547-1.68-1.227-2.36-2.027l-1.467 1.8c-.2.253-.373.52-.52.787-.147.266-.22.547-.22.84 0 .32.08.613.24.88.16.267.373.48.64.64.267.16.547.24.84.24.4 0 .787-.147 1.16-.44.373-.293.733-.653 1.08-1.08.627.573 1.3.987 2.027 1.24.72.253 1.453.387 2.2.387.827 0 1.627-.173 2.4-.52s1.467-.853 2.08-1.52c.613-.667 1.12-1.493 1.52-2.48.4-.987.667-2.093.8-3.32z"/></svg> },
    { name: 'React', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M12.015 4.23a.954.954 0 00-.958.948v2.01c-1.58.28-2.97.94-4.01 1.81-.13.11-.24.23-.34.35a.953.953 0 00-.28.67c0 .4.24.75.6.89.32.13.68.06.92-.19.08-.09.18-.17.28-.25 1.7-1.49 4.19-1.94 6.35-1.14.21.08.43.12.65.14v1.5a.954.954 0 00.957.95c.53 0 .958-.42.958-.95V8.13a.953.953 0 00-.32-.71c-2.33-1.93-5.65-2.43-8.3-1.25a.953.953 0 00-.63.88c0 .53.43.95.96.95.4 0 .76-.24.9-.6.21-.53.47-1.04.79-1.52a.953.953 0 00-.11-1.12.954.954 0 00-1.12.11c-.3.26-.57.55-.8.87-.04.05-.08.1-.12.14a.955.955 0 00-.22.75c0 .36.21.68.52.86.33.19.73.18 1.05-.03.3-.19.57-.42.82-.67 2.89-2.88 7.85-2.22 9.79.94.13.21.23.44.32.67a.953.953 0 00.9.55c.53 0 .96-.43.96-.95a.953.953 0 00-.4-1.06c-1.9-1.42-4.24-2-6.49-1.6v-2.01c0-.52-.43-.95-.96-.95zM4.23 12.015a.954.954 0 00-.948.958h2.01c.28 1.58.94 2.97 1.81 4.01.11.13.23.24.35.34.42.27.67.73.67 1.22a.953.953 0 00.67.9c.4.15.86-.03 1.1-.42.09-.12.16-.25.23-.38 1.49-1.7 1.94-4.19 1.14-6.35-.08-.21-.12-.43-.14-.65h1.5a.954.954 0 00.95-.957.954.954 0 00-.95-.958H15.87a.953.953 0 00-.71.32c-1.93 2.33-2.43 5.65-1.25 8.3.15.32.08.7-.19.94-.27.24-.66.31-1 .13-.53-.29-.78-.89-.5-1.37.53-.9.8-1.9.8-2.95a.953.953 0 00-1.12-.9.954.954 0 00-.9.93c0 .32.07.64.19.93.26.6.14 1.3-.32 1.73-.32.3-.73.43-1.14.33-.8-.2-1.46-.72-1.9-1.42a.955.955 0 00-.75-.22.953.953 0 00-.86.52c-.19.33-.18.73.03 1.05.19.3.42.57.67.82 2.88 2.89 2.22 7.85-.94 9.79-.21.13-.44.23-.67.32.55.23.95.74.95 1.33 0 .53-.43.96-.95.96a.953.953 0 00-1.06-.4c-1.42-1.9-2-4.24-1.6-6.49v2.01c0 .52.42.95.95.958.52 0 .95-.43.95-.958z"/></svg> },
    { name: 'Node.js', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.75 0C5.25 0 0 5.313 0 11.875v.25C0 18.688 5.25 24 11.75 24s11.75-5.313 11.75-11.875v-.25C23.5 5.313 18.25 0 11.75 0zm.688 19.313c-2.125 0-3.313-.625-4.188-1.25l.813-1.688c.688.5 1.625 1.063 2.938 1.063 1.563 0 2.25-.625 2.25-1.563v-.063c0-.875-.5-1.438-2.813-2.125-2.813-.813-4.125-1.688-4.125-3.813 0-1.875 1.5-3.25 3.813-3.25 1.75 0 2.813.438 3.5 1l-.813 1.625c-.5-.375-1.25-.813-2.313-.813-1.125 0-1.813.563-1.813 1.375 0 .813.563 1.313 2.625 1.938 2.875.813 4.313 1.75 4.313 3.875.063 2.063-1.5 3.563-4.126 3.563z"/></svg> },
    { name: 'Python', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg> },
    { name: 'Git', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.5,10.957,13.043.5a1.714,1.714,0,0,0-2.429,0L.5,10.957a1.714,1.714,0,0,0,0,2.429l6.314,6.314a1.714,1.714,0,0,0,2.429,0L11.5,17.443V13.7a1.143,1.143,0,0,1,.334-.809l2.757-2.757a1.144,1.144,0,0,1,1.618,0l2.757,2.757a1.143,1.143,0,0,1,.334.809v5.186a1.714,1.714,0,0,0,2.429,0l1.771-1.771a1.714,1.714,0,0,0,0-2.429ZM12.286,8.514a1.714,1.714,0,1,0,1.714,1.714A1.714,1.714,0,0,0,12.286,8.514Z"/></svg> },
    { name: 'Figma', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.25 18c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm7.5 7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3h.01c1.657 0 3 1.343 3 3s-1.343 3-3 3h-.01zM12 10.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> },
];

export const PROJECTS: Project[] = [
  {
    title: 'Saloon management system',
    description: 'The main goal of this system is to help salon owners manage appointments, customers, and services in one place. It reduces manual work, prevents booking conflicts, and improves customer experience..',
    longDescription: 'This system is designed to simplify and automate daily salon operations, making management faster, easier, and more efficient..',
    image: 'https://i.postimg.cc/mZ39zgVM/saloon-man-picture.webp',
    tags: ['Web App', 'React', 'Node.js'],
    liveUrl: 'https://youtu.be/ucglOapuaXo',
    
    features: [
      'Online appointment booking and scheduling',
      'Customer management with profiles and history',
      'Service catalog with pricing and descriptions',
      'Automated reminders and notifications',
      'Staff management and performance tracking'
    ],
    technologies: [
      'React for front-end development',
      'Node.js and Express for back-end development',
      'MongoDB for database management',
      'JWT for authentication and security',
      'CSS3 and HTML5 for responsive design'
      
    ],
    challenges: [
      'Integrating real-time notifications for appointment reminders',
      'Ensuring data security and privacy for customer information',
      'Designing a user-friendly interface for both staff and customers'
    ],
    screenshots: [
      
    ]
  },
  {
    title: 'Computer graphics Project simulation',
    description: 'This computer graphics project presents a real-time interactive simulation that visually demonstrates motion, animation, and graphical transformations using modern rendering techniques.',
    image: 'https://i.postimg.cc/L540d0Nf/computer-graphics-project.webp',
    tags: ['Computer Graphics', 'OpenGL'],
    liveUrl: 'https://youtu.be/LDY1lhxkl6E',
    githubUrl: '#',

    features: [
      'Real-time rendering of 3D objects and environments',
      'Interactive controls for manipulating objects and camera views',
      'Implementation of lighting and shading techniques',
      'Animation of objects to demonstrate motion and transformations',
      'User interface for selecting different simulation scenarios'
    ],
    technologies: [
      'OpenGL for graphics rendering',
      'C++ for performance-intensive computations',
      'GLUT for windowing and user input handling',
      'Shaders for advanced visual effects'
    ],
    challenges: [
      'Optimizing rendering performance for real-time interaction',
      'Implementing complex graphical transformations and animations',
      'Designing an intuitive user interface for simulation control'  
    ],
  },
  {
    title: 'Ripeness identification of fruits',
    description: 'Electronically measure how light is reflected from different color surfaces, and build a circuit that can differentiate between red and green produce',
    image: 'https://i.postimg.cc/5yR0LTry/ripe-picture.avif',
    tags: ['Electronics', 'Arduino'],
    liveUrl: 'https://youtu.be/2JobmF9sK-8',
    githubUrl: '#',
    features: [
      'Color detection using light reflection',
      'Circuit design for interfacing sensors with microcontroller',
      'Real-time feedback on fruit ripeness',
      'User-friendly interface for easy operation',
      'Data logging for analysis of ripeness patterns'
    ],
    technologies: [
      'Arduino microcontroller for processing sensor data',
      'Color sensors for detecting light reflection',
      'C/C++ programming for microcontroller logic',
      'Breadboard and electronic components for circuit assembly'
    ],
    challenges: [
      'Calibrating sensors for accurate color detection',
      'Designing a reliable circuit for consistent performance',
      'Developing an intuitive user interface for non-technical users'
    ],  
  },
  {
    title: 'Balancing a surface using Arduino',
    description: 'A project that involves creating a system to balance a surface using sensors and actuators controlled by an Arduino microcontroller.',
    image: 'https://i.postimg.cc/28p8RsWk/balancing-eee-project.png',
    tags: ['Electronics', 'Arduino'],
    liveUrl: 'https://youtu.be/jSx3Djy0lSw',
    githubUrl: '#',
    features: [
      'Real-time surface balancing using sensor feedback',
      'Actuator control for adjusting surface position',
      'User interface for monitoring and controlling the system',
      'Data logging for performance analysis',
      'Safety mechanisms to prevent overcorrection'
    ],
    technologies: [
      'Arduino microcontroller for processing sensor data',
      'Gyroscopic sensors for detecting surface tilt',
      'Servo motors for adjusting surface position',
      'C/C++ programming for microcontroller logic'
    ],
    challenges: [
      'Tuning the control algorithm for stable balancing',
      'Integrating sensors and actuators effectively',
      'Ensuring system responsiveness to rapid changes in surface tilt'
    ],  
  },
    
];
