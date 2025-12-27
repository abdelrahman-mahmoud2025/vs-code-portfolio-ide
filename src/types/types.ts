
export type FileType = 'tsx' | 'json' | 'git' | 'sh' | 'css' | 'md';

export interface PortfolioFile {
  id: string;
  name: string;
  path: string;
  type: FileType;
  icon: string;
  iconColor: string;
  rawCode: string;
}

export interface Profile {
  name: string;
  alias: string;
  role: string;
  mission: string;
  avatar: string;
  contact?: {
    phone: string[];
    email: string;
    website: string;
    location: string;
  };
  summary?: string;
}

export interface Skill {
  name: string;
  experience: string;
  shortName: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  sourceUrl: string;
}

export interface Experience {
  hash: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  technologies: string[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Extension {
  id: string;
  name: string;
  author: string;
  description: string;
  icon: string;
  color: string;
  url: string;
  installed: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}
