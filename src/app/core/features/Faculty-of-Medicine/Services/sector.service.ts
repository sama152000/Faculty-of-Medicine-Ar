import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sector, Department, Service, FacultyMember } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private sectors: Sector[] = [
    {
      id: 1,
      name: 'قطاع شؤون التعليم والطلاب',
      description: 'يهتم قطاع شؤون التعليم والطلاب بكافة الأمور المتعلقة بالعملية التعليمية وخدمات الطلاب',
      establishedDate: '2020-01-01',
      vision: 'أن نكون القطاع الرائد في تقديم الخدمات التعليمية المتميزة للطلاب',
      mission: 'نلتزم بتوفير بيئة تعليمية متطورة تدعم نمو وتطور الطلاب أكاديمياً ومهنياً',
      objectives: [
        'تطوير المناهج الدراسية وفقاً للمعايير الدولية',
        'تحسين جودة التعليم الطبي',
        'دعم الطلاب أكاديمياً ونفسياً',
        'تطوير أساليب التقييم والامتحانات'
      ],
      generalOverview: 'يعد قطاع شؤون التعليم والطلاب من أهم القطاعات في كلية الطب، حيث يسعى إلى توفير أفضل الخدمات التعليمية والإدارية للطلاب',
      head: 'د. محمد أحمد حسن',
      members: [
        {
          id: 1,
          name: 'د. فاطمة علي محمد',
          title: 'مدير مساعد',
          email: 'fatima.ali@medicine.luxor.edu.eg',
          phone: '095-1234567',
          office: 'A-102',
          specialization: 'تعليم طبي'
        },
        {
          id: 2,
          name: 'د. أحمد محمود إبراهيم',
          title: 'مستشار أكاديمي',
          email: 'ahmed.mahmoud@medicine.luxor.edu.eg',
          phone: '095-1234568',
          office: 'A-103',
          specialization: 'إدارة تعليمية'
        },
        {
          id: 3,
          name: 'د. سارة حسن علي',
          title: 'منسق برامج',
          email: 'sara.hassan@medicine.luxor.edu.eg',
          phone: '095-1234569',
          office: 'A-104',
          specialization: 'تطوير مناهج'
        }
      ],
      departments: [
        {
          id: 1,
          name: 'قسم شؤون الطلاب',
          description: 'يهتم بجميع الأمور الإدارية والأكاديمية للطلاب',
          head: 'د. أحمد محمد علي',
          establishedDate: '2020-01-01',
          location: 'الدور الأول - مبنى الإدارة',
          contactInfo: {
            phone: '095-123456',
            email: 'student.affairs@medicine.luxor.edu.eg',
            office: 'A-101'
          }
        },
        {
          id: 2,
          name: 'قسم التعليم الطبي',
          description: 'يشرف على تطوير المناهج وأساليب التدريس',
          head: 'د. فاطمة أحمد السيد',
          establishedDate: '2020-01-01',
          location: 'الدور الثاني - مبنى الإدارة',
          contactInfo: {
            phone: '095-123457',
            email: 'medical.education@medicine.luxor.edu.eg',
            office: 'A-201'
          }
        }
      ],
      services: [
        {
          id: 1,
          name: 'خدمة تسجيل المواد',
          description: 'تسجيل الطلاب في المواد الدراسية للفصل الدراسي',
          category: 'أكاديمي',
          isActive: true,
          duration: '2-3 أيام',
          cost: 'مجاني'
        },
        {
          id: 2,
          name: 'خدمة الإرشاد الأكاديمي',
          description: 'توجيه ومساعدة الطلاب في اختيار التخصصات والمسار الأكاديمي',
          category: 'إرشاد',
          isActive: true,
          duration: '30 دقيقة',
          cost: 'مجاني'
        }
      ]
    },
    {
      id: 2,
      name: 'قطاع الدراسات العليا والبحوث',
      description: 'يشرف على برامج الدراسات العليا والأنشطة البحثية في الكلية',
      establishedDate: '2020-01-01',
      vision: 'تحقيق التميز في البحث العلمي والدراسات العليا',
      mission: 'نسعى لتطوير البحث العلمي وتأهيل الباحثين المتميزين',
      objectives: [
        'تطوير برامج الدراسات العليا',
        'دعم البحث العلمي والابتكار',
        'تعزيز التعاون البحثي مع المؤسسات الدولية',
        'نشر البحوث في المجلات العلمية المحكمة'
      ],
      generalOverview: 'يهتم قطاع الدراسات العليا والبحوث بتطوير قدرات البحث العلمي والإشراف على برامج الماجستير والدكتوراه',
      head: 'د. علي حسن محمود',
      members: [
        {
          id: 4,
          name: 'د. ليلى أحمد محمد',
          title: 'مدير بحوث',
          email: 'layla.ahmed@medicine.luxor.edu.eg',
          phone: '095-1234570',
          office: 'B-302',
          specialization: 'بحوث طبية'
        },
        {
          id: 5,
          name: 'د. كريم محمود علي',
          title: 'منسق دراسات عليا',
          email: 'karim.mahmoud@medicine.luxor.edu.eg',
          phone: '095-1234571',
          office: 'B-303',
          specialization: 'إدارة برامج'
        }
      ],
      departments: [
        {
          id: 3,
          name: 'قسم الدراسات العليا',
          description: 'يشرف على برامج الماجستير والدكتوراه',
          head: 'د. محمود حسن إبراهيم',
          establishedDate: '2020-01-01',
          location: 'الدور الثالث - مبنى البحوث',
          contactInfo: {
            phone: '095-123458',
            email: 'postgraduate@medicine.luxor.edu.eg',
            office: 'B-301'
          }
        }
      ],
      services: [
        {
          id: 3,
          name: 'خدمة التقديم للدراسات العليا',
          description: 'استقبال طلبات الالتحاق ببرامج الماجستير والدكتوراه',
          category: 'دراسات عليا',
          isActive: true,
          duration: '1-2 أسبوع',
          cost: '500 جنيه'
        }
      ]
    },
    {
      id: 3,
      name: 'قطاع خدمة المجتمع وتنمية البيئة',
      description: 'يركز على تقديم الخدمات للمجتمع المحلي والمساهمة في التنمية المستدامة',
      establishedDate: '2020-01-01',
      vision: 'أن نكون شريكاً فعالاً في خدمة المجتمع وتنمية البيئة',
      mission: 'نلتزم بتقديم خدمات نوعية تساهم في حل مشكلات المجتمع وتطوير البيئة',
      objectives: [
        'تقديم الاستشارات الطبية للمجتمع',
        'تنظيم البرامج التوعوية الصحية',
        'المساهمة في حماية البيئة',
        'تطوير الشراكات مع مؤسسات المجتمع'
      ],
      generalOverview: 'يعمل القطاع على ربط الكلية بالمجتمع المحلي من خلال البرامج والخدمات المتنوعة',
      head: 'د. نادية محمود حسن',
      members: [
        {
          id: 6,
          name: 'د. عمر أحمد علي',
          title: 'مدير برامج مجتمعية',
          email: 'omar.ahmed@medicine.luxor.edu.eg',
          phone: '095-1234572',
          office: 'C-102',
          specialization: 'صحة عامة'
        },
        {
          id: 7,
          name: 'د. هالة حسن محمد',
          title: 'منسق بيئي',
          email: 'hala.hassan@medicine.luxor.edu.eg',
          phone: '095-1234573',
          office: 'C-103',
          specialization: 'بيئة وصحة'
        },
        {
          id: 8,
          name: 'د. يوسف محمود إبراهيم',
          title: 'مستشار توعية',
          email: 'youssef.mahmoud@medicine.luxor.edu.eg',
          phone: '095-1234574',
          office: 'C-104',
          specialization: 'توعية صحية'
        }
      ],
      departments: [
        {
          id: 4,
          name: 'قسم خدمة المجتمع',
          description: 'ينظم البرامج والفعاليات المجتمعية',
          head: 'د. سارة أحمد محمد',
          establishedDate: '2020-01-01',
          location: 'الدور الأول - مبنى الخدمات',
          contactInfo: {
            phone: '095-123459',
            email: 'community@medicine.luxor.edu.eg',
            office: 'C-101'
          }
        }
      ],
      services: [
        {
          id: 4,
          name: 'برامج التوعية الصحية',
          description: 'تنظيم ندوات وورش عمل للتوعية الصحية',
          category: 'توعية',
          isActive: true,
          duration: 'حسب البرنامج',
          cost: 'مجاني'
        }
      ]
    }
  ];

  getAll(): Observable<Sector[]> {
    return of(this.sectors);
  }

  getById(id: number): Observable<Sector | undefined> {
    return of(this.sectors.find(sector => sector.id === id));
  }

  getDepartmentsBySectorId(sectorId: number): Observable<Department[]> {
    const sector = this.sectors.find(s => s.id === sectorId);
    return of(sector?.departments || []);
  }

  getServicesBySectorId(sectorId: number): Observable<Service[]> {
    const sector = this.sectors.find(s => s.id === sectorId);
    return of(sector?.services || []);
  }

  filterByType(type: string): Observable<Sector[]> {
    // For future implementation if needed
    return of(this.sectors);
  }
}