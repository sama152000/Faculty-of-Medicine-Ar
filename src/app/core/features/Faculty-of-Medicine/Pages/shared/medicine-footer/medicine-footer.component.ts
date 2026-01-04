import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { ContactService } from '../../../Services/contact.service';
import { NewsService } from '../../../Services/news.service';
import { LogoService } from '../../../Services/logo.service'; // ✅ استدعاء خدمة اللوجو
import { Contact } from '../../../model/contact.model';
import { News } from '../../../model/news.model';
import { Logo } from '../../../model/logo.model'; // ✅ موديل اللوجو

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
  contact?: Contact;
  logoUrl?: string; // ✅ متغير للوجو
  quickLinks: QuickLink[] = [
    { id: 1, text: 'عن الكلية', url: '/about', icon: '→' },
    { id: 2, text: 'الأقسام الأكاديمية', url: '/departments', icon: '→' },
    { id: 3, text: 'البحث العلمي', url: '/research', icon: '→' },
    { id: 4, text: 'الخدمات الإلكترونية', url: '/services', icon: '→' },
    { id: 6, text: 'اتصل بنا', url: '/contact', icon: '→' }
  ];
  latestPosts: { id: string; title: string; date: string; url: string }[] = [];

  constructor(
    private contactService: ContactService,
    private newsService: NewsService,
    private logoService: LogoService // ✅ حقن خدمة اللوجو
  ) {}

  ngOnInit(): void {
    this.loadContactInfo();
    this.loadLatestPosts();
    this.loadLogo(); // ✅ تحميل اللوجو
  }

  trackByFn(index: number, item: any): any {
    return item.id;
  }

  private loadContactInfo(): void {
    this.contactService.getAllContacts().subscribe(contacts => {
      if (contacts && contacts.length > 0) {
        this.contact = contacts[0];
      }
    });
  }

  private loadLatestPosts(): void {
    this.newsService.getAllNews().pipe(
      map(news => news
        .sort((a, b) => {
          const dateA = a.publishedDate ? new Date(a.publishedDate).getTime() : 0;
          const dateB = b.publishedDate ? new Date(b.publishedDate).getTime() : 0;
          return dateB - dateA;
        })
        .slice(0, 3)
      )
    ).subscribe((news: News[]) => {
      this.latestPosts = news.map(item => ({
        id: item.id,
        title: item.title,
        date: item.publishedDate || '',
        url: `/news/${item.id}`
      }));
    });
  }

  private loadLogo(): void {
    this.logoService.getDefaultLogo().subscribe((logo: Logo | undefined) => {
      if (logo) {
        this.logoUrl = logo.url; // ✅ حفظ رابط اللوجو
      }
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
