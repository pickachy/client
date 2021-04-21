import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {NavigationComponent} from "./header/navigation/navigation.component";
import {LogoComponent} from "./header/logo/logo.component";
import {LanguageSwitcherComponent} from "./header/language-switcher/language-switcher.component";
import {PageNotFoundComponent} from "./pages/page-not-found.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, LogoComponent, LanguageSwitcherComponent, PageNotFoundComponent],
  imports: [AppRoutingModule],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: []
})
export class CommonModule { }
