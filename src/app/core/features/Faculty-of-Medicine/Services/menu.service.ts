import { Injectable } from '@angular/core';
import { MenuTab } from '../model/menu.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuTabs: MenuTab[] = [
    {
      id: 1,
      title: 'الرئيسية',
      target: '/',
      isActive: true
    },
    {
      id: 2,
      title: 'عن الكلية',
                target: '/about',

      isActive: false,
      type: 'menu',
      childs: [
        {
          id: 21,
          title: 'رؤية ورسالة الكلية',
          target: '/about/1',
          isActive: false
        },
        {
          id: 22,
          title: 'تاريخ الكلية',
          target: '/about/2',
          isActive: false
        },
        {
          id: 23,
          title: 'اهداف الكلية',
          target: '/about/3',
          isActive: false
        },
        {
          id: 24,
          title: 'الهيكل التنظيمي',
          target: '/about/4',
          isActive: false
        }
      ]
    },
    {
      id: 3,
      title: 'الأقسام الأكاديمية',
      isActive: false,
      type: 'menu',
      childs: [
        {
          id: 321,
          title: 'التشريح',
          target: '/departments/1',
          isActive: false
        },
        {
          id: 322,
          title: 'الفسيولوجيا',
          target: '/departments/2',
          isActive: false
        },
        {
          id: 323,
          title: 'علم الأدوية',
          target: '/departments/3',
          isActive: false
        },
        {
          id: 324,
          title: 'علم الأمراض',
          target: '/departments/pathology',
          isActive: false
        }
      ]
    },
    {
      id: 31,
      title: 'البرامج',
      isActive: false,
      type: 'menu',
      childs: [
        {
          id: 311,
          title: 'الطب العام',
          target: '/programs/1',
          isActive: false
        },
        {
          id: 312,
          title: 'الطب التخصصي',
          target: '/programs/2',
          isActive: false
        }
      ]
    },
    {
      id: 4,
      title: 'القطاعات',
      isActive: false,
      type: 'menu',
      childs: [
        {
          id: 41,
          title: 'قطاع شؤون التعليم والطلاب',
          target: '/sectors/1',
          isActive: false
        },
        {
          id: 42,
          title: 'قطاع الدراسات العليا والبحوث',
          target: '/sectors/2',
          isActive: false
        },
        {
          id: 43,
          title: 'قطاع خدمة المجتمع وتنمية البيئة',
          target: '/sectors/3',
          isActive: false
        }
      ]
    },
    {
      id: 5,
      title: 'المراكز',
      isActive: false,
      type: 'menu',
      childs: [
        {
          id: 51,
          title: 'مركز التعليم الطبي المستمر',
          target: '/centers/education',
          isActive: false
        },
        {
          id: 52,
          title: 'مركز البحوث الطبية والتجارب المعملية',
          target: '/centers/research',
          isActive: false
        }
      ]
    },
    {
      id: 9,
      title: 'الوحدات',
      isActive: false,
      type: 'menu',
      childs: [
        {
          id: 91,
          title: 'وحدة ضمان الجودة والاعتماد',
          target: '/units/quality',
          isActive: false
        },
        {
          id: 92,
          title: 'وحدة تكنولوجيا المعلومات',
          target: '/units/it',
          isActive: false
        }
      ]
    },
    {
      id: 6,
      title: 'الخدمات',
      target: '/services',
      isActive: false,
      type: 'menu',
      childs: [
        {
          id: 61,
          title: 'الخدمات الأكاديمية',
          target: '/services/academic',
          isActive: false
        },
        {
          id: 62,
          title: 'الخدمات الإدارية',
          target: '/services/administrative',
          isActive: false
        }
      ]
    },
    {
      id: 7,
      title: 'أخبار الكلية',
      target: '/news',
      isActive: false
    },
    {
      id: 8,
      title: 'اتصل بنا',
      target: '/contact',
      isActive: false
    }
  ];

  getMenuTabs(): Observable<MenuTab[]> {
    return of(this.menuTabs);
  }

  getMenuTabById(id: number): Observable<MenuTab | undefined> {
    return of(this.menuTabs.find(tab => tab.id === id));
  }

  updateActiveTab(id: number): Observable<MenuTab[]> {
    this.deactivateAll(this.menuTabs);
    this.findAndActivate(this.menuTabs, id);
    return of(this.menuTabs);
  }

  private deactivateAll(tabs: MenuTab[]): void {
    tabs.forEach(tab => {
      tab.isActive = false;
      if (tab.childs) {
        this.deactivateAll(tab.childs);
      }
    });
  }

  private findAndActivate(tabs: MenuTab[], id: number, parent?: MenuTab): boolean {
    for (let tab of tabs) {
      if (tab.id === id) {
        tab.isActive = true;
        if (parent) {
          parent.isActive = true;
        }
        return true;
      }
      if (tab.childs && this.findAndActivate(tab.childs, id, tab)) {
        return true;
      }
    }
    return false;
  }
}