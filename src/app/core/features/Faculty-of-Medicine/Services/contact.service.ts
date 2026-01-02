import { Injectable } from '@angular/core';
import { ContactInfo } from '../model/contact.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactInfo: ContactInfo = {
    logoPath: 'assets/logo.png',
    logoAlt: 'شعار كلية الطب جامعة الأقصر',
    logoAltText: 'شعار كلية الطب جامعة الأقصر',
    title: 'كلية الطب - جامعة الأقصر',
    description: 'كلية الطب بجامعة الأقصر هي منارة علمية تهدف إلى إعداد أطباء مؤهلين وتقديم أفضل الخدمات الطبية للمجتمع.',
    address: 'جامعة الأقصر، الأقصر، جمهورية مصر العربية',
    phone: '+20 95 237 1234',
    email: 'info@medicine.luxor.edu.eg'
  };

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  updateContactInfo(info: Partial<ContactInfo>): Observable<ContactInfo> {
    this.contactInfo = { ...this.contactInfo, ...info };
    return of(this.contactInfo);
  }
}