import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDetail, ServiceDepartment, RelatedService, ServiceNews } from '../../model/service.model';
import { ServiceDetailsService } from '../../Services/service-details.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service?: ServiceDetail;
  departments: ServiceDepartment[] = [];
  relatedServices: RelatedService[] = [];
  serviceNews: ServiceNews[] = [];
  
  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedDepartment?: ServiceDepartment;
  selectedRelatedService?: RelatedService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceDetailsService: ServiceDetailsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const serviceId = params['id'];
      if (serviceId) {
        this.loadServiceData(serviceId);
      }
    });
  }

  private loadServiceData(serviceId: string): void {
    // Load service details
    this.serviceDetailsService.getById(serviceId).subscribe((service: ServiceDetail | undefined) => {
      this.service = service;
    });

    // Load departments
    this.serviceDetailsService.getDepartmentsByServiceId(serviceId).subscribe((departments: ServiceDepartment[]) => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.selectedDepartment = this.departments[0];
      }
    });

    // Load related services
    this.serviceDetailsService.getRelatedServicesByServiceId(serviceId).subscribe((services: RelatedService[]) => {
      this.relatedServices = services;
      if (this.relatedServices.length > 0) {
        this.selectedRelatedService = this.relatedServices[0];
      }
    });

   
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectDepartment(department: ServiceDepartment): void {
    this.selectedDepartment = department;
  }

  selectRelatedService(service: RelatedService): void {
    this.selectedRelatedService = service;
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}