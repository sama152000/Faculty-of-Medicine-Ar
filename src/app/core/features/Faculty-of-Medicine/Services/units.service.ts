import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unit, UnitDepartment, UnitService, UnitNews, NewsCategory } from '../model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  
  private units: Unit[] = [
    {
      id: 'quality',
      name: 'وحدة ضمان الجودة',
      description: 'وحدة متخصصة في ضمان الجودة والاعتماد الأكاديمي',
      establishedDate: '2012-05-10',
      vision: 'أن نكون الوحدة الرائدة في ضمان الجودة التعليمية والبحثية.',
      mission: 'نسعى لتحقيق أعلى معايير الجودة في التعليم والخدمات الطبية.',
      objectives: [
        'تطوير نظام ضمان الجودة',
        'الحصول على الاعتماد الأكاديمي',
        'تحسين الأداء التعليمي والبحثي',
        'الامتثال للمعايير الدولية'
      ],
      generalOverview: 'وحدة ضمان الجودة تعمل على تطوير وتطبيق نظام ضمان الجودة في جميع جوانب العمل الأكاديمي والإداري في الكلية.',
      head: 'د. سارة محمد الجودة',
      members: [
        {
          id: 1,
          name: 'د. نور حسن',
          title: 'مدير ضمان الجودة',
          email: 'layla.ahmed@med.luxor.edu.eg',
          phone: '+20 95 123 4580',
          office: 'وحدة الطوارئ - غرفة 101',
          specialization: 'طب الطوارئ'
        },
        {
          id: 2,
          name: 'د. محمد سالم',
          title: 'طبيب طوارئ',
          email: 'mohamed.salem@med.luxor.edu.eg',
          phone: '+20 95 123 4581',
          office: 'وحدة الطوارئ - غرفة 102',
          specialization: 'الإنعاش القلبي'
        }
      ]
    },
    {
      id: 'it',
      name: 'وحدة تقنية المعلومات',
      description: 'وحدة متخصصة في إدارة وتطوير الأنظمة التقنية والمعلوماتية',
      establishedDate: '2010-09-01',
      vision: 'أن نكون الوحدة الرائدة في توفير الحلول التقنية المتقدمة للكلية.',
      mission: 'نسعى لتطوير وإدارة الأنظمة التقنية لدعم العملية التعليمية والبحثية.',
      objectives: [
        'تطوير الأنظمة الإلكترونية',
        'إدارة قواعد البيانات',
        'توفير الدعم الفني',
        'تأمين المعلومات والأنظمة'
      ],
      generalOverview: 'وحدة تقنية المعلومات تعمل على تطوير وإدارة جميع الأنظمة التقنية والمعلوماتية في الكلية، بما في ذلك الأنظمة التعليمية والإدارية.',
      head: 'م. أحمد علي التقني',
      members: [
        {
          id: 1,
          name: 'م. فاطمة حسن',
          title: 'مدير الأنظمة',
          email: 'fatma.hassan@med.luxor.edu.eg',
          phone: '+20 95 123 4583',
          office: 'وحدة تقنية المعلومات',
          specialization: 'تقنية المعلومات'
        }
      ]
    }
  ];

  private departments: UnitDepartment[] = [
    {
      id: 1,
      name: 'قسم الإنعاش',
      description: 'قسم متخصص في عمليات الإنعاش والإسعافات الأولية',
      head: 'د. حسن محمد',
      establishedDate: '2008-03-20',
      location: 'وحدة الطوارئ - الجناح الشرقي',
      contactInfo: {
        phone: '+20 95 123 4585',
        email: 'resuscitation@med.luxor.edu.eg',
        office: 'غرفة الإنعاش'
      }
    },
    {
      id: 2,
      name: 'قسم مراقبة المرضى',
      description: 'قسم متخصص في مراقبة العلامات الحيوية للمرضى',
      head: 'د. سمير علي',
      establishedDate: '2009-06-15',
      location: 'وحدة العناية المركزة - الدور الثاني',
      contactInfo: {
        phone: '+20 95 123 4586',
        email: 'monitoring@med.luxor.edu.eg',
        office: 'غرفة المراقبة المركزية'
      }
    }
  ];

  private services: UnitService[] = [
    {
      id: 1,
      name: 'خدمة الطوارئ على مدار الساعة',
      description: 'خدمة طبية طارئة متاحة 24/7',
      category: 'خدمات طارئة',
      isActive: true,
      requirements: ['حالة طوارئ طبية'],
      procedures: ['الوصول للوحدة', 'التقييم الأولي', 'تقديم العلاج'],
      duration: 'فوري',
      cost: 'حسب نوع العلاج'
    },
    {
      id: 2,
      name: 'خدمة العناية المركزة',
      description: 'رعاية متخصصة للمرضى في الحالات الحرجة',
      category: 'عناية مركزة',
      isActive: true,
      requirements: ['تحويل طبي', 'حالة حرجة'],
      procedures: ['قبول المريض', 'التقييم الشامل', 'وضع خطة العلاج'],
      duration: 'حسب الحالة',
      cost: 'حسب مدة الإقامة'
    }
  ];

  private news: UnitNews[] = [
    {
      id: 1,
      title: 'تجهيز وحدة الطوارئ بأحدث الأجهزة',
      content: 'تم تجهيز وحدة الطوارئ بأحدث الأجهزة الطبية...',
      excerpt: 'استثمار جديد في تحديث معدات وحدة الطوارئ',
      publishDate: '2024-01-20',
      lastModified: '2024-01-20',
      author: 'د. أمجد محمود',
      category: NewsCategory.NEWS,
      imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      isPublished: true,
      views: 180
    },
    {
      id: 2,
      title: 'ورشة تدريبية للطوارئ الطبية',
      content: 'تقيم وحدة الطوارئ ورشة تدريبية متخصصة...',
      excerpt: 'تدريب متقدم للكوادر الطبية في مجال الطوارئ',
      publishDate: '2024-01-18',
      lastModified: '2024-01-18',
      author: 'د. ليلى أحمد',
      category: NewsCategory.EVENTS,
      imageUrl: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg',
      isPublished: true,
      views: 120
    }
  ];

  getAll(): Observable<Unit[]> {
    return of(this.units);
  }

  getById(id: string): Observable<Unit | undefined> {
    const unit = this.units.find(u => u.id === id);
    return of(unit);
  }

  getDepartmentsByUnitId(unitId: string): Observable<UnitDepartment[]> {
    return of(this.departments);
  }

  getServicesByUnitId(unitId: string): Observable<UnitService[]> {
    return of(this.services);
  }

  getNewsByUnitId(unitId: string): Observable<UnitNews[]> {
    return of(this.news);
  }
}