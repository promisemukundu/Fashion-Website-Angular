export interface Article {
  author: string;
  content: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  source: {
    id: string;
    name: string;
  };
  urlToImage: string;
}
