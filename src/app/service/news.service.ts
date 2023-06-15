import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<{
      status: string;
      articles: Array<Article>;
      totalResults: number
    }>('https://newsapi.org/v2/everything', {
      params: {
        apiKey: '9f7b20595ca240bf81d10079c0e25890',
        q: 'fashion',
        searchIn: 'title',
        sortBy: 'relevancy',
      },
    });
  }
}
