import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConferenceService } from '../../../Services/conference.service';
import { Conference } from '../../../model/conference.model';

@Component({
  selector: 'app-conference-upcoming',
  standalone: true,
  imports: [CommonModule, RouterModule],
templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferenceUpcomingComponent implements OnInit {
  @Input() sectionTitle = 'المؤتمرات القادمة';

  conferences: Conference[] = [];

  constructor(private conferenceService: ConferenceService) {}

  ngOnInit(): void {
    this.loadUpcomingConferences();
  }

  private loadUpcomingConferences(): void {
    this.conferenceService.getAll().subscribe(conferences => {
      this.conferences = conferences.slice(0, 3);
    });
  }
}