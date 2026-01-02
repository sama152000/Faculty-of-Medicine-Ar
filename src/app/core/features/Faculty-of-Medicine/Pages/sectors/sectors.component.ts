import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorService } from '../../Services/sector.service';
import { NewsService } from '../../Services/news.service';
import { Sector, Department, Service, News } from '../../model/sector.model';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sector?: Sector;
  departments: Department[] = [];
  services: Service[] = [];
  sectorNews: News[] = [];
  
  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedDepartment?: Department;
  selectedService?: Service;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sectorService: SectorService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const sectorId = +params['id'];
      if (sectorId) {
        this.loadSectorData(sectorId);
      }
    });
  }

  private loadSectorData(sectorId: number): void {
    // Load sector details
    this.sectorService.getById(sectorId).subscribe(sector => {
      this.sector = sector;
    });

    // Load departments
    this.sectorService.getDepartmentsBySectorId(sectorId).subscribe(departments => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.selectedDepartment = this.departments[0];
      }
    });

    // Load services
    this.sectorService.getServicesBySectorId(sectorId).subscribe(services => {
      this.services = services;
      if (this.services.length > 0) {
        this.selectedService = this.services[0];
      }
    });

    // Load sector news
    this.newsService.getNewsBySectorId(sectorId).subscribe(news => {
      this.sectorNews = news;
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectDepartment(department: Department): void {
    this.selectedDepartment = department;
  }

  selectService(service: Service): void {
    this.selectedService = service;
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}