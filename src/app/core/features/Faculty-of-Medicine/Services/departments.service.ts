import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department, Program, DepartmentService, DepartmentNews, DepartmentNewsCategory } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private departments: Department[] = [
    {
      id: 1,
      name: 'قسم الطب الباطني',
      description: 'قسم الطب الباطني هو أحد الأقسام الرئيسية في كلية الطب، يهتم بتدريس وبحوث الأمراض الداخلية والتشخيص السريري.',
      establishedDate: '1985-09-15',
      generalOverview: 'يعتبر قسم الطب الباطني من أعرق الأقسام في الكلية، حيث يساهم في إعداد أطباء متميزين في مجال الطب الباطني والتشخيص المتقدم.',
      vision: 'أن نكون قسماً رائداً في تعليم وبحوث الطب الباطني على المستوى الإقليمي والدولي.',
      mission: 'نسعى لتخريج أطباء مؤهلين في الطب الباطني من خلال التعليم المتميز والبحث العلمي الرصين.',
      objectives: [
        'تخريج أطباء متميزين في تخصص الطب الباطني',
        'إجراء البحوث العلمية المتطورة في مجال الأمراض الداخلية',
        'تقديم خدمات طبية متميزة للمجتمع',
        'التطوير المستمر للمناهج والطرق التعليمية'
      ],
      head: 'أ.د. محمد أحمد عبدالله',
      iconPath: 'assets/cardiology.png',
      iconAlt: 'قسم الطب الباطني',
      members: [
        {
          id: 1,
          name: 'د. سارة محمود علي',
          title: 'أستاذ مساعد',
          email: 'sara.mahmoud@med.luxor.edu.eg',
          phone: '095-2356789',
          office: 'مكتب رقم 205',
          specialization: 'أمراض القلب'
        },
        {
          id: 2,
          name: 'د. أحمد عبدالرحمن',
          title: 'مدرس',
          email: 'ahmed.abdelrahman@med.luxor.edu.eg',
          phone: '095-2356790',
          office: 'مكتب رقم 206',
          specialization: 'أمراض الكلى'
        }
      ]
    },
    {
      id: 2,
      name: 'قسم الجراحة العامة',
      description: 'قسم الجراحة العامة يهتم بتدريس الطلاب فنون الجراحة المختلفة والتقنيات الحديثة في العمليات الجراحية.',
      establishedDate: '1987-03-20',
      generalOverview: 'يوفر القسم تدريباً شاملاً في جميع فروع الجراحة العامة مع التركيز على التقنيات الحديثة والجراحات طفيفة التوغل.',
      vision: 'التميز في تعليم وممارسة الجراحة العامة وتطوير تقنيات جراحية متقدمة.',
      mission: 'إعداد جراحين مهرة قادرين على تقديم أفضل الخدمات الجراحية للمرضى.',
      objectives: [
        'تدريب الطلاب على أحدث التقنيات الجراحية',
        'تطوير البحث العلمي في مجال الجراحة',
        'تقديم خدمات جراحية متميزة للمرضى',
        'التعاون مع المراكز الطبية المتقدمة عالمياً'
      ],
      head: 'أ.د. عمر حسن محمد',
      iconPath: 'assets/Orthopedics.png',
      iconAlt: 'قسم الجراحة العامة',
      members: [
        {
          id: 3,
          name: 'د. فاطمة عبدالله',
          title: 'أستاذ',
          email: 'fatma.abdullah@med.luxor.edu.eg',
          phone: '095-2356791',
          office: 'مكتب رقم 301',
          specialization: 'جراحة الأطفال'
        }
      ]
    },
    {
      id: 3,
      name: 'قسم طب الأطفال',
      description: 'قسم طب الأطفال يركز على رعاية صحة الأطفال من الولادة وحتى سن البلوغ، ويشمل جميع التخصصات الفرعية.',
      establishedDate: '1990-10-12',
      generalOverview: 'يعد القسم مركزاً متميزاً لتعليم طب الأطفال وتقديم الرعاية الشاملة للأطفال في جميع التخصصات الفرعية.',
      vision: 'أن نكون مرجعاً إقليمياً في طب الأطفال والرعاية الصحية للطفل.',
      mission: 'توفير تعليم متميز في طب الأطفال وتقديم رعاية صحية شاملة للأطفال.',
      objectives: [
        'تخريج أطباء أطفال متميزين',
        'تطوير برامج الرعاية الصحية للأطفال',
        'إجراء بحوث متطورة في طب الأطفال',
        'تقديم خدمات طبية متخصصة للأطفال'
      ],
      head: 'أ.د. نهال إبراهيم السيد',
      iconPath: 'assets/Neurology.png',
      iconAlt: 'قسم طب الأطفال',
      members: [
        {
          id: 4,
          name: 'د. محمد علي حسن',
          title: 'مدرس',
          email: 'mohamed.ali@med.luxor.edu.eg',
          phone: '095-2356792',
          office: 'مكتب رقم 401',
          specialization: 'عناية مركزة للأطفال'
        }
      ]
    }
  ];

  private programs: Program[] = [
    {
      id: 1,
      name: 'برنامج الطب الباطني العام',
      description: 'برنامج شامل يغطي جميع جوانب الطب الباطني والتشخيص السريري',
      department: 'قسم الطب الباطني',
      duration: '6 سنوات',
      degree: 'بكالوريوس الطب والجراحة',
      requirements: ['الثانوية العامة علمي علوم', 'اجتياز امتحان القدرات']
    },
    {
      id: 2,
      name: 'برنامج الجراحة العامة',
      description: 'برنامج متطور في الجراحة العامة والتقنيات الحديثة',
      department: 'قسم الجراحة العامة',
      duration: '6 سنوات',
      degree: 'بكالوريوس الطب والجراحة',
      requirements: ['الثانوية العامة علمي علوم', 'اجتياز امتحان القدرات']
    }
  ];

  private services: DepartmentService[] = [
    {
      id: 1,
      name: 'التشخيص السريري',
      description: 'خدمة شاملة للتشخيص السريري للأمراض الباطنية',
      category: 'خدمات طبية',
      isActive: true,
      duration: '2-3 ساعات',
      cost: 'مجانية للطلاب'
    },
    {
      id: 2,
      name: 'الاستشارات الطبية',
      description: 'استشارات طبية متخصصة في مختلف فروع الطب الباطني',
      category: 'استشارات',
      isActive: true,
      duration: '1 ساعة',
      cost: 'مجانية للطلاب'
    }
  ];

  private news: DepartmentNews[] = [
    {
      id: 1,
      title: 'ورشة عمل حول التشخيص المبكر لأمراض القلب',
      content: 'تم تنظيم ورشة عمل متخصصة حول أحدث طرق التشخيص المبكر لأمراض القلب...',
      excerpt: 'ورشة عمل متخصصة حول أحدث طرق التشخيص المبكر لأمراض القلب',
      publishDate: '2024-01-15',
      lastModified: '2024-01-15',
      author: 'د. سارة محمود علي',
      category: DepartmentNewsCategory.EVENTS,
      imageUrl: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      isPublished: true,
      views: 245
    },
    {
      id: 2,
      title: 'مؤتمر قسم الطب الباطني السنوي',
      content: 'يستعد قسم الطب الباطني لتنظيم مؤتمره السنوي الذي يضم نخبة من الأطباء...',
      excerpt: 'قسم الطب الباطني ينظم مؤتمره السنوي بمشاركة نخبة من الأطباء',
      publishDate: '2024-01-10',
      lastModified: '2024-01-10',
      author: 'أ.د. محمد أحمد عبدالله',
      category: DepartmentNewsCategory.CONFERENCES,
      imageUrl: 'https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg',
      isPublished: true,
      views: 189
    }
  ];

  getAll(): Observable<Department[]> {
    return of(this.departments);
  }

  getById(id: number): Observable<Department> {
    const department = this.departments.find(d => d.id === id);
    return of(department as Department);
  }

  getProgramsByDepartmentId(departmentId: number): Observable<Program[]> {
    return of(this.programs);
  }

  getServicesByDepartmentId(departmentId: number): Observable<DepartmentService[]> {
    return of(this.services);
  }

  getNewsByDepartmentId(departmentId: number): Observable<DepartmentNews[]> {
    return of(this.news);
  }
}