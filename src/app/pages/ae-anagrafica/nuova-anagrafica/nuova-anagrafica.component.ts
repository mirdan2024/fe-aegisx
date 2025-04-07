import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnagraficaService } from '../../ae-services/ae-anagrafica.service';
import { CommonService } from '../../ae-services/common.service';  // Servizio per caricare i comuni e paesi

@Component({
  selector: 'ngx-nuova-anagrafica',
  templateUrl: './nuova-anagrafica.component.html',
  styleUrls: ['./nuova-anagrafica.component.scss']
})
export class NuovaAnagraficaComponent implements OnInit {

  anagraficaForm: FormGroup;
  loading = false;
  comuniNascita: any[] = [];
  statiNascita: any[] = [];
  comuni: any[] = [];
  paesi: any[] = [];

  constructor(
    private fb: FormBuilder,
    private anagraficaService: AnagraficaService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    // Inizializza il form con tutte le validazioni necessarie
    this.anagraficaForm = this.fb.group({
      tipo: ['', Validators.required],
      cognome: ['', Validators.required],
      nome: ['', Validators.required],
      sesso: ['', Validators.required],
      codice_fiscale: ['', Validators.required],
      partita_iva: [''],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
      email_pec: [''],
      data_nascita: ['', Validators.required],
      comune_nascita: ['', Validators.required],
      stato_nascita: ['', Validators.required],
      residenza_toponimo: ['', Validators.required],
      residenza_indirizzo: ['', Validators.required],
      residenza_num_civico: ['', Validators.required],
      residenza_comune: ['', Validators.required],
      residenza_cap: ['', Validators.required],
      domicilio_toponimo: ['', Validators.required],
      domicilio_indirizzo: ['', Validators.required],
      domicilio_num_civico: ['', Validators.required],
      domicilio_comune: ['', Validators.required],
      domicilio_cap: ['', Validators.required]
    });

    // Carica i dati per i campi a discesa (comuni, stati, paesi)
    this.loadData();
  }

  // Funzione per caricare i dati dai servizi
  loadData(): void {
    this.loading = true;

    // Carica i comuni di nascita
    this.commonService.getComuni().subscribe(
      (comuni) => {
        this.comuniNascita = comuni;
        this.comuni = comuni; // Riutilizza per i campi di residenza e domicilio
      },
      (error) => {
        console.error('Errore nel caricamento dei comuni', error);
        this.loading = false;
      }
    );

    // Carica i paesi
    this.commonService.getPaesi().subscribe(
      (paesi) => {
        this.paesi = paesi;
      },
      (error) => {
        console.error('Errore nel caricamento dei paesi', error);
        this.loading = false;
      }
    );

    // Carica gli stati di nascita
    this.commonService.getStati().subscribe(
      (stati) => {
        this.statiNascita = stati;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nel caricamento degli stati', error);
        this.loading = false;
      }
    );
  }

  // Funzione per inviare il form e salvare l'anagrafica
  saveAnagrafica(): void {
    if (this.anagraficaForm.valid) {
      this.loading = true;
      this.anagraficaService.createAnagrafica(this.anagraficaForm.value).subscribe(
        (response) => {
          console.log('Anagrafica salvata con successo', response);
          // Aggiungi qui una notifica di successo o redireziona l'utente
          this.loading = false;
        },
        (error) => {
          console.error('Errore durante il salvataggio dell\'anagrafica', error);
          // Aggiungi qui una notifica di errore
          this.loading = false;
        }
      );
    } else {
      console.log('Form non valido');
    }
  }
}
