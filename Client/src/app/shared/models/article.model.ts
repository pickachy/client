export interface ArticleDto {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Article extends ArticleDto {}
