import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { DeanService } from '../../../Services/dean.service';
import { DeanInfo } from '../../../model/dean-info.model';

@Component({
  selector: 'app-dean-speech',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
 templateUrl: './dean-speech.component.html',
  styleUrls: ['./dean-speech.component.css']
})
export class DeanSpeechComponent implements OnInit {
  sectionTitle: string = `كلمة العميد`;
  @Input() fullText: string = '';
  @Input() showFull: boolean = true;

  deanInfo: DeanInfo = {} as DeanInfo;

  constructor(private deanService: DeanService) {}

  ngOnInit(): void {
    this.loadDeanInfo();
  }

  private loadDeanInfo(): void {
    this.deanService.getDeanInfo().subscribe(info => {
      this.deanInfo = info;
    });
  }

  get displayedMessage(): string {
    if (this.showFull) {
      return this.deanInfo.message;
    } else {
      return this.deanInfo.message?.slice(0, 810) + '...';
    }
  }
}