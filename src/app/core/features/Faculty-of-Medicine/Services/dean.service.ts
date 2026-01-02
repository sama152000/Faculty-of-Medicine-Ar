import { Injectable } from '@angular/core';
import { DeanInfo } from '../model/dean-info.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeanService {
  private deanInfo: DeanInfo = {
    id: 1,
    name: 'أ.د. محمد شحات بدوي',
    title: 'عميد كلية الطب',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
    message: `
      يسعدني أن أحدثكم عن كلية طب الأقصر، هذا الصرح العلمي الذي يعتبر حلقة في مسيرة الطب المتميزة في مصر. نعمل –بإذن الله- أن يكون مركزاً للعلم، وملاذاً لشفاء المرضى، ومحراباً لقيم الرحمة والكرامة الإنسانية.

تحمل الكلية اسم مدينة كانت عاصمة لحضارة ارتبطت منذ آلاف السنين بالتفوق في الطب، ولا تزال جدران معابدها تكشف لنا أسراراً في هذا المجال تضاف إلى ما تركته حضارة مصر القديمة من إرث علمي وإنساني.

ونحن اليوم في كلية طب الأقصر نستلهم هذا الإرث العظيم في مسيرتنا لإثراء تلك المهنة السامية بجيل من الأطباء القادرين على حمل رسالة الطب بروح التميز والابتكار ومواكبة كل جديد.

ولا تكتفي الكلية بتخريج أطباء يمتلكون الكفاءة العلمية والعملية فحسب، بل تهتم بغرس قيم الرحمة والعطاء والنزاهة.
    `,
    qualifications: [
      'دكتوراه في الطب الباطني - جامعة القاهرة',
      'زمالة في أمراض القلب - جامعة هارفرد',
      'عضو الكلية الملكية للأطباء - لندن'
    ]
  };

  getDeanInfo(): Observable<DeanInfo> {
    return of(this.deanInfo);
  }

  updateDeanInfo(info: Partial<DeanInfo>): Observable<DeanInfo> {
    this.deanInfo = { ...this.deanInfo, ...info };
    return of(this.deanInfo);
  }
}