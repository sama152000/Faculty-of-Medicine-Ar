import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorsService } from '../../Services/sector.service';
import { Sector, SectorDetail, SectorMember, SectorProgram, SectorService, SectorPost } from '../../model/sector.model';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sector?: Sector;
  sectorDetail?: SectorDetail;
  sectorMembers: SectorMember[] = [];
  sectorPrograms: SectorProgram[] = [];
  sectorServices: SectorService[] = [];
  sectorPosts: SectorPost[] = [];

  activeTab = 'about';
  activeAboutSection = 'overview';
  selectedProgram?: SectorProgram;
  selectedService?: SectorService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sectorsService: SectorsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const sectorId = params['id']; // id من الـ route بيكون string
      if (sectorId) {
        this.loadSectorData(sectorId);
      }
    });
  }

  private loadSectorData(sectorId: string): void {
    // بيانات القطاع الأساسية
    this.sectorsService.getSectorById(sectorId).subscribe(sector => {
      this.sector = sector;
    });

    // تفاصيل القطاع
    this.sectorsService.getSectorDetailsById(sectorId).subscribe(detail => {
      this.sectorDetail = detail;
    });

    // أعضاء القطاع
    this.sectorsService.getSectorMembersById(sectorId).subscribe(members => {
      this.sectorMembers = members;
    });

    // برامج القطاع
    this.sectorsService.getSectorProgramsById(sectorId).subscribe(programs => {
      this.sectorPrograms = programs;
      if (this.sectorPrograms.length > 0) {
        this.selectedProgram = this.sectorPrograms[0];
      }
    });

    // خدمات القطاع
    this.sectorsService.getSectorServicesById(sectorId).subscribe(services => {
      this.sectorServices = services;
      if (this.sectorServices.length > 0) {
        this.selectedService = this.sectorServices[0];
      }
    });

    // منشورات القطاع
    this.sectorsService.getSectorPostsById(sectorId).subscribe(posts => {
      this.sectorPosts = posts;
    });
  }

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  switchAboutSection(sectionName: string): void {
    this.activeAboutSection = sectionName;
  }

  selectProgram(program: SectorProgram): void {
    this.selectedProgram = program;
  }

  selectService(service: SectorService): void {
    this.selectedService = service;
  }

  goToPostDetails(postId: string): void {
    this.router.navigate(['/posts', postId]);
  }
}
