import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  formulario: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private flasMsg: FlashMessagesService,
    private fb: FormBuilder
  ) { 
    this.formulario = fb.group({
      usuario: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onLogin(){
    const user = {
      usuario: this.formulario.value.usuario,
      password: this.formulario.value.password
    };
    console.log(`
    ${user.usuario}
    ${user.password}
    `);
    this.auth.autenticacionUsuario(user)
    .subscribe(data => {
      if(data.success){
        //generacion del servicio de autenticacion.
        console.log("Exito!");
        this.auth.guardaDatosUsuario(data.token, data.usuario);
        this.router.navigate(['/dashboard']);
      }
      else{
        console.log("No exito!");
        this.flasMsg.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/home']);
      }
    });
    this.formulario.reset();
  }
}
