
import type React from 'react';

export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  subtitle:string;
  description: string[];
  highlight?: string;
  icon: React.ReactNode;
}

export interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}
