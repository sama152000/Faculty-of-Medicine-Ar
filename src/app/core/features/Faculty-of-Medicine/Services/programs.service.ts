import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProgramDetails, Course, ProgramService, ProgramNews, ProgramNewsCategory } from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private programs: ProgramDetails[] = [
    {
      id: 1,
      name: 'برنامج بكالوريوس الطب والجراحة',
      description: 'برنامج شامل يمتد لستة سنوات يغطي جميع جوانب الطب والجراحة مع التدريب العملي المكثف.',
      establishedDate: '1975-10-01',
      generalOverview: 'يعد هذا البرنامج من أعرق برامج كلية الطب، حيث يوفر تعليماً متميزاً في الطب والجراحة وفقاً لأحدث المعايير الدولية.',
      vision: 'أن نكون برنامجاً رائداً في تخريج أطباء متميزين قادرين على خدمة المجتمع.',
      mission: 'إعداد أطباء مؤهلين علمياً ومهنياً وأخلاقياً من خلال برنامج تعليمي متطور.',
      objectives: [
        'تخريج أطباء متميزين في التشخيص والعلاج',
        'تطوير المهارات السريرية والبحثية للطلاب',
        'غرس القيم الأخلاقية الطبية',
        'مواكبة التطورات العلمية الحديثة في الطب'
      ],
      coordinator: 'أ.د. عائشة محمد إبراهيم',
      duration: '6 سنوات',
      degree: 'بكالوريوس الطب والجراحة',
      department: 'جميع أقسام الكلية',
      careerOpportunities: [
        'طبيب عام في المستشفيات الحكومية',
        'طبيب في العيادات الخاصة',
        'متابعة الدراسات العليا في التخصصات الطبية',
        'العمل في مجال البحث الطبي',
        'العمل في المنظمات الصحية الدولية'
      ],
      members: [
        {
          id: 1,
          name: 'د. يوسف عبدالرحمن',
          title: 'منسق البرنامج',
          email: 'youssef.abdelrahman@med.luxor.edu.eg',
          phone: '095-2356800',
          office: 'مكتب رقم 101',
          specialization: 'تعليم طبي'
        },
        {
          id: 2,
          name: 'د. منى السيد أحمد',
          title: 'مدير الشؤون الأكاديمية',
          email: 'mona.alsayed@med.luxor.edu.eg',
          phone: '095-2356801',
          office: 'مكتب رقم 102',
          specialization: 'إدارة التعليم الطبي'
        }
      ]
    },
    {
      id: 2,
      name: 'برنامج ماجستير الطب الباطني',
      description: 'برنامج دراسات عليا متقدم في تخصص الطب الباطني يمتد لثلاث سنوات.',
      establishedDate: '1995-09-15',
      generalOverview: 'برنامج متقدم يهدف إلى إعداد أطباء متخصصين في الطب الباطني قادرين على التشخيص والعلاج المتقدم.',
      vision: 'التميز في إعداد استشاريي طب باطني على أعلى مستوى.',
      mission: 'تطوير قدرات الأطباء في التخصص الدقيق للطب الباطني.',
      objectives: [
        'إعداد استشاريين في الطب الباطني',
        'تطوير مهارات البحث العلمي',
        'تعزيز الممارسة السريرية المتقدمة',
        'المساهمة في تطوير الخدمات الطبية'
      ],
      coordinator: 'أ.د. محمد عبدالله حسن',
      duration: '3 سنوات',
      degree: 'ماجستير في الطب الباطني',
      department: 'قسم الطب الباطني',
      careerOpportunities: [
        'استشاري طب باطني في المستشفيات',
        'عضو هيئة تدريس في الجامعات',
        'رئيس قسم طب باطني',
        'باحث في المجال الطبي'
      ],
      members: [
        {
          id: 3,
          name: 'د. فاتن أحمد محمد',
          title: 'منسق البرنامج',
          email: 'faten.ahmed@med.luxor.edu.eg',
          phone: '095-2356802',
          office: 'مكتب رقم 201',
          specialization: 'أمراض الكبد'
        }
      ]
    },
    {
      id: 3,
      name: 'برنامج دبلوم طب الأطفال',
      description: 'برنامج تدريبي متخصص في طب الأطفال يمتد لسنتين مع تدريب عملي مكثف.',
      establishedDate: '2000-02-10',
      generalOverview: 'برنامج مكثف يهدف إلى إعداد أطباء متخصصين في رعاية صحة الأطفال.',
      vision: 'إعداد أطباء أطفال مؤهلين لتقديم أفضل رعاية للأطفال.',
      mission: 'تطوير مهارات الأطباء في تشخيص وعلاج أمراض الأطفال.',
      objectives: [
        'إكساب المهارات المتخصصة في طب الأطفال',
        'تطوير القدرات التشخيصية والعلاجية',
        'تعزيز مفاهيم الرعاية الوقائية للأطفال',
        'تطبيق أحدث البروتوكولات العلاجية'
      ],
      coordinator: 'أ.د. سمير محمد علي',
      duration: 'سنتان',
      degree: 'دبلوم في طب الأطفال',
      department: 'قسم طب الأطفال',
      careerOpportunities: [
        'طبيب أطفال في المستشفيات',
        'طبيب أطفال في العيادات التخصصية',
        'مدير وحدة طب أطفال',
        'متابعة الدراسات العليا في طب الأطفال'
      ],
      members: [
        {
          id: 4,
          name: 'د. نورا حسن محمود',
          title: 'منسق البرنامج',
          email: 'nora.hassan@med.luxor.edu.eg',
          phone: '095-2356803',
          office: 'مكتب رقم 301',
          specialization: 'أمراض الجهاز التنفسي للأطفال'
        }
      ]
    }
  ];

  private courses: Course[] = [
    {
      id: 1,
      name: 'التشريح البشري',
      description: 'دراسة تفصيلية لتشريح جسم الإنسان',
      credits: 6,
      semester: 'الفصل الأول - السنة الأولى',
      prerequisites: []
    },
    {
      id: 2,
      name: 'وظائف الأعضاء',
      description: 'دراسة وظائف أعضاء وأجهزة الجسم المختلفة',
      credits: 5,
      semester: 'الفصل الثاني - السنة الأولى',
      prerequisites: ['التشريح البشري']
    },
    {
      id: 3,
      name: 'الأمراض الباطنية',
      description: 'دراسة الأمراض الداخلية وطرق تشخيصها وعلاجها',
      credits: 8,
      semester: 'السنة الرابعة',
      prerequisites: ['وظائف الأعضاء', 'علم الأمراض']
    }
  ];

  private services: ProgramService[] = [
    {
      id: 1,
      name: 'الإرشاد الأكاديمي',
      description: 'خدمة إرشاد أكاديمي للطلاب لاختيار المسار المناسب',
      category: 'خدمات أكاديمية',
      isActive: true,
      duration: '30 دقيقة',
      cost: 'مجانية'
    },
    {
      id: 2,
      name: 'التدريب السريري',
      description: 'برامج تدريب سريري في المستشفيات التعليمية',
      category: 'تدريب',
      isActive: true,
      duration: 'حسب البرنامج',
      cost: 'مجانية للطلاب المسجلين'
    }
  ];

  private news: ProgramNews[] = [
    {
      id: 1,
      title: 'بدء التسجيل في برنامج بكالوريوس الطب الجديد',
      content: 'أعلنت كلية الطب عن بدء التسجيل في برنامج بكالوريوس الطب والجراحة المطور...',
      excerpt: 'بدء التسجيل في برنامج بكالوريوس الطب والجراحة المطور للعام الجامعي الجديد',
      publishDate: '2024-01-20',
      lastModified: '2024-01-20',
      author: 'إدارة البرامج الأكاديمية',
      category: ProgramNewsCategory.NEWS,
      imageUrl: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
      isPublished: true,
      views: 312
    },
    {
      id: 2,
      title: 'ورشة تدريبية حول المناهج الحديثة في التعليم الطبي',
      content: 'نظمت إدارة البرامج ورشة تدريبية متخصصة حول أحدث المناهج في التعليم الطبي...',
      excerpt: 'ورشة تدريبية حول أحدث المناهج والتقنيات في التعليم الطبي الحديث',
      publishDate: '2024-01-18',
      lastModified: '2024-01-18',
      author: 'د. عائشة محمد إبراهيم',
      category: ProgramNewsCategory.EVENTS,
      imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      isPublished: true,
      views: 156
    }
  ];

  getAll(): Observable<ProgramDetails[]> {
    return of(this.programs);
  }

  getById(id: number): Observable<ProgramDetails> {
    const program = this.programs.find(p => p.id === id);
    return of(program as ProgramDetails);
  }

  getCoursesByProgramId(programId: number): Observable<Course[]> {
    return of(this.courses);
  }

  getServicesByProgramId(programId: number): Observable<ProgramService[]> {
    return of(this.services);
  }

  getNewsByProgramId(programId: number): Observable<ProgramNews[]> {
    return of(this.news);
  }
}