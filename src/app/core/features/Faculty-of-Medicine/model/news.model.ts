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
  readMoreUrl?: string;
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