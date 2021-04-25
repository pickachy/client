import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { NavigationService } from './shared/header/navigation/navigation.service';
import { UsefulArticlesService } from './shared/sections/useful-articles/useful-articles.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, SharedModule, PagesModule],
  providers: [NavigationService, UsefulArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
