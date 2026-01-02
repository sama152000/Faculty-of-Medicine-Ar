export interface Department {
  id: number;
  name: string;
  title?: string;
  description: string;
  establishedDate: string;
  vision?: string;
  mission?: string;
  objectives?: string[];
  generalOverview?: string;
  head?: string;
  members?: DepartmentMember[];
  programs?: Program[];
  services?: DepartmentService[];
  news?: DepartmentNews[];
  iconPath?: string;
  iconAlt?: string;
}

export interface Program {
  id: number;
  name: string;
  description: string;
  department: string;
  duration: string;
  degree: string;
  requirements?: string[];
}

export interface DepartmentService {
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

export interface DepartmentNews {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  publishDate: string;
  lastModified: string;
  author: string;
  category: DepartmentNewsCategory;
  imageUrl?: string;
  tags?: string[];
  isPublished: boolean;
  views?: number;
}

export interface DepartmentContactInfo {
  phone?: string;
  email?: string;
  office?: string;
  website?: string;
}

export interface DepartmentMember {
  id: number;
  name: string;
  title: string;
  email: string;
  phone?: string;
  office?: string;
  specialization: string;
}

export enum DepartmentNewsCategory {
  NEWS = 'أخبار',
  CONFERENCES = 'مؤتمرات',
  EVENTS = 'فعاليات'
}