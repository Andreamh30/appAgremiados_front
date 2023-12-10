import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgremiadosService {
  URL: string = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getAgremiado(){
    return this.http.get<any>(`${this.URL}/agremiados`);
  }

  agregarAgremiado(newAgremiado: any) {
    return this.http.post<any>(`${this.URL}/newAgremiado`, newAgremiado);
  }
}
