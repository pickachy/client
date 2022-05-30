import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialIconComponent } from '@shared/components/social-icon/social-icon.component';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [SocialIconComponent, BreadcrumbsComponent, SafeHtmlPipe],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbsComponent, SocialIconComponent, SafeHtmlPipe]
})
export class SharedModule {}
