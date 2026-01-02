import { Injectable } from '@angular/core';
import { NewsItem } from '../model/news.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'افتتاح المختبر الجديد للأبحاث الطبية',
      excerpt: 'تم افتتاح مختبر جديد مجهز بأحدث التقنيات للأبحاث الطبية المتقدمة في كلية الطب.',
      author: 'د. محمد أحمد',
      specialty: 'البحث العلمي',
      date: '15 يناير 2024',
      imageUrl: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400',
      readMoreUrl: '/news/laboratory-opening'
    },
    {
      id: 2,
      title: 'مؤتمر الطب الحديث 2024',
      excerpt: 'نظمت الكلية مؤتمراً دولياً للطب الحديث بحضور خبراء من جامعات عالمية مرموقة.',
      author: 'د. فاطمة سالم',
      specialty: 'المؤتمرات العلمية',
      date: '10 يناير 2024',
      imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      readMoreUrl: '/news/medical-conference-2024'
    },
    {
      id: 3,
      title: 'بدء برنامج التدريب الصيفي للطلاب',
      excerpt: 'انطلق برنامج التدريب الصيفي للطلاب في المستشفى الجامعي بالتعاون مع أقسام الكلية المختلفة.',
      author: 'د. أحمد حسن',
      specialty: 'شؤون الطلاب',
      date: '5 يناير 2024',
      imageUrl: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      readMoreUrl: '/news/summer-training-program'
    },
    {
      id: 4,
      title: 'حصول الكلية على اعتماد دولي جديد',
      excerpt: 'حصلت كلية الطب على اعتماد من منظمة التعليم الطبي العالمية مما يرفع من مكانتها الأكاديمية.',
      author: 'د. نورا محمود',
      specialty: 'الجودة والاعتماد',
      date: '28 ديسمبر 2023',
      imageUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
      readMoreUrl: '/news/international-accreditation'
    },
    {
      id: 5,
      title: 'إطلاق منحة دراسية للطلاب المتفوقين',
      excerpt: 'أطلقت الكلية برنامج منح دراسية جديد لدعم الطلاب المتفوقين أكاديمياً ومالياً.',
      author: 'د. خالد عبد الله',
      specialty: 'شؤون أكاديمية',
      date: '20 ديسمبر 2023',
      imageUrl: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=400',
      readMoreUrl: '/news/scholarship-program'
    },
    {
      id: 6,
      title: 'تطوير قسم الطوارئ في المستشفى الجامعي',
      excerpt: 'تم الانتهاء من تطوير قسم الطوارئ بالمستشفى الجامعي وتزويده بأحدث الأجهزة الطبية.',
      author: 'د. ريم يوسف',
      specialty: 'الخدمات الطبية',
      date: '15 ديسمبر 2023',
      imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
      readMoreUrl: '/news/emergency-department-upgrade'
    }
  ];

  getAll(): Observable<NewsItem[]> {
    return of(this.newsItems);
  }

  getById(id: number): Observable<NewsItem | undefined> {
    return of(this.newsItems.find(news => news.id === id));
  }

  getLatest(count: number = 3): Observable<NewsItem[]> {
    return of(this.newsItems.slice(0, count));
  }

  getByAuthor(author: string): Observable<NewsItem[]> {
    const filtered = this.newsItems.filter(news => 
      news.author.includes(author)
    );
    return of(filtered);
  }
}