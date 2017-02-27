import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Formulario } from './formulario-data';
import { ValidacionService } from '../servicios/validacion.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  // primero hacemos el formulario.
  formulario:FormGroup;
  arregloDatosFormulario: Formulario[] = [];
  // en el constructor inyectamos los servicios que usaremos.
  constructor(
    public fb:FormBuilder,
    private validacionServicio: ValidacionService,
    private router: Router,
    private flashMsg: FlashMessagesService,
    private http: Http
    ) { 
    this.formulario = fb.group({
      nombre: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      usuario: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      correo: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      direccion: [null, Validators.compose([Validators.required])]
    });
  }
  addDatos(){
    if(!this.validacionServicio.validacionEmail(this.formulario.value.correo)){
      this.flashMsg.show('Ingrese un correo valido!', {cssClass: 'alert-danger', timeout: 3000});
    }
    console.log(this.formulario.value);
    // enviamos los datos al servicio de auth.
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    this.http.post(
      'http://localhost:3000/usuarios/registroPlataforma', 
      this.formulario.value,
      options
    ).map(res => res.json())
    .subscribe(data => {
      if(data.success){
        console.log(data);
        this.flashMsg.show('Registrado con exito', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMsg.show('Hubo un error en su registro', {cssClass:'alert-warning', timeout: 3000})
        this.router.navigate(['/home']);
      }
    });
    this.formulario.reset();
  }

  ngOnInit() {
  }

}
