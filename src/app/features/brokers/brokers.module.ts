import { NgModule } from '@angular/core';
import { BrokersPageComponent } from './pages/brokers-page/brokers-page.component';
import { SharedModule } from '@shared/shared.module';
import { BrokersListComponent } from './pages/brokers-page/components/brokers-list/brokers-list.component';
import { BrokerItemComponent } from './pages/brokers-page/components/brokers-list/broker-item/broker-item.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RatingStarsComponent } from './pages/brokers-page/components/rating-stars/rating-stars.component';
import { ProsAndConstComponent } from './pages/brokers-page/components/pros-and-cons/pros-and-cons.component';
import { DetailsComponent } from './pages/brokers-page/components/details/details.component';
import { TooltipComponent } from './pages/brokers-page/components/tooltip/tooltip.component';
import { InformationComponent } from './pages/brokers-page/components/details/information/information.component';
import { TariffComponent } from './pages/brokers-page/components/details/tariff/tariff.component';
import { ToolsComponent } from './pages/brokers-page/components/details/tools/tools.component';
import { CommonModule } from '@angular/common';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersFilterComponent } from './pages/brokers-page/components/filter/brokers-filter.component';

@NgModule({
  declarations: [
    BrokersPageComponent,
    BrokersListComponent,
    BrokerItemComponent,
    RatingStarsComponent,
    ProsAndConstComponent,
    DetailsComponent,
    TooltipComponent,
    InformationComponent,
    TariffComponent,
    ToolsComponent,
    BrokersFilterComponent
  ],
  exports: [BrokersPageComponent],
  imports: [SharedModule, NgSelectModule, FormsModule, CommonModule, BrokersRoutingModule]
})
export class BrokersModule {}
