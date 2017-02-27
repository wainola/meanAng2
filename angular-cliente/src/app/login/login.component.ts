import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  // propiedades que recibiremos del registro.
  usuario:string;
  password:string;

  constructor(
    private flashMsge:FlashMessagesService,
    private router:Router,
    private auth:AuthService
  ){}

  enInicioDeSesion(){
    const dataUser = {
      usuario: this.usuario,
      password: this.password,
    }
    this.auth.autenticacionUsuario(dataUser)
    .subscribe(
      data => {
        if(data.success){
          console.log(data);
        } else {
          console.log('No exitoso');
        }
      }
    )
    // reseteo de campos.
    this.usuario = "";
    this.password = "";
  }
  

}
