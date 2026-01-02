import { Injectable } from '@angular/core';
import { Conference } from '../model/conference.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private conferences: Conference[] = [
    {
      id: 1,
      title: 'المؤتمر الدولي للطب الحديث 2024',
      subtitle: 'التطورات الحديثة في الطب والجراحة',
      date: '15-17 مارس 2024',
      location: 'قاعة المؤتمرات الكبرى - جامعة الأقصر',
      description: 'مؤتمر دولي يجمع خبراء الطب من جميع أنحاء العالم لمناقشة أحدث التطورات في المجال الطبي.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '/conferences/international-modern-medicine-2024'
    },
    {
      id: 2,
      title: 'ندوة الأبحاث الطبية',
      subtitle: 'مستقبل البحث العلمي في الطب',
      date: '22 فبراير 2024',
      location: 'مدرج كلية الطب - جامعة الأقصر',
      description: 'ندوة علمية تناقش أحدث الأبحاث الطبية والاتجاهات المستقبلية في البحث العلمي.',
      image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '/conferences/medical-research-symposium'
    },
    {
      id: 3,
      title: 'مؤتمر طب الأطفال',
      subtitle: 'الرعاية الصحية المتكاملة للأطفال',
      date: '10 أبريل 2024',
      location: 'مركز المؤتمرات الطبية - الأقصر',
      description: 'مؤتمر متخصص في طب الأطفال يركز على أحدث طرق العلاج والوقاية.',
      image: 'https://images.pexels.com/photos/4225881/pexels-photo-4225881.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '/conferences/pediatrics-conference-2024'
    }
  ];

  getAll(): Observable<Conference[]> {
    return of(this.conferences);
  }

  getById(id: number): Observable<Conference | undefined> {
    return of(this.conferences.find(conf => conf.id === id));
  }

  getUpcoming(): Observable<Conference | undefined> {
    // Return the first conference as upcoming
    return of(this.conferences[0]);
  }

  getByDateRange(startDate: string, endDate: string): Observable<Conference[]> {
    // Simple date filtering - in a real app, you'd use proper date comparison
    return of(this.conferences);
  }
}