export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  specialty: string;
  date: string;
  imageUrl: string;
  readMoreUrl?: string;
}