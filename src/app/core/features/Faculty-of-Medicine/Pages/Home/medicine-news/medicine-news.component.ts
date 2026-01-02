import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { News } from '../../../model/news.model';

@Component({
  selector: 'app-medicine-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
 templateUrl: './medicine-news.component.html',
  styleUrls: ['./medicine-news.component.css']
})
export class MedicineNewsComponent implements OnInit {
  @Input() showTitle = true;
  @Input() sectionTitle = 'أحدث الأخبار';
  @Input() itemsPerView = 3;
  @Input() isRTL = true;

  newsItems: News[] = [];
  visibleItems: News[] = [];
  currentStartIndex = 0;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  trackByFn(index: number, item: News): any {
    return item.id;
  }

  private loadNews(): void {
    this.newsService.getAll().subscribe(news => {
      this.newsItems = news;
      this.updateVisibleItems();
    });
  }

  private updateVisibleItems(): void {
    this.visibleItems = this.newsItems.slice(
      this.currentStartIndex,
      this.currentStartIndex + this.itemsPerView
    );
  }

  get hasPrev(): boolean {
    return this.currentStartIndex > 0;
  }

  get hasNext(): boolean {
    return this.currentStartIndex + this.itemsPerView < this.newsItems.length;
  }

  prevSlide(): void {
    if (this.hasPrev) {
      this.currentStartIndex = Math.max(0, this.currentStartIndex - this.itemsPerView);
      this.updateVisibleItems();
    }
  }

  nextSlide(): void {
    if (this.hasNext) {
      this.currentStartIndex = Math.min(
        this.newsItems.length - this.itemsPerView,
        this.currentStartIndex + this.itemsPerView
      );
      this.updateVisibleItems();
    }
  }

  goToPage(pageIndex: number): void {
    this.currentStartIndex = pageIndex * this.itemsPerView;
    this.updateVisibleItems();
  }

  getPaginationPages(): any[] {
    const totalPages = Math.ceil(this.newsItems.length / this.itemsPerView);
    return Array(totalPages).fill(0);
  }

  getCurrentPageIndex(): number {
    return Math.floor(this.currentStartIndex / this.itemsPerView);
  }

  getDateParts(dateString: string): { day: string; month: string } {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString(),
      month: date.toLocaleString('ar-EG', { month: 'short' })
    };
  }

  onCardClick(event: Event, url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  onReadMoreClick(event: Event): void {
    event.stopPropagation();
  }
}