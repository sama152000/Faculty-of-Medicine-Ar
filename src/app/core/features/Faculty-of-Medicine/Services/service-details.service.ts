import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceDetail, ServiceDepartment, RelatedService, ServiceNews } from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  private serviceDetails: ServiceDetail[] = [
    {
      id: 'academic',
      name: 'الخدمات الأكاديمية',
      description: 'مجموعة شاملة من الخدمات الأكاديمية المقدمة للطلاب والأعضاء',
      establishedDate: '2006-09-15',
      generalOverview: 'تشمل الخدمات الأكاديمية جميع الخدمات المتعلقة بالعملية التعليمية والأكاديمية في الكلية.',
      requirements: ['طلب رسمي', 'وثائق مطلوبة'],
      steps: ['تقديم الطلب', 'مراجعة الوثائق', 'الموافقة']
    },
    {
      id: 'administrative',
      name: 'الخدمات الإدارية',
      description: 'الخدمات الإدارية والإجرائية المقدمة في الكلية',
      establishedDate: '2006-09-15',
      generalOverview: 'تشمل الخدمات الإدارية جميع الإجراءات الإدارية والإجرائية.',
      requirements: ['طلب رسمي', 'وثائق إدارية'],
      steps: ['تقديم الطلب', 'مراجعة الإدارية', 'التنفيذ']
    }
  ];

  private serviceDepartments: { [serviceId: string]: ServiceDepartment[] } = {};

  private relatedServices: { [serviceId: string]: RelatedService[] } = {};

  getById(id: string): Observable<ServiceDetail | undefined> {
    return of(this.serviceDetails.find(service => service.id === id));
  }

  getDepartmentsByServiceId(serviceId: string): Observable<ServiceDepartment[]> {
    return of(this.serviceDepartments[serviceId] || []);
  }

  getRelatedServicesByServiceId(serviceId: string): Observable<RelatedService[]> {
    return of(this.relatedServices[serviceId] || []);
  }
}