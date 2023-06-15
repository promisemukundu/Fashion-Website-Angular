import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  news: Array<Article> = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.news = data.articles.slice(0, 12);
    });
  }
}
