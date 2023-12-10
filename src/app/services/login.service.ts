import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL = 'http://localhost:8000/api';
  constructor(private http:HttpClient) { }

  login(NUE: string, password: string) {
    // Realiza la solicitud POST al servidor para autenticar al usuario
    const data = { NUE, password };
    return this.http.post(`${this.URL}/login`, data);
  }

  //Guardar token en localStorage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  //Guardar datos del usuario en localStorage
  saveUser(NUE: any) {
    localStorage.setItem('user', JSON.stringify(NUE));
  }

}
