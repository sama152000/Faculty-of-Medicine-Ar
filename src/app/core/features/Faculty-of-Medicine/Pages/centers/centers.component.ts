import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CentersService } from '../../Services/centers.service';
import { Center, CenterDepartment, CenterService, CenterNews } from '../../model/center.model';

@Component({
  selector: 'app-centers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {
  center?: Center;
  departments: CenterDepartment[] = [];
  services: CenterService[] = [];
  centerNews: CenterNews[] = [];
  
  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedDepartment?: CenterDepartment;
  selectedService?: CenterService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private centersService: CentersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const centerId = params['id'];
      if (centerId) {
        this.loadCenterData(centerId);
      }
    });
  }

  private loadCenterData(centerId: string): void {
    // Load center details
    this.centersService.getById(centerId).subscribe(center => {
      this.center = center;
    });

    // Load departments
    this.centersService.getDepartmentsByCenterId(centerId).subscribe(departments => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.selectedDepartment = this.departments[0];
      }
    });

    // Load services
    this.centersService.getServicesByCenterId(centerId).subscribe(services => {
      this.services = services;
      if (this.services.length > 0) {
        this.selectedService = this.services[0];
      }
    });

    // Load center news
    this.centersService.getNewsByCenterId(centerId).subscribe(news => {
      this.centerNews = news;
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectDepartment(department: CenterDepartment): void {
    this.selectedDepartment = department;
  }

  selectService(service: CenterService): void {
    this.selectedService = service;
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}