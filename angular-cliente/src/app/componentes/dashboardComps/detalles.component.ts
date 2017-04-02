import { Component, OnInit, AfterContentInit, AfterViewInit, DoCheck} from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { InfoDetallesService } from '../../servicios/informacion.service';
import { Usuario } from './Usuario';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: []
})
export class DetallesComponent extends MainPageComponent implements OnInit, AfterContentInit, AfterViewInit, DoCheck {
  
  public usuario:Usuario;
  private flag:boolean = false;
  private nuevoNombre:string;
  private nuevoUsuario:string;
  private nuevoCorreo:string;
  private nuevaDireccion:string;
  
  ngOnInit() {
    console.log('On init');
    this.usuario = JSON.parse(localStorage.getItem('dataUserTabla'));
  }
  ngDoCheck(){
    console.log('DoCheck');
    this.usuario = JSON.parse(localStorage.getItem('dataUserTabla'));
  }
  ngAfterContentInit(){
    console.log('After Content Init');
    this.usuario = JSON.parse(localStorage.getItem('dataUserTabla'));
  }
  ngAfterViewInit(){
    console.log('After View Init');
    this.usuario = JSON.parse(localStorage.getItem('dataUserTabla'));
  }
  constructor(http: Http, router: Router, ruta: ActivatedRoute, servicioInfo: InfoDetallesService, private flasgMsg: FlashMessagesService){
    super(http, router, ruta, servicioInfo);
  }
  retornarMain(){
    this.router.navigate(['../main'], {relativeTo:this.ruta});
  }

  editarDatosUnAlumno(){
    this.flag = true;
  }
  guardarDatosAlumno(){
    if(this.nuevoNombre === undefined || this.nuevoCorreo === undefined || this.nuevoUsuario === undefined || this.nuevaDireccion === undefined){
      this.flasgMsg.show("No lleno los campos correctamente", {cssClass: 'alert-danger', timeout: 2000});
    } else {
      // enviamos la informacion a traves de un metodo put.
    }
  }
  descartarCambios(){
    this.flag = false;
  }
}
