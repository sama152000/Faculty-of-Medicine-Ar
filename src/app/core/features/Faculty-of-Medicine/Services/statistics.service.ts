import { Injectable } from '@angular/core';
import { Statistic } from '../model/statistics.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private statistics: Statistic[] = [
    {
      id: 1,
      title: 'عدد الطلاب',
      value: '2,500+',
      description: 'طالب وطالبة مسجلين في الكلية',
      iconPath: 'pi pi-graduation-cap',
      iconAlt: 'أيقونة الطلاب'
    },
    {
      id: 2,
      title: 'أعضاء هيئة التدريس',
      value: '150+',
      description: 'أستاذ وأستاذ مساعد ومدرس',
      iconPath: 'pi pi-users',
      iconAlt: 'أيقونة أعضاء هيئة التدريس'
    },
    {
      id: 3,
      title: 'الأبحاث المنشورة',
      value: '500+',
      description: 'بحث علمي منشور في مجلات عالمية',
      iconPath: 'pi pi-book',
      iconAlt: 'أيقونة الأبحاث'
    },

   
  ];

  getAll(): Observable<Statistic[]> {
    return of(this.statistics);
  }

  getById(id: number): Observable<Statistic | undefined> {
    return of(this.statistics.find(stat => stat.id === id));
  }

constructor() { }

}
