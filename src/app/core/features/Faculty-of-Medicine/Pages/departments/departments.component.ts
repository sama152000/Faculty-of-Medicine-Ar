import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../../Services/departments.service';
import { Department, Program, DepartmentService, DepartmentNews } from '../../model/department.model';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  department?: Department;
  programs: Program[] = [];
  services: DepartmentService[] = [];
  departmentNews: DepartmentNews[] = [];
  
  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedProgram?: Program;
  selectedService?: DepartmentService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentsService: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const departmentId = +params['id'];
      if (departmentId) {
        this.loadDepartmentData(departmentId);
      }
    });
  }

  private loadDepartmentData(departmentId: number): void {
    // Load department details
    this.departmentsService.getById(departmentId).subscribe(department => {
      this.department = department;
    });

    // Load programs
    this.departmentsService.getProgramsByDepartmentId(departmentId).subscribe(programs => {
      this.programs = programs;
      if (this.programs.length > 0) {
        this.selectedProgram = this.programs[0];
      }
    });

    // Load services
    this.departmentsService.getServicesByDepartmentId(departmentId).subscribe(services => {
      this.services = services;
      if (this.services.length > 0) {
        this.selectedService = this.services[0];
      }
    });

    // Load department news
    this.departmentsService.getNewsByDepartmentId(departmentId).subscribe(news => {
      this.departmentNews = news;
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectProgram(program: Program): void {
    this.selectedProgram = program;
  }

  selectService(service: DepartmentService): void {
    this.selectedService = service;
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}