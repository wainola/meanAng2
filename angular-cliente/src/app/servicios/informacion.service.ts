import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

let detallesUsuario:any = [];

@Injectable()
export class InfoDetallesService{
    private dataUsuario:any;
    
    constructor(
    private http: Http,
    private router: Router,
    private ruta: ActivatedRoute
    ){}

    detallesUsuario(idUsuario){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let urlBase = `http://localhost:3000/usuarios/usuarios/${idUsuario}`;
        this.http.get(urlBase, headers)
        .map(res => res.json())
        .subscribe(dataUsuario => console.log(dataUsuario.msg));
    }
    test(){
        console.log(detallesUsuario);
    }
}