import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import { News, NewsCategory } from '../../model/sector.model';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  allNews: News[] = [];
  filteredNews: News[] = [];
  paginatedNews: News[] = [];
  
  activeFilter = 'all';
  currentPage = 1;
  itemsPerPage = 9;
  totalPages = 1;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadNews();
  }

  private loadNews(): void {
    this.newsService.getAll().subscribe(news => {
      this.allNews = news;
      this.applyFilter();
    });
  }

  filterNews(filter: string): void {
    this.activeFilter = filter;
    this.currentPage = 1;
    this.applyFilter();
  }

  private applyFilter(): void {
    switch (this.activeFilter) {
      case 'news':
        this.filteredNews = this.allNews.filter(news => news.category === NewsCategory.NEWS);
        break;
      case 'conferences':
        this.filteredNews = this.allNews.filter(news => news.category === NewsCategory.CONFERENCES);
        break;
      case 'events':
        this.filteredNews = this.allNews.filter(news => news.category === NewsCategory.EVENTS);
        break;
      default:
        this.filteredNews = [...this.allNews];
    }
    
    this.calculatePagination();
  }

  private calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
    this.updatePaginatedNews();
  }

  private updatePaginatedNews(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedNews = this.filteredNews.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedNews();
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  getCategoryBadgeClass(category: NewsCategory): string {
    switch (category) {
      case NewsCategory.NEWS:
        return 'badge-primary';
      case NewsCategory.CONFERENCES:
        return 'badge-success';
      case NewsCategory.EVENTS:
        return 'badge-warning';
      default:
        return 'badge-secondary';
    }
  }

  goToNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }
}