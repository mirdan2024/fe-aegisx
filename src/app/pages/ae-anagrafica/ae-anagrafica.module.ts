import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule

import {  NgxDropzoneModule } from 'ngx-dropzone';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AnagraficaRoutingModule } from './ae-anagrafica-routing.module';
import { AnagraficaComponent } from './ae-anagrafica.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { MassivoAnagraficheComponent } from './massivo-anagrafiche/massivo-anagrafiche.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    AnagraficaRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  declarations: [
    AnagraficaComponent,
    MassivoAnagraficheComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnagraficaModule { }
