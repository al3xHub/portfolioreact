export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  longDescription: string;
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}