import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialIconComponent } from '@shared/components/social-icon/social-icon.component';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { CheckboxControlComponent } from '@shared/components/controls/checkbox-control/checkbox-control.component';
import { InputControlComponent } from '@shared/components/controls/input-control/input-control.component';
import { AdaptComponent } from '@shared/tools';

@NgModule({
  declarations: [SocialIconComponent, BreadcrumbsComponent, SafeHtmlPipe, CheckboxControlComponent, InputControlComponent, AdaptComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbsComponent, SocialIconComponent, SafeHtmlPipe, CheckboxControlComponent, InputControlComponent, AdaptComponent]
})
export class SharedModule {}
