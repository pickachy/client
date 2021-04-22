import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LogoComponent } from './header/logo/logo.component';
import { LanguageSwitcherComponent } from './header/language-switcher/language-switcher.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, LogoComponent, LanguageSwitcherComponent, PageNotFoundComponent, FooterComponent],
  imports: [AppRoutingModule, CommonModule],
  exports: [HeaderComponent, PageNotFoundComponent, FooterComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
