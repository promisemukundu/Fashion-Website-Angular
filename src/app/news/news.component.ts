import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: Array<Article> = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.news = data.articles.slice(0, 3)
    });
  }
}
