import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LogoComponent } from './header/logo/logo.component';
import { LanguageSwitcherComponent } from './header/language-switcher/language-switcher.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { NavigationLinksComponent } from './header/navigation/navigation-links/navigation-links.component';
import { UsefulArticlesComponent } from './sections/useful-articles/useful-articles.component';
import { TagsFilterComponent } from './filters/tags-filter/tags-filter.component';
import { AdditionalLinksComponent } from './sections/additional-links/additional-links.component';
import { AdvantagesComponent } from './sections/advantages/advantages.component';
import { AdaptComponent } from './tools/adapt/adapt.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    NavigationLinksComponent,
    TagsFilterComponent,
    LogoComponent,
    LanguageSwitcherComponent,
    PageNotFoundComponent,
    FooterComponent,
    SocialIconComponent,
    UsefulArticlesComponent,
    AdditionalLinksComponent,
    AdvantagesComponent,
    AdaptComponent
  ],
  imports: [AppRoutingModule, CommonModule],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    SocialIconComponent,
    NavigationLinksComponent,
    TagsFilterComponent,
    UsefulArticlesComponent,
    AdditionalLinksComponent,
    AdvantagesComponent,
    AdaptComponent
  ]
})
export class SharedModule {}
