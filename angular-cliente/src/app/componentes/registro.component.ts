import {
  Component,
  Injectable,
  OnInit,
  ElementRef,
  EventEmitter,
  Inject
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidacionService } from '../servicios/validacion.service';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-registro',
  inputs : [],
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent {
  formulario:FormGroup;

  constructor(
    private fb: FormBuilder,
    private validacion: ValidacionService,
    private flashMsge: FlashMessagesService,
    private auth: AuthService,
    private router:Router,
  ) { 
    this.formulario = fb.group({
      nombre: [null, Validators.required],
      usuario: [null, Validators.required],
      direccion: [null, Validators.required],
      correo: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  addData(){
    if(!this.validacion.validacionEmail(this.formulario.value.correo)){
      this.flashMsge.show('Ingrese un correo valido!', {cssClass: 'alert-danger', timeout: 2000});
      this.formulario.reset();
    }
    if(!this.validacion.validacionData(this.formulario.value)){
      this.flashMsge.show("Algunos de los campos no estan llenos", {cssClass: "alert-danger", timeout: 2000});
      this.formulario.reset();
    }
    else{
      let usuario = {
        nombre: this.formulario.value.nombre,
        usuario: this.formulario.value.usuario,
        direccion: this.formulario.value.direccion,
        correo: this.formulario.value.correo,
        password: this.formulario.value.password
      };
      this.auth.usuarioRegistrado(usuario)
      .subscribe(data => {
        if(data.success){
          console.log(data);
          this.flashMsge.show("Registrado Exitosamente!", {cssClass: 'alert-success', timeout: 2000});
          this.router.navigate(['/login']);
        }else{
          console.log(data);
          this.flashMsge.show('Algo paso', {cssClass: 'alert-danger', timeout: 2000});
          this.router.navigate(['/register']);
        }
        
      }); 

      this.formulario.reset();
    }
  }
  
}
