export  interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  year: number;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  percentage: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
  