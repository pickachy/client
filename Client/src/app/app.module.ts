import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesService } from '@shared/services/pages.service';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    PagesModule,
    GraphQLModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      thick: true,
      color: '#85af6a'
    }),
    NgProgressHttpModule
  ],
  providers: [PagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
