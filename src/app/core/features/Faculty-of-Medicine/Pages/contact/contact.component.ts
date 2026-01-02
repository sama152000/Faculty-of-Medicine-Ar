import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    university: 'كلية الطب - جامعة الأقصر',
    address: 'شارع محمد فريد، الأقصر، مصر',
    phone: '+20 95 237 1234',
    fax: '+20 95 237 1235',
    email: 'info@med.luxor.edu.eg',
    website: 'www.med.luxor.edu.eg',
    postCode: '85951'
  };

  departments = [
    { name: 'قسم القبول والتسجيل', phone: '+20 95 237 1236', email: 'admission@med.luxor.edu.eg' },
    { name: 'قسم شؤون الطلاب', phone: '+20 95 237 1237', email: 'students@med.luxor.edu.eg' },
    { name: 'قسم الدراسات العليا', phone: '+20 95 237 1238', email: 'graduate@med.luxor.edu.eg' },
    { name: 'قسم الشؤون الإدارية', phone: '+20 95 237 1239', email: 'admin@med.luxor.edu.eg' }
  ];

  workingHours = {
    sunday: 'الأحد: 8:00 ص - 2:00 م',
    monday: 'الاثنين: 8:00 ص - 2:00 م',
    tuesday: 'الثلاثاء: 8:00 ص - 2:00 م',
    wednesday: 'الأربعاء: 8:00 ص - 2:00 م',
    thursday: 'الخميس: 8:00 ص - 2:00 م',
    weekend: 'الجمعة والسبت: مغلق'
  };
}