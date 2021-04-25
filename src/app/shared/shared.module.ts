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
import { SectionFilterComponent } from './filters/section-filter/section-filter.component';
import { UsefulArticlesComponent } from './sections/useful-articles/useful-articles.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    NavigationLinksComponent,
    SectionFilterComponent,
    LogoComponent,
    LanguageSwitcherComponent,
    PageNotFoundComponent,
    FooterComponent,
    SocialIconComponent,
    UsefulArticlesComponent
  ],
  imports: [AppRoutingModule, CommonModule],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    SocialIconComponent,
    NavigationLinksComponent,
    SectionFilterComponent,
    UsefulArticlesComponent
  ]
})
export class SharedModule {}
