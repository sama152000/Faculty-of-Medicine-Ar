import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DepartmentService } from '../../../../Faculty-of-Medicine/Services/department.service';
import { Department } from '../../../model/department.model';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  @Input() sectionTitle = 'الأقسام الأكاديمية';
  @Input() showAllServicesButton = true;
  @Input() allServicesText = 'جميع الأقسام';
  @Input() allServicesUrl = '/departments';
  
  @Output() departmentClicked = new EventEmitter<Department>();

  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  trackByFn(index: number, item: Department): any {
    return item.id;
  }

  private loadDepartments(): void {
    this.departmentService.getAll().subscribe(departments => {
      this.departments = departments;
    });
  }

  onDepartmentClick(department: Department): void {
    this.departmentClicked.emit(department);
    if (department.url) {
      this.router.navigate([department.url]);
    }
  }
}