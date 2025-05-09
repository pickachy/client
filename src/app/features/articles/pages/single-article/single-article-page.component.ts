import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '@core/services/pages.service';
import { Article } from '@core/models/article.model';
import { Breadcrumbs } from '@core/models/breadcrumbs.model';

@Component({
  selector: 'app-page-single-news',
  templateUrl: './single-article-page.component.html',
  styleUrls: ['./single-article-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SingleArticlePageComponent implements OnInit {
  constructor(private _pagesService: PagesService, private _activateRoute: ActivatedRoute) {}

  article?: Article;
  breadcrumbs: Breadcrumbs = {
    crumbs: [{ label: 'Статьи', link: '/news' }],
    lastCrumbName: ''
  };

  ngOnInit(): void {
    const urlSlug = String(this._activateRoute.snapshot.paramMap.get('urlSlug'));
    this._pagesService.getSingleArticlePageAggregation(urlSlug).subscribe(data => {
      this.article = data.article;
      this.breadcrumbs.lastCrumbName = this.article.title;
      this._pagesService.setSeoAndOg(data.page);
    });
  }

  // tags = [
  //   { href: '#', text: 'Кредиты' },
  //   { href: '#', text: 'Банки' },
  //   { href: '#', text: 'Овердрафт' }
  // ];
  // comments = [
  //   { author: 'Игорь Злаков', text: 'Рассрочка на наличные дается на три месяца, и никакими подписками этот срок не увеличить' },
  //   { author: 'Татьяна Иванова', text: 'Рассрочка на наличные дается на три месяца, и никакими подписками этот срок не увеличить' },
  //   { author: 'Иван Велич', text: 'Это важно, так как каждое снятие облагается комиссией' }
  // ];
}
