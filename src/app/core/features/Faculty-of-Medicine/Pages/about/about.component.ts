import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../../Services/about.service';
import { About, AboutDepartment, AboutService as AboutServiceModel, AboutNews } from '../../model/about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about?: About;
  departments: AboutDepartment[] = [];
  services: AboutServiceModel[] = [];
  aboutNews: AboutNews[] = [];
  
  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedDepartment?: AboutDepartment;
  selectedService?: AboutServiceModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aboutService: AboutService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const aboutId = params['id'];
      if (aboutId) {
        this.loadAboutData(aboutId);
      }
    });
  }

  private loadAboutData(aboutId: string): void {
    // Load about details
    this.aboutService.getById(aboutId).subscribe(about => {
      this.about = about;
    });

    // Load departments
    this.aboutService.getDepartmentsByAboutId(aboutId).subscribe(departments => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.selectedDepartment = this.departments[0];
      }
    });

    // Load services
    this.aboutService.getServicesByAboutId(aboutId).subscribe(services => {
      this.services = services;
      if (this.services.length > 0) {
        this.selectedService = this.services[0];
      }
    });

    // Load about news
    this.aboutService.getNewsByAboutId(aboutId).subscribe(news => {
      this.aboutNews = news;
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectDepartment(department: AboutDepartment): void {
    this.selectedDepartment = department;
  }

  selectService(service: AboutServiceModel): void {
    this.selectedService = service;
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}