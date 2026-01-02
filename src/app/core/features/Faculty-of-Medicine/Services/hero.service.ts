import { Injectable } from '@angular/core';
import { HeroSlide } from '../model/hero-slide.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: 'مرحباً بكم في كلية الطب',
      subtitle: 'نحو مستقبل أفضل في التعليم الطبي والبحث العلمي',
      description: 'كلية الطب بجامعة الأقصر تقدم أفضل المعايير التعليمية والبحثية في المجال الطبي',
      imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
      buttonText: 'اكتشف المزيد',
      buttonUrl: '/about',
      position: 'center'
    },
    {
      id: 2,
      title: 'التميز في التعليم الطبي',
      subtitle: 'برامج أكاديمية متقدمة وأساتذة متميزون',
      description: 'نوفر بيئة تعليمية متكاملة لإعداد أطباء المستقبل',
      imageUrl: 'https://images.pexels.com/photos/4225881/pexels-photo-4225881.jpeg?auto=compress&cs=tinysrgb&w=1200',
      buttonText: 'البرامج الأكاديمية',
      buttonUrl: '/departments',
      position: 'center'
    },
    {
      id: 3,
      title: 'البحث العلمي والابتكار',
      subtitle: 'نساهم في تقدم العلوم الطبية من خلال البحث والابتكار',
      description: 'مختبرات متطورة ومشاريع بحثية رائدة',
      imageUrl: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1200',
      buttonText: 'البحث العلمي',
      buttonUrl: '/research',
      position: 'center'
    }
  ];

  getAll(): Observable<HeroSlide[]> {
    return of(this.heroSlides);
  }

  getById(id: number): Observable<HeroSlide | undefined> {
    return of(this.heroSlides.find(slide => slide.id === id));
  }

  getActive(): Observable<HeroSlide[]> {
    return of(this.heroSlides);
  }
}