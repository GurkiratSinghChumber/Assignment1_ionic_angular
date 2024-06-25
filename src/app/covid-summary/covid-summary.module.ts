import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidSummaryPageRoutingModule } from './covid-summary-routing.module';

import { ComponentsModule } from '../components/components.module';
import { CovidSummaryPage } from './covid-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidSummaryPageRoutingModule,ComponentsModule
  ],
  declarations: [CovidSummaryPage]
})
export class CovidSummaryPageModule {}
