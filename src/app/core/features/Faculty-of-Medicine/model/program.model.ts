export interface ProgramDetails {
  id: number;
  name: string;
  description: string;
  establishedDate: string;
  vision?: string;
  mission?: string;
  objectives?: string[];
  generalOverview?: string;
  coordinator?: string;
  members?: ProgramMember[];
  courses?: Course[];
  services?: ProgramService[];
  news?: ProgramNews[];
  duration: string;
  degree: string;
  department: string;
  careerOpportunities?: string[];
}

export interface Course {
  id: number;
  name: string;
  description: string;
  credits: number;
  semester: string;
  prerequisites?: string[];
}

export interface ProgramService {
  id: number;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  requirements?: string[];
  procedures?: string[];
  duration?: string;
  cost?: string;
}

export interface ProgramNews {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  publishDate: string;
  lastModified: string;
  author: string;
  category: ProgramNewsCategory;
  imageUrl?: string;
  tags?: string[];
  isPublished: boolean;
  views?: number;
}

export interface ProgramContactInfo {
  phone?: string;
  email?: string;
  office?: string;
  website?: string;
}

export interface ProgramMember {
  id: number;
  name: string;
  title: string;
  email: string;
  phone?: string;
  office?: string;
  specialization: string;
}

export enum ProgramNewsCategory {
  NEWS = 'أخبار',
  CONFERENCES = 'مؤتمرات',
  EVENTS = 'فعاليات'
}