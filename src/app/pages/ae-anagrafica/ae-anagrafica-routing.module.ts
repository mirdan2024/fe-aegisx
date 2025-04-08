import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AnagraficaComponent } from './ae-anagrafica.component';
import { NuovaAnagraficaComponent } from './nuova-anagrafica/nuova-anagrafica.component';
import { ElencoAnagraficheComponent } from './elenco-anagrafiche/elenco-anagrafiche.component';
import {  MassivoAnagraficheComponent } from './massivo-anagrafiche/massivo-anagrafiche.component';


const routes: Routes = [
  {
    path: '',
    component: AnagraficaComponent,
    children: [
      {
        path: 'nuova-anagrafica',
        component: NuovaAnagraficaComponent,
      },
      {
        path: 'elenco-anagrafiche',
        component: ElencoAnagraficheComponent,
      },
      {
        path: 'massivo-anagrafiche',
        component: MassivoAnagraficheComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class AnagraficaRoutingModule {
}

