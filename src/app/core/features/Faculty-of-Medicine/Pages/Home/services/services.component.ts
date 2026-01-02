import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ServiceService } from '../../../Services/service.service';
import { Service } from '../../../model/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() sectionTitle = 'خدمات الكلية';
  @Input() showTitle = true;
  @Input() showAllServicesButton = true;
  @Input() allServicesText = 'جميع الخدمات';
  @Input() allServicesUrl = '/services';
  
  @Output() serviceClicked = new EventEmitter<Service>();
  @Output() allServicesClicked = new EventEmitter<void>();

  services: Service[] = [];

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  trackByFn(index: number, item: Service): any {
    return item.id;
  }

  private loadServices(): void {
    this.serviceService.getAll().subscribe(services => {
      this.services = services;
    });
  }

  onServiceClick(service: Service): void {
    this.serviceClicked.emit(service);
    if (service.url) {
      this.router.navigate([service.url]);
    }
  }

  onAllServicesClick(): void {
    this.allServicesClicked.emit();
  }
}