import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactService } from '../../../Services/contact.service';
import { NewsService } from '../../../Services/news.service';
import { ContactInfo } from '../../../model/contact.model';
import { News } from '../../../model/news.model';

interface QuickLink {
  id: number;
  text: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-medicine-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
templateUrl: './medicine-footer.component.html',
  styleUrls: ['./medicine-footer.component.css']
})
export class MedicineFooterComponent implements OnInit {
  contactInfo: ContactInfo = {} as ContactInfo;
  quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'عن الكلية',
      url: '/about',
      icon: '→'
    },
    {
      id: 2,
      text: 'الأقسام الأكاديمية',
      url: '/departments',
      icon: '→'
    },
    {
      id: 3,
      text: 'البحث العلمي',
      url: '/research',
      icon: '→'
    },
    {
      id: 4,
      text: 'الخدمات الإلكترونية',
      url: '/services',
      icon: '→' 
    },
    {
      id: 6,
      text: 'اتصل بنا',
      url: '/contact',
      icon: '→'
    }
  ];
  latestPosts: { id: number; title: string; date: string; url: string }[] = [];

  constructor(
    private contactService: ContactService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.loadContactInfo();
    this.loadLatestPosts();
  }

  trackByFn(index: number, item: any): any {
    return item.id;
  }

  private loadContactInfo(): void {
    this.contactService.getContactInfo().subscribe(info => {
      this.contactInfo = info;
    });
  }

  private loadLatestPosts(): void {
    this.newsService.getLatest(3).subscribe((news: News[]) => {
      this.latestPosts = news.map(item => ({
        id: item.id,
        title: item.title,
        date: item.publishDate,
        url: item.readMoreUrl || `/news/${item.id}`
      }));
    });
  }

  onLinkClick(type: string, data: any): void {
    console.log(`Footer link clicked - Type: ${type}`, data);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}