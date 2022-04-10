import { NgModule } from '@angular/core';
import { LoansInAdvancePageComponent } from './loans/in-advance/loans-in-advance-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansListComponent } from './loans/in-advance/sections/loans-list/loans-list.component';
import { LoanInAdvanceSinglePageComponent } from './loans/in-advance/loan-single/loan-in-advance-single-page.component';
import { CalculatorComponent } from './loans/in-advance/loan-single/sections/calculator/calculator.component';
import { AppRoutingModule } from '../app-routing.module';
import { SingleArticlePageComponent } from './single-news/single-article-page.component';
// import { SingleNewsSidebarComponent } from './single-news/sections/sidebar/single-news-sidebar.component';
// import { SingleNewsSidebarItemComponent } from './single-news/sections/sidebar/single-news-sidebar-item/single-news-sidebar-item.component';
import { ShareMenuComponent } from './single-news/sections/share-menu/share-menu.component';
import { ArticlesPageComponent } from './articles/articles-page.component';
import { SharedModule } from '@shared/shared.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
// import { SingleNewsTagsComponent } from './single-news/sections/tags/single-news-tags.component';
// import { SingleNewsCommentsComponent } from './single-news/sections/comments/single-news-comments.component';
// import { SingleNewsCountersComponent } from './single-news/sections/counters/single-news-counters.component';

@NgModule({
  declarations: [
    LoansInAdvancePageComponent,
    LoansListComponent,
    LoanInAdvanceSinglePageComponent,
    CalculatorComponent,
    SingleArticlePageComponent,
    // SingleNewsSidebarComponent,
    // SingleNewsSidebarItemComponent,
    ShareMenuComponent,
    // SingleNewsTagsComponent,
    // SingleNewsCommentsComponent,
    // SingleNewsCountersComponent,
    ArticlesPageComponent
  ],
  exports: [LoansInAdvancePageComponent, LoanInAdvanceSinglePageComponent, SingleArticlePageComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule, SharedModule, ClipboardModule],
  providers: []
})
export class PagesModule {}
