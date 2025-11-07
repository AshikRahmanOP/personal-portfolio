
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: React.ReactElement;
  label: string;
}

export interface Skill {
  name: string;
  icon: React.ReactElement;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}
