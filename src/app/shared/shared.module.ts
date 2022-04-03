import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { HeaderComponent } from '@shared/layouts/header/header.component';
import { LogoComponent } from '@shared/layouts/header/logo/logo.component';
import { NavigationComponent } from '@shared/layouts/header/navigation/navigation.component';
import { NavigationLinksComponent } from '@shared/layouts/header/navigation/navigation-links/navigation-links.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/layouts/footer/footer.component';
import { SocialIconComponent } from '@shared/social-icon/social-icon.component';

@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, LogoComponent, NavigationComponent, NavigationLinksComponent, FooterComponent, SocialIconComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageNotFoundComponent, HeaderComponent, FooterComponent]
})
export class SharedModule {}
