import { Component, OnInit, AfterContentInit, AfterViewInit, DoCheck} from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { InfoDetallesService } from '../../servicios/informacion.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: []
})
export class DetallesComponent extends MainPageComponent implements OnInit, AfterContentInit, AfterViewInit, DoCheck {
  
  public usuario:Usuario;
  
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
  constructor(http: Http, router: Router, ruta: ActivatedRoute, servicioInfo: InfoDetallesService){
    super(http, router, ruta, servicioInfo);
  }
  retornarMain(){
    this.router.navigate(['../main'], {relativeTo:this.ruta});
  }
}
