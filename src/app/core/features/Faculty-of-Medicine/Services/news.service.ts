import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News, NewsCategory } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: News[] = [
    {
      id: 1,
      title: 'انطلاق العام الدراسي الجديد بكلية الطب',
      content: 'بدأت فعاليات العام الدراسي الجديد في كلية الطب جامعة الأقصر بحضور جموع غفيرة من الطلاب الجدد والقدامى. وقد شهد الحفل كلمات ترحيبية من عميد الكلية ووكلاء الكلية، كما تم عرض الخطة الدراسية الجديدة والبرامج المطورة التي تهدف إلى رفع مستوى التعليم الطبي.',
      excerpt: 'بدأت فعاليات العام الدراسي الجديد بحضور جموع غفيرة من الطلاب',
      publishDate: '2024-09-15',
      lastModified: '2024-09-15',
      author: 'إدارة الكلية',
      category: NewsCategory.NEWS,
      imageUrl: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg',
      isPublished: true,
      views: 245
    },
    {
      id: 2,
      title: 'المؤتمر الدولي للطب الحديث',
      content: 'تستضيف كلية الطب جامعة الأقصر المؤتمر الدولي للطب الحديث والذي يشارك فيه نخبة من الأطباء والباحثين من مختلف دول العالم. يناقش المؤتمر أحدث التطورات في مجال الطب والتكنولوجيا الطبية.',
      excerpt: 'المؤتمر الدولي يناقش أحدث التطورات في الطب والتكنولوجيا الطبية',
      publishDate: '2024-10-01',
      lastModified: '2024-10-01',
      author: 'اللجنة المنظمة',
      category: NewsCategory.CONFERENCES,
      imageUrl: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg',
      isPublished: true,
      views: 189
    },
    {
      id: 3,
      title: 'فعالية التوعية الصحية في المحافظة',
      content: 'نظمت كلية الطب فعالية كبرى للتوعية الصحية شملت عدة مراكز في محافظة الأقصر. تضمنت الفعالية فحوصات طبية مجانية وندوات تثقيفية حول الصحة العامة والوقاية من الأمراض.',
      excerpt: 'فعالية شملت فحوصات مجانية وندوات تثقيفية للمواطنين',
      publishDate: '2024-09-28',
      lastModified: '2024-09-28',
      author: 'قسم خدمة المجتمع',
      category: NewsCategory.EVENTS,
      imageUrl: 'https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg',
      isPublished: true,
      views: 312
    },
    {
      id: 4,
      title: 'تطوير مختبرات الأبحاث الطبية',
      content: 'في إطار خطة تطوير البنية التحتية للكلية، تم الانتهاء من تطوير مختبرات الأبحاث الطبية وتزويدها بأحدث الأجهزة والتقنيات العلمية المتقدمة لدعم البحث العلمي.',
      excerpt: 'تطوير مختبرات الأبحاث بأحدث الأجهزة والتقنيات العلمية',
      publishDate: '2024-09-20',
      lastModified: '2024-09-20',
      author: 'إدارة الكلية',
      category: NewsCategory.NEWS,
      imageUrl: 'https://images.pexels.com/photos/4168541/pexels-photo-4168541.jpeg',
      isPublished: true,
      views: 156
    },
    {
      id: 5,
      title: 'ورشة عمل حول الطب النفسي',
      content: 'عقدت كلية الطب ورشة عمل متخصصة حول الطب النفسي وأحدث طرق العلاج النفسي. حضر الورشة أطباء نفسيون مختصون وطلاب الدراسات العليا.',
      excerpt: 'ورشة متخصصة حول أحدث طرق العلاج النفسي',
      publishDate: '2024-09-25',
      lastModified: '2024-09-25',
      author: 'قسم الطب النفسي',
      category: NewsCategory.EVENTS,
      imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      isPublished: true,
      views: 98
    },
    {
      id: 6,
      title: 'برنامج التدريب الصيفي للطلاب',
      content: 'أطلقت كلية الطب برنامجاً تدريبياً صيفياً شاملاً للطلاب يتضمن التدريب العملي في المستشفيات والمراكز الطبية المتخصصة لإكساب الطلاب الخبرات العملية اللازمة.',
      excerpt: 'برنامج تدريبي صيفي شامل للطلاب في المستشفيات المتخصصة',
      publishDate: '2024-08-15',
      lastModified: '2024-08-15',
      author: 'شؤون الطلاب',
      category: NewsCategory.NEWS,
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      isPublished: true,
      views: 267
    },
    {
      id: 7,
      title: 'مؤتمر التعليم الطبي الإلكتروني',
      content: 'تنظم كلية الطب مؤتمراً حول التعليم الطبي الإلكتروني ودوره في تطوير العملية التعليمية. يشارك في المؤتمر خبراء في تكنولوجيا التعليم من جامعات مختلفة.',
      excerpt: 'مؤتمر حول دور التعليم الإلكتروني في تطوير العملية التعليمية',
      publishDate: '2024-11-05',
      lastModified: '2024-11-05',
      author: 'قسم التعليم الطبي',
      category: NewsCategory.CONFERENCES,
      imageUrl: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg',
      isPublished: true,
      views: 143
    },
    {
      id: 8,
      title: 'يوم الصحة العالمي في الكلية',
      content: 'احتفلت كلية الطب بيوم الصحة العالمي من خلال تنظيم فعاليات متنوعة شملت محاضرات توعوية وفحوصات مجانية للمواطنين وتوزيع مواد تثقيفية صحية.',
      excerpt: 'احتفال بيوم الصحة العالمي بفعاليات توعوية وفحوصات مجانية',
      publishDate: '2024-04-07',
      lastModified: '2024-04-07',
      author: 'إدارة الكلية',
      category: NewsCategory.EVENTS,
      imageUrl: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg',
      isPublished: true,
      views: 201
    },
    {
      id: 9,
      title: 'اتفاقية تعاون مع جامعة أوروبية',
      content: 'وقعت كلية الطب اتفاقية تعاون مع إحدى الجامعات الأوروبية المرموقة تتضمن تبادل الطلاب وأعضاء هيئة التدريس والبحوث المشتركة في مجال الطب.',
      excerpt: 'اتفاقية تعاون تتضمن تبادل الطلاب والبحوث المشتركة',
      publishDate: '2024-07-12',
      lastModified: '2024-07-12',
      author: 'العلاقات الخارجية',
      category: NewsCategory.NEWS,
      imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
      isPublished: true,
      views: 178
    },
    {
      id: 10,
      title: 'ندوة حول أخلاقيات المهنة الطبية',
      content: 'عقدت كلية الطب ندوة علمية حول أخلاقيات المهنة الطبية وأهميتها في ممارسة الطب. شارك في الندوة أساتذة متخصصون وطلاب الكلية.',
      excerpt: 'ندوة علمية حول أهمية أخلاقيات المهنة في ممارسة الطب',
      publishDate: '2024-06-18',
      lastModified: '2024-06-18',
      author: 'قسم الأخلاقيات الطبية',
      category: NewsCategory.EVENTS,
      imageUrl: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg',
      isPublished: true,
      views: 122
    }
  ];

  getAll(): Observable<News[]> {
    return of(this.newsItems);
  }

  getLatest(count: number): Observable<News[]> {
    const sorted = this.newsItems.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    return of(sorted.slice(0, count));
  }

  getById(id: number): Observable<News | undefined> {
    return of(this.newsItems.find(news => news.id === id));
  }

  filterByType(category: NewsCategory): Observable<News[]> {
    return of(this.newsItems.filter(news => news.category === category));
  }

  getNewsBySectorId(sectorId: number): Observable<News[]> {
    // For demo purposes, return some news items
    return of(this.newsItems.filter(news => news.id <= 6));
  }

  getRelatedNews(currentNewsId: number): Observable<News[]> {
    return of(this.newsItems.filter(news => news.id !== currentNewsId).slice(0, 3));
  }

  getNextNews(currentNewsId: number): Observable<News | undefined> {
    const currentIndex = this.newsItems.findIndex(news => news.id === currentNewsId);
    const nextIndex = currentIndex + 1;
    return of(nextIndex < this.newsItems.length ? this.newsItems[nextIndex] : undefined);
  }

  getPreviousNews(currentNewsId: number): Observable<News | undefined> {
    const currentIndex = this.newsItems.findIndex(news => news.id === currentNewsId);
    const prevIndex = currentIndex - 1;
    return of(prevIndex >= 0 ? this.newsItems[prevIndex] : undefined);
  }
}