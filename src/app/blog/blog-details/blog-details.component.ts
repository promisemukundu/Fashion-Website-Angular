import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { Article } from 'src/app/models/article';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  news?: Article;
  private articleId?: number;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    /*this.route.paramMap.subscribe((value) => {
      this.articleId = parseInt(value.get('id')!);
    });

    this.newsService.getNews().subscribe((data) => {
      //@ts-ignore
      this.news = data.articles[this.articleId];
    });*/

    this.route.paramMap.pipe(
      tap(params => this.articleId = +params.get('id')!),
      switchMap(() => this.newsService.getNews())
    ).subscribe({
      //@ts-ignore
      next: news => this.news = news.articles[this.articleId],
      error: error => console.log(error)
    });

    /*this.route.paramMap.pipe(
      switchMap(params => this.newsService.getNews()
      .pipe(map(articles => (articles as Array<any>)[parseInt(params.get('id')!])))
    ).subscribe({
      next: news =>
    });*/
  }
}
