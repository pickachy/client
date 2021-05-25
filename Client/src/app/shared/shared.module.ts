import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { UsefulArticlesComponent } from './sections/useful-articles/useful-articles.component';
import { TagsFilterComponent } from './filters/tags-filter/tags-filter.component';
import { AdditionalLinksComponent } from './sections/additional-links/additional-links.component';
import { AdvantagesComponent } from './sections/advantages/advantages.component';
import { AdaptComponent } from './tools/adapt/adapt.component';
import { NavigationComponent } from '@shared/layouts/header/navigation/navigation.component';
import { HeaderComponent } from '@shared/layouts/header/header.component';
import { LogoComponent } from '@shared/layouts/header/logo/logo.component';
import { LanguageSwitcherComponent } from '@shared/layouts/header/language-switcher/language-switcher.component';
import { FooterComponent } from '@shared/layouts/footer/footer.component';
import { NavigationLinksComponent } from '@shared/layouts/header/navigation/navigation-links/navigation-links.component';

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
