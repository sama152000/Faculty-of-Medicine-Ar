import { Injectable } from '@angular/core';
import { Department } from '../model/department.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    {
      id: 1,
      title: 'الباطنة العامة',
      description: 'قسم الباطنة العامة يقدم الرعاية الطبية الشاملة للمرضى البالغين.',
      iconPath: './assets/cardiology.png',
      iconAlt: 'أيقونة الباطنة العامة',
      url: '/departments/internal-medicine'
    },
    {
      id: 2,
      title: 'الجراحة العامة',
      description: 'قسم الجراحة العامة يوفر خدمات جراحية متقدمة ومتخصصة.',
      iconPath: './assets/Neurology.png',
      iconAlt: 'أيقونة الجراحة العامة',
      url: '/departments/general-surgery'
    },
    {
      id: 3,
      title: 'طب الأطفال',
      description: 'قسم طب الأطفال متخصص في رعاية صحة الأطفال من الولادة حتى المراهقة.',
      iconPath: './assets/Neurology.png',
      iconAlt: 'أيقونة طب الأطفال',
      url: '/departments/pediatrics'
    },
   
  ];

  getAll(): Observable<Department[]> {
    return of(this.departments);
  }

  getById(id: number): Observable<Department | undefined> {
    return of(this.departments.find(dept => dept.id === id));
  }

  searchByTitle(title: string): Observable<Department[]> {
    const filtered = this.departments.filter(dept => 
      dept.title.toLowerCase().includes(title.toLowerCase())
    );
    return of(filtered);
  }
}