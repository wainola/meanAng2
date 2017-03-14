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
    console.log("El usuario es: " + usuario);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // PARA EFECTOS DE DEPLOY ESTE NO ES LA URL QUE USAREMOS PARA HACER LA LLAMADA A LA BASE DE DATOS.
    // DESCOMENTAR PARA USAR LOCALMENTE.
    //return this.http.post('http://localhost:3000/usuarios/registroPlataforma', usuario, {headers: headers})
    // LLAMADA A LA API EN EL DEPLOY.
    return this.http.post('usuarios/registroPlataforma', usuario, {headers: headers})
    .map(res => res.json());
  }
  autenticacionUsuario(usuario){
    console.log("Flag autenticacion!");
    console.log(`
    ${usuario.usuario}
    ${usuario.password}
    `)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // trabajamos con observadores desde aqui.
    // PARA EFECTOS DE DEPLOY ESTE NO ES LA URL QUE USAREMOS PARA HACER LA LLAMADA A LA BASE DE DATOS.
    // DESCOMENTAR PARA USAR LOCALMENTE.
    //return this.http.post('http://localhost:3000/usuarios/autenticacion', usuario, {headers: headers})
    // LLAMADA A LA API EN EL DEPLOY.
    return this.http.post('usuarios/autenticacion', usuario, {headers: headers})
      .map(res => res.json());
  }
  guardaDatosUsuario(token, usuario){
    localStorage.setItem('id_token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.tokenAutenticacion = token;
    this.usuario = usuario;
  }
  cierreSesion(){
    this.tokenAutenticacion = null;
    this.usuario = null;
    localStorage.clear();
  }
  sesionIniciada(){
    //chequea si JWT existe en el localStorage. Si existe, chequea si esta expirado o no.
    return tokenNotExpired();
  }
}
