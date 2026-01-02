import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { News, NewsCategory } from '../../../model/news.model';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news?: News;
  relatedNews: News[] = [];
  previousNews?: News;
  nextNews?: News;
  newsNotFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const newsId = +params['id'];
      if (newsId) {
        this.loadNewsDetails(newsId);
      }
    });
  }

  private loadNewsDetails(newsId: number): void {
    // Load main news
    this.newsService.getById(newsId).subscribe(news => {
      if (news) {
        this.news = news;
        this.newsNotFound = false;
        this.loadRelatedData(newsId);
      } else {
        this.newsNotFound = true;
      }
    });
  }

  private loadRelatedData(newsId: number): void {
    // Load related news
    this.newsService.getRelatedNews(newsId).subscribe(related => {
      this.relatedNews = related;
    });

    // Load previous news
    this.newsService.getPreviousNews(newsId).subscribe(previous => {
      this.previousNews = previous;
    });

    // Load next news
    this.newsService.getNextNews(newsId).subscribe(next => {
      this.nextNews = next;
    });
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
    this.router.navigate(['/news', newsId]).then(() => {
      // Scroll to top when navigating to new news
      window.scrollTo(0, 0);
    });
  }

  goToNewsList(): void {
    this.router.navigate(['/news']);
  }
}