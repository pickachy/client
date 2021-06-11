import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { QasService } from '@shared/services/qas.service';
import { LoansService } from '@shared/services/loans.service';
import { ArticlesService } from '@shared/services/articles.service';
import { NavigationService } from '@shared/services/navigation.service';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesService } from '@shared/services/pages.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, SharedModule, PagesModule, GraphQLModule, HttpClientModule],
  providers: [NavigationService, ArticlesService, QasService, LoansService, PagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
