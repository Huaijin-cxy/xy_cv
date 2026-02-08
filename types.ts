
export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  scope: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  institution: string;
  summary: string;
  background: string;
  methodology: string;
  contributions: string[];
  techStack: string[];
  results: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
