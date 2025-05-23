import  { Project, Experience, Skill, Testimonial, Service } from './types';
import { Building2, HardHat, Ruler, Compass, BarChart, FileText } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    title: "Twin Towers Commercial Complex",
    description: "Structural design and supervision for a 35-story twin office towers with connecting sky bridge",
    image: "https://images.unsplash.com/photo-1508062878650-88b52897f298?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwYnJpZGdlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzQ3ODI2NzE4fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    category: "Commercial",
    technologies: ["Structural Analysis", "Seismic Design", "Wind Load Analysis"],
    year: 2022
  },
  {
    id: 2,
    title: "Riverside Cultural Center",
    description: "Award-winning cultural hub featuring innovative sustainable design and flood protection",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwYnJpZGdlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzQ3ODI2NzE4fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    category: "Cultural",
    technologies: ["Sustainable Design", "Flood Mitigation", "Structural Engineering"],
    year: 2021
  },
  {
    id: 3,
    title: "Urban Skyscraper Development",
    description: "Lead structural engineer for 50-story mixed-use skyscraper with pioneering earthquake resistance",
    image: "https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwYnJpZGdlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzQ3ODI2NzE4fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    category: "Residential",
    technologies: ["Structural Engineering", "Earthquake Resistance", "BIM"],
    year: 2020
  },
  {
    id: 4,
    title: "Heritage Building Restoration",
    description: "Structural rehabilitation and modernization of 19th century historical landmark",
    image: "https://images.unsplash.com/photo-1472377723522-4768db9c41ce?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwYnJpZGdlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzQ3ODI2NzE4fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
    category: "Historical",
    technologies: ["Structural Reinforcement", "Historical Preservation", "Foundation Repair"],
    year: 2019
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Global Engineering Solutions",
    role: "Senior Structural Engineer",
    period: "2020 - Present",
    description: "Lead structural design for high-rise buildings and commercial complexes. Manage team of 12 engineers. Implement BIM and advanced analytical methods."
  },
  {
    id: 2,
    company: "Urban Development Partners",
    role: "Project Engineer",
    period: "2017 - 2020",
    description: "Managed structural design and construction supervision for mid-rise residential and commercial projects. Specialized in seismic design and retrofitting."
  },
  {
    id: 3,
    company: "Bridge & Infrastructure Associates",
    role: "Civil Engineer",
    period: "2014 - 2017",
    description: "Designed bridges, culverts, and transportation infrastructure. Conducted site assessments and prepared technical reports and construction documents."
  }
];

export const skills: Skill[] = [
  { id: 1, name: "Structural Design", percentage: 95 },
  { id: 2, name: "Project Management", percentage: 90 },
  { id: 3, name: "AutoCAD", percentage: 85 },
  { id: 4, name: "BIM (Revit, Tekla)", percentage: 80 },
  { id: 5, name: "Structural Analysis Software", percentage: 90 },
  { id: 6, name: "Construction Supervision", percentage: 85 },
  { id: 7, name: "Sustainable Design", percentage: 75 },
  { id: 8, name: "Geotechnical Engineering", percentage: 70 }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Director",
    company: "Metropolis Development Corp",
    text: "Alex's structural expertise was crucial to the success of our 40-story tower. His innovative solutions saved both time and construction costs while ensuring the highest safety standards."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Architect",
    company: "Chen & Partners Architecture",
    text: "Working with Alex has been exceptional. His ability to collaborate with architects while maintaining structural integrity is rare. He finds elegant solutions to complex engineering challenges."
  },
  {
    id: 3,
    name: "Rebecca Williams",
    role: "Construction Manager",
    company: "Williams Construction Group",
    text: "Alex's detailed structural plans and clear communication made our construction process smooth and efficient. His site visits and problem-solving skills were invaluable."
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Structural Engineering",
    description: "Comprehensive structural analysis and design for buildings of all types, ensuring safety, efficiency, and code compliance.",
    icon: "Building2"
  },
  {
    id: 2,
    title: "Construction Supervision",
    description: "On-site supervision to ensure construction proceeds according to design specifications, quality standards, and safety protocols.",
    icon: "HardHat"
  },
  {
    id: 3,
    title: "Geotechnical Engineering",
    description: "Soil investigation, foundation design, and geotechnical recommendations for optimal building support and stability.",
    icon: "Ruler"
  },
  {
    id: 4,
    title: "Structural Rehabilitation",
    description: "Assessment and design solutions for existing structures, including retrofitting, strengthening, and restoration.",
    icon: "Compass"
  },
  {
    id: 5,
    title: "Seismic Analysis & Design",
    description: "Specialized analysis and design for earthquake resistance, including dynamic structural modeling and performance-based design.",
    icon: "BarChart"
  },
  {
    id: 6,
    title: "Technical Consulting",
    description: "Expert advice on structural systems, construction materials, building codes, and constructability reviews.",
    icon: "FileText"
  }
];

export const serviceIconMap = {
  "Building2": Building2,
  "HardHat": HardHat,
  "Ruler": Ruler,
  "Compass": Compass,
  "BarChart": BarChart,
  "FileText": FileText
};
  