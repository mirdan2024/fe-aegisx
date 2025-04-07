import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AnagraficaModel } from '../ae-anagrafica/ae-anagrafica.model';

@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {

  // Utilizzo di una variabile di ambiente per l'URL dell'API
  private apiUrl = 'https://api.example.com/anagrafiche';  // Sostituisci con il tuo endpoint API

  constructor(private http: HttpClient) { }

  // Ottieni tutte le anagrafiche
  getAnagrafiche(): Observable<AnagraficaModel[]> {
    return this.http.get<AnagraficaModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)  // Aggiungi la gestione degli errori
    );
  }

  // Ottieni una singola anagrafica per ID
  getAnagraficaById(id: number): Observable<AnagraficaModel> {
    return this.http.get<AnagraficaModel>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)  // Aggiungi la gestione degli errori
    );
  }

  // Crea una nuova anagrafica
  createAnagrafica(anagrafica: AnagraficaModel): Observable<AnagraficaModel> {
    return this.http.post<AnagraficaModel>(this.apiUrl, anagrafica).pipe(
      catchError(this.handleError)  // Aggiungi la gestione degli errori
    );
  }

  // Aggiorna una anagrafica esistente
  updateAnagrafica(id: number, anagrafica: AnagraficaModel): Observable<AnagraficaModel> {
    return this.http.put<AnagraficaModel>(`${this.apiUrl}/${id}`, anagrafica).pipe(
      catchError(this.handleError)  // Aggiungi la gestione degli errori
    );
  }

  // Elimina una anagrafica per ID
  deleteAnagrafica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)  // Aggiungi la gestione degli errori
    );
  }

  // Funzione di gestione degli errori
  private handleError(error: any) {
    let errorMessage = 'Si è verificato un errore';
    if (error.error instanceof ErrorEvent) {
      // Errore lato client
      errorMessage = `Errore client: ${error.error.message}`;
    } else {
      // Errore lato server
      errorMessage = `Errore server: ${error.status} - ${error.message}`;
    }
    // Mostra l'errore nella console o in una UI di errore
    console.error(errorMessage);
    return throwError(errorMessage);  // Rilancia l'errore per essere gestito da chi chiama
  }
}
