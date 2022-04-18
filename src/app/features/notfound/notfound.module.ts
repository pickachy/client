import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [RouterModule]
})
export class NotFoundModule {}
