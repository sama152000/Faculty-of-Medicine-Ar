import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../../../Services/contact.service';
import { ContactInfo } from '../../../../model/contact.model';

@Component({
  selector: 'app-medicine-logo',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './medicine-logo.component.html',
  styleUrls: ['./medicine-logo.component.css']
})
export class MedicineLogoComponent implements OnInit {
  logoData: ContactInfo = {} as ContactInfo;
  contactInfo: ContactInfo = {} as ContactInfo;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContactInfo();
  }

  private loadContactInfo(): void {
    this.contactService.getContactInfo().subscribe(info => {
      this.logoData = info;
      this.contactInfo = info;
    });
  }

  openLocation(): void {
    const address = encodeURIComponent(this.contactInfo.address);
    window.open(`https://www.google.com/maps/search/${address}`, '_blank');
  }

  openPhone(phone: string): void {
    window.location.href = `tel:${phone}`;
  }

  openEmail(): void {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }
}