import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
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
  ],
  declarations: [
    AnagraficaComponent
  ],
})
export class AnagraficaModule { }
