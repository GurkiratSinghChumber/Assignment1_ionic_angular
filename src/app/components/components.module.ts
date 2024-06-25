import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DoseSummaryComponent } from './dose-summary/dose-summary.component';
import { KeyUpdatesComponent } from './key-updates/key-updates.component';
import { OntarioComponent } from './ontario/ontario.component';



@NgModule({
  declarations: [KeyUpdatesComponent,OntarioComponent,DoseSummaryComponent],
  imports: [
    CommonModule,IonicModule.forRoot()
  ],
  exports:[KeyUpdatesComponent,OntarioComponent,DoseSummaryComponent]
})
export class ComponentsModule { }
