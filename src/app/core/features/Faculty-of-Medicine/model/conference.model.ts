export interface Conference {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  description?: string;
  image: string;
  url?: string;
}