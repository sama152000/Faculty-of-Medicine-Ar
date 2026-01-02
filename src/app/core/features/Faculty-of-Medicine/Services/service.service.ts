import { Injectable } from '@angular/core';
import { Service } from '../model/service.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = [
    {
      id: '1',
      title: 'العيادات الخارجية',
      description: 'خدمات طبية متخصصة في جميع التخصصات الطبية بأحدث المعايير العالمية.',
      category: 'الخدمات الطبية',
      type: 'طبي',
      iconPath: 'assets/icons/clinic.svg',
      url: '/services/outpatient-clinics'
    },
    {
      id: '2',
      title: 'المختبرات الطبية',
      description: 'تحاليل طبية شاملة ودقيقة باستخدام أحدث التقنيات والأجهزة المتطورة.',
      category: 'التحاليل الطبية',
      type: 'تشخيصي',
      iconPath: 'assets/icons/laboratory.svg',
      url: '/services/medical-laboratories'
    },
    {
      id: '3',
      title: 'الأشعة التشخيصية',
      description: 'خدمات الأشعة والتصوير الطبي بأحدث أجهزة الرنين المغناطيسي والأشعة المقطعية.',
      category: 'التصوير الطبي',
      type: 'تشخيصي',
      iconPath: 'assets/icons/radiology.svg',
      url: '/services/diagnostic-imaging'
    },
 
  ];

  getAll(): Observable<Service[]> {
    return of(this.services);
  }

  getById(id: string): Observable<Service | undefined> {
    return of(this.services.find(service => service.id === id));
  }

  getByCategory(category: string): Observable<Service[]> {
    const filtered = this.services.filter(service => 
      service.category === category
    );
    return of(filtered);
  }

  getByType(type: string): Observable<Service[]> {
    const filtered = this.services.filter(service => 
      service.type === type
    );
    return of(filtered);
  }
}