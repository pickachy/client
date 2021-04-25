import { Injectable } from '@angular/core';

interface ArticleDto {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ArticleItemView extends ArticleDto {}

@Injectable({
  providedIn: 'root'
})
export class UsefulArticlesService {
  getArticles = (): ArticleItemView[] => [
    {
      id: 0,
      title: 'Et has minim elitr intellegat',
      description: 'Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum',
      imageUrl: 'assets/images/home-page/useful-articles/rectangle.png'
    },
    {
      id: 1,
      title: 'Et has minim elitr intellegat',
      description: 'Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum',
      imageUrl: 'assets/images/home-page/useful-articles/rectangle.png'
    },
    {
      id: 2,
      title: 'Et has minim elitr intellegat',
      description: 'Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum',
      imageUrl: 'assets/images/home-page/useful-articles/rectangle.png'
    },
    {
      id: 3,
      title: 'Et has minim elitr intellegat',
      description: 'Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum',
      imageUrl: 'assets/images/home-page/useful-articles/rectangle.png'
    }
  ];
}
