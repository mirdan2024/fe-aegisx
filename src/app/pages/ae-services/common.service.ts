import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = 'https://api.example.com';  // Inserisci l'URL giusto per l'API

  constructor(private http: HttpClient) { }

  getComuni(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comuni`);
  }

  getPaesi(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/paesi`);
  }

  getStati(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stati`);
  }
}
