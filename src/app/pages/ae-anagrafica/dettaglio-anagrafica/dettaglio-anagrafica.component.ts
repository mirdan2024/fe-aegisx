import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importa FormGroup, FormBuilder e Validators
import { AnagraficaService } from '../../ae-services/ae-anagrafica.service';
import { AnagraficaModel } from '../ae-anagrafica.model';

@Component({
  selector: 'ngx-dettaglio-anagrafica',
  templateUrl: './dettaglio-anagrafica.component.html',
  styleUrls: ['./dettaglio-anagrafica.component.scss']
})
export class DettaglioAnagraficaComponent implements OnInit {

  anagraficaForm: FormGroup;  // Definizione della variabile formGroup

  anagrafica: AnagraficaModel | null = null;
  id: number = 0;

  constructor(
    private anagraficaService: AnagraficaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAnagrafica();
  }

  loadAnagrafica() {
    this.anagraficaService.getAnagraficaById(this.id).subscribe(data => {
      this.anagrafica = data;
    });
  }

  deleteAnagrafica() {
    this.anagraficaService.deleteAnagrafica(this.id).subscribe(() => {
      this.router.navigate(['/elenco-anagrafiche']);
    });
  }

  editAnagrafica() {
    this.router.navigate([`/modifica-anagrafica/${this.id}`]);
  }
}
