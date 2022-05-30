import { ArticlesPageComponent } from './pages/articles/articles-page.component';
import { SingleArticlePageComponent } from './pages/single-article/single-article-page.component';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgModule } from '@angular/core';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ShareMenuComponent } from './pages/single-article/components/sections/share-menu/share-menu.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ArticlesPageComponent, SingleArticlePageComponent, ShareMenuComponent],
  exports: [ArticlesPageComponent, SingleArticlePageComponent],
  imports: [CommonModule, SharedModule, ClipboardModule, ArticlesRoutingModule]
})
export class ArticlesModule {}
