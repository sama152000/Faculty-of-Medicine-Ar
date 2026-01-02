import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Center, CenterDepartment, CenterService, CenterNews, NewsCategory } from '../model/center.model';

@Injectable({
  providedIn: 'root'
})
export class CentersService {
  
  private centers: Center[] = [
    {
      id: 'education',
      name: 'مركز التعليم الطبي المستمر',
      description: 'مركز متخصص في التعليم الطبي المستمر والتطوير المهني',
      establishedDate: '2008-03-20',
      vision: 'أن نكون الجهة الرائدة في تقديم برامج التعليم الطبي المستمر عالية الجودة.',
      mission: 'نسعى إلى تطوير مهارات الأطباء والكوادر الطبية من خلال برامج تعليمية متطورة ومتوافقة مع أحدث المعايير العالمية.',
      objectives: [
        'تقديم برامج تعليمية متميزة',
        'تطوير مهارات المتخصصين الطبيين',
        'التوافق مع المعايير العالمية',
        'تعزيز التعلم المستمر'
      ],
      generalOverview: 'يوفر المركز برامج التعليم الطبي المستمر للأطباء والمتخصصين الصحيين، مع التركيز على أحدث التطورات الطبية والتكنولوجيا.',
      head: 'أ.د. فاطمة سالم',
      members: [
        {
          id: 1,
          name: 'د. أحمد محمد',
          title: 'مدير التعليم',
          email: 'ahmed.mohamed@med.luxor.edu.eg',
          phone: '+20 95 123 4520',
          office: 'غرفة 102',
          specialization: 'طب التعليم'
        }
      ]
    },
    {
      id: 'research',
      name: 'مركز البحوث الطبية والتجارب المعملية',
      description: 'مركز متخصص في البحوث الطبية والتجارب المعملية المتقدمة',
      establishedDate: '2010-01-15',
      vision: 'أن نكون مركز البحوث الطبية الرائد في الشرق الأوسط في مجال البحث العلمي والابتكار الطبي.',
      mission: 'نسعى إلى تطوير البحث العلمي الطبي وتحسين جودة الرعاية الصحية من خلال الابتكار والتطوير المستمر.',
      objectives: [
        'تطوير البحوث الطبية المتقدمة',
        'تحسين جودة الرعاية الصحية',
        'التعاون مع المؤسسات العلمية العالمية',
        'تدريب الكوادر البحثية المتخصصة'
      ],
      generalOverview: 'يعد مركز البحوث الطبية من أهم المراكز البحثية في الجامعة، حيث يركز على تطوير البحوث الطبية والعلمية المتقدمة. يضم المركز نخبة من الباحثين والأساتذة المتخصصين في مختلف المجالات الطبية.',
      head: 'أ.د. محمد أحمد الطبيب',
      members: [
        {
          id: 1,
          name: 'د. سارة محمود',
          title: 'باحث أول',
          email: 'sara.mahmoud@med.luxor.edu.eg',
          phone: '+20 95 123 4567',
          office: 'مبنى البحوث - الدور الثالث',
          specialization: 'أمراض القلب'
        },
        {
          id: 2,
          name: 'د. أحمد علي',
          title: 'باحث مشارك',
          email: 'ahmed.ali@med.luxor.edu.eg',
          phone: '+20 95 123 4568',
          office: 'مبنى البحوث - الدور الثاني',
          specialization: 'علم الأدوية'
        }
      ]
    },
    {
      id: 'research',
      name: 'مركز التعليم الطبي',
      description: 'مركز متخصص في تطوير التعليم الطبي والتدريب',
      establishedDate: '2012-09-10',
      vision: 'تطوير نظم التعليم الطبي الحديثة وتحسين جودة التدريب الطبي.',
      mission: 'نهدف إلى رفع مستوى التعليم الطبي من خلال الطرق والتقنيات الحديثة.',
      objectives: [
        'تطوير المناهج الطبية',
        'استخدام التكنولوجيا في التعليم',
        'تدريب أعضاء هيئة التدريس',
        'تحسين طرق التقييم'
      ],
      generalOverview: 'مركز التعليم الطبي يعمل على تطوير وتحسين جودة التعليم الطبي في الكلية من خلال استخدام أحدث الطرق والتقنيات التعليمية.',
      head: 'أ.د. فاطمة حسن',
      members: [
        {
          id: 3,
          name: 'د. خالد محمد',
          title: 'منسق التعليم',
          email: 'khaled.mohamed@med.luxor.edu.eg',
          phone: '+20 95 123 4569',
          office: 'مبنى التعليم - الدور الأول',
          specialization: 'تعليم طبي'
        }
      ]
    }
  ];

