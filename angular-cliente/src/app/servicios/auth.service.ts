import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  tokenAutenticacion:any;
  usuario:any;

  constructor(
    private http:Http
  ) {}

  usuarioRegistrado(usuario){
    console.log('Entre al registro'); // flag de verificacion.
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  }
  autenticacionUsuario(usuario){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // trabajamos con observadores desde aqui.
  }
}
