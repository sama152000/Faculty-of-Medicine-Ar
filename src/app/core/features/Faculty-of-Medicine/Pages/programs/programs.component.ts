import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from '../../Services/programs.service';
import { ProgramDetails, Course, ProgramService, ProgramNews } from '../../model/program.model';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  program?: ProgramDetails;
  courses: Course[] = [];
  services: ProgramService[] = [];
  programNews: ProgramNews[] = [];
  
  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedCourse?: Course;
  selectedService?: ProgramService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private programsService: ProgramsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const programId = +params['id'];
      if (programId) {
        this.loadProgramData(programId);
      }
    });
  }

  private loadProgramData(programId: number): void {
    // Load program details
    this.programsService.getById(programId).subscribe(program => {
      this.program = program;
    });

    // Load courses
    this.programsService.getCoursesByProgramId(programId).subscribe(courses => {
      this.courses = courses;
      if (this.courses.length > 0) {
        this.selectedCourse = this.courses[0];
      }
    });

    // Load services
    this.programsService.getServicesByProgramId(programId).subscribe(services => {
      this.services = services;
      if (this.services.length > 0) {
        this.selectedService = this.services[0];
      }
    });

    // Load program news
    this.programsService.getNewsByProgramId(programId).subscribe(news => {
      this.programNews = news;
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
  }

  selectService(service: ProgramService): void {
    this.selectedService = service;
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}