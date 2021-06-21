import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { CommonModule } from '@angular/common';
import { AdaptComponent } from './tools/adapt/adapt.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AdaptComponent
  ],
  imports: [AppRoutingModule, CommonModule],
  exports: [
    PageNotFoundComponent,
    AdaptComponent
  ]
})
export class SharedModule {}
