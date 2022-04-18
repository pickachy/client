import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FooterComponent } from '@core/layouts/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from '@core/layouts/header/header.component';
import { NavigationLinksComponent } from '@core/layouts/header/navigation/navigation-links/navigation-links.component';
import { LogoComponent } from '@core/layouts/header/logo/logo.component';
import { NavigationComponent } from '@core/layouts/header/navigation/navigation.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, NavigationComponent, NavigationLinksComponent, FooterComponent],
  imports: [RouterModule, CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
