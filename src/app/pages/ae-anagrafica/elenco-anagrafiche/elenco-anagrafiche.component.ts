import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnagraficaService } from '../../ae-services/ae-anagrafica.service';
import { AnagraficaModel } from '../ae-anagrafica.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importa FormGroup, FormBuilder e Validators

@Component({
  selector: 'ngx-elenco-anagrafiche',
  templateUrl: './elenco-anagrafiche.component.html',
  styleUrls: ['./elenco-anagrafiche.component.scss']
})
export class ElencoAnagraficheComponent implements OnInit {

  anagraficaForm: FormGroup;  // Definizione della variabile formGroup

  anagrafiche: AnagraficaModel[] = [];

  constructor(private anagraficaService: AnagraficaService, private router: Router) { }

  ngOnInit(): void {
    this.loadAnagrafiche();
  }

  loadAnagrafiche() {
    this.anagraficaService.getAnagrafiche().subscribe(data => {
      this.anagrafiche = data;
    });
  }

  newAnagrafica() {
    this.router.navigate(['../nuova-anagrafica']);
  }

  viewAnagrafica(id: number) {
    this.router.navigate([`/anagrafica/${id}`]);
  }
}
