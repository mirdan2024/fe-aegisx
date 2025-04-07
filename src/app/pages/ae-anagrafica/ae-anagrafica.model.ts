// src/app/views/anagrafica/anagrafica.model.ts

export interface AnagraficaModel {
  tipo: string;
  cognome: string;
  nome: string;
  sesso: string;
  codice_fiscale: string;
  partita_iva: string;
  telefono: string;
  email: string;
  email_pec: string;
  data_nascita: string;
  comune_nascita: string;
  stato_nascita: string;
  residenza: {
    toponimo: string;
    indirizzo: string;
    num_civico: string;
    codice_comune: string;
    comune_estero: string;
    CAP: string;
    paese: string;
  };
  domicilio: {
    toponimo: string;
    indirizzo: string;
    num_civico: string;
    codice_comune: string;
    comune_estero: string;
    CAP: string;
    paese: string;
  };
}
