import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitsService } from '../../Services/units.service';
import { Unit, UnitDepartment, UnitService, UnitNews } from '../../model/unit.model';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  unit?: Unit;
  departments: UnitDepartment[] = [];
  services: UnitService[] = [];
  unitNews: UnitNews[] = [];
  
  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedDepartment?: UnitDepartment;
  selectedService?: UnitService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unitsService: UnitsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const unitId = params['id'];
      if (unitId) {
        this.loadUnitData(unitId);
      }
    });
  }

  private loadUnitData(unitId: string): void {
    // Load unit details
    this.unitsService.getById(unitId).subscribe(unit => {
      this.unit = unit;
    });

    // Load departments
    this.unitsService.getDepartmentsByUnitId(unitId).subscribe(departments => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.selectedDepartment = this.departments[0];
      }
    });

    // Load services
    this.unitsService.getServicesByUnitId(unitId).subscribe(services => {
      this.services = services;
      if (this.services.length > 0) {
        this.selectedService = this.services[0];
      }
    });

    // Load unit news
    this.unitsService.getNewsByUnitId(unitId).subscribe(news => {
      this.unitNews = news;
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectDepartment(department: UnitDepartment): void {
    this.selectedDepartment = department;
  }

  selectService(service: UnitService): void {
    this.selectedService = service;
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}