import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'covid-summary',
    loadChildren: () => import('./covid-summary/covid-summary.module').then( m => m.CovidSummaryPageModule)
  },
   {
    path: 'covid-summary/:date',
    loadChildren: () => import('./covid-summary/covid-summary.module').then( m => m.CovidSummaryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
