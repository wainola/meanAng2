// generamos proteccion de las rutas.
// este se usa en las rutas que definimos para proteger.
// las rutas estan en el componente principal.
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable()
export class AuthGuardia implements CanActivate{
    constructor(
        private auth: AuthService,
        private router: Router
    ){}

    canActivate(){
        if(this.auth.sesionIniciada()){
            // si esto es true significa que estamos logeados.
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}