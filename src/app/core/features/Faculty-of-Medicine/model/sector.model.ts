export interface Sector {
  id: number;
  name: string;
  description: string;
  establishedDate: string;
  vision?: string;
  mission?: string;
  objectives?: string[];
  generalOverview?: string;
  head?: string;
  members?: FacultyMember[];
  departments?: Department[];
  services?: Service[];
  news?: News[];
}

export interface Department {
  id: number;
  name: string;
  description: string;
  head: string;
  establishedDate: string;
  location: string;
  contactInfo: ContactInfo;
  programs?: string[];
  faculty?: FacultyMember[];
}

export interface Service {
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

export interface News {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  publishDate: string;
  lastModified: string;
  author: string;
  category: NewsCategory;
  imageUrl?: string;
  tags?: string[];
  isPublished: boolean;
  views?: number;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  office?: string;
  website?: string;
}

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  email: string;
  phone?: string;
  office?: string;
  specialization: string;
}

export enum NewsCategory {
  NEWS = 'أخبار',
  CONFERENCES = 'مؤتمرات',
  EVENTS = 'فعاليات'
}