  private departments: CenterDepartment[] = [
    {
      id: 1,
      name: 'قسم أبحاث القلب',
      description: 'قسم متخصص في أبحاث أمراض القلب والأوعية الدموية',
      head: 'د. محمد علي القلبي',
      establishedDate: '2010-01-15',
      location: 'مبنى البحوث الطبية - الدور الثاني',
      contactInfo: {
        phone: '+20 95 123 4570',
        email: 'cardio.research@med.luxor.edu.eg',
        office: 'غرفة 201'
      }
    },
    {
      id: 2,
      name: 'قسم التطوير التعليمي',
      description: 'قسم متخصص في تطوير طرق التعليم الطبي',
      head: 'د. سامية أحمد',
      establishedDate: '2012-09-10',
      location: 'مبنى التعليم الطبي - الدور الثالث',
      contactInfo: {
        phone: '+20 95 123 4571',
        email: 'education.dev@med.luxor.edu.eg',
        office: 'غرفة 301'
      }
    }
  ];

  private services: CenterService[] = [
    {
      id: 1,
      name: 'استشارات بحثية',
      description: 'خدمة تقديم الاستشارات البحثية للباحثين والطلاب',
      category: 'خدمات بحثية',
      isActive: true,
      requirements: ['طلب رسمي', 'تحديد موضوع البحث'],
      procedures: ['تقديم الطلب', 'مراجعة الطلب', 'تحديد موعد الاستشارة'],
      duration: '2-3 أيام',
      cost: 'مجاني للطلاب'
    },
    {
      id: 2,
      name: 'التدريب على البحث العلمي',
      description: 'دورات تدريبية في منهجية البحث العلمي',
      category: 'تدريب',
      isActive: true,
      requirements: ['التسجيل المسبق'],
      procedures: ['التسجيل', 'حضور الدورة', 'الحصول على شهادة'],
      duration: '5 أيام',
      cost: '500 جنيه'
    }
  ];

  private news: CenterNews[] = [
    {
      id: 1,
      title: 'إطلاق مشروع بحثي جديد في مجال أمراض القلب',
      content: 'أطلق مركز البحوث الطبية مشروع بحثي جديد...',
      excerpt: 'مشروع بحثي متطور لدراسة أمراض القلب والأوعية الدموية',
      publishDate: '2024-01-15',
      lastModified: '2024-01-15',
      author: 'د. محمد أحمد الطبيب',
      category: NewsCategory.NEWS,
      imageUrl: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg',
      isPublished: true,
      views: 150
    },
    {
      id: 2,
      title: 'مؤتمر التعليم الطبي الحديث',
      content: 'ينظم مركز التعليم الطبي مؤتمر سنوي...',
      excerpt: 'مؤتمر علمي حول أحدث طرق التعليم الطبي',
      publishDate: '2024-01-10',
      lastModified: '2024-01-10',
      author: 'د. فاطمة حسن',
      category: NewsCategory.CONFERENCES,
      imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
      isPublished: true,
      views: 200
    }
  ];

  getAll(): Observable<Center[]> {
    return of(this.centers);
  }

  getById(id: string): Observable<Center | undefined> {
    const center = this.centers.find(c => c.id === id);
    return of(center);
  }

  getDepartmentsByCenterId(centerId: string): Observable<CenterDepartment[]> {
    // In a real app, filter by centerId
    return of(this.departments);
  }

  getServicesByCenterId(centerId: string): Observable<CenterService[]> {
    // In a real app, filter by centerId
    return of(this.services);
  }

  getNewsByCenterId(centerId: string): Observable<CenterNews[]> {
    // In a real app, filter by centerId
    return of(this.news);
  }
}