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


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  // primero hacemos el formulario.
  formulario:FormGroup;
  constructor(public fb:FormBuilder) { 
    this.formulario = fb.group({
      nombre: [null, Validators.compose([Validators.required])],
      usuario: [null, Validators.compose([Validators.required])],
      correo: [null, Validators.compose([Validators.required])],
      contraseña: [null, Validators.compose([Validators.required])]
    });
  }
  addDatos(){
    
  }

  ngOnInit() {
  }

}
