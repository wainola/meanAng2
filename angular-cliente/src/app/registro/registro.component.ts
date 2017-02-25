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
    private flashMsg: FlashMessagesService
    ) { 
    this.formulario = fb.group({
      nombre: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      usuario: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      correo: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }
  addDatos(){
    if(!this.validacionServicio.validacionEmail(this.formulario.value.correo)){
      this.flashMsg.show('Ingrese un correo valido!', {cssClass: 'alert-danger', timeout: 3000});
    }
    // enviamos los datos al servicio de auth.
  }

  ngOnInit() {
  }

}
