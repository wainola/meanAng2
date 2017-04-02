import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { InfoDetallesService } from '../../servicios/informacion.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit{
  private data:any;
  private dataApi:any;
  public dataUnUsuario:any;

  constructor(
    public http: Http,
    public router: Router,
    public ruta: ActivatedRoute,
    public servicioInfo: InfoDetallesService
  ){}
  /**
   * Obtenemos datos guardados en la db.
   */
  ngOnInit(){
    this.getData();
  }
  getData(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let urlBase:string = "http://localhost:3000/usuarios/usuarios";
      this.http.get(urlBase, headers)
      .map(res => res.json())
      .subscribe(data => this.dataApi = data.msg);
  }
  clickData(){
    for(let i = 0; i < this.dataApi.length; i++){
      console.log(this.dataApi[i]._id);
    }
  }

  // Metodos para editar y eliminar la data.
  editarData(par1:any){
    this.data = par1;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let urlBase = `http://localhost:3000/usuarios/usuarios/${par1}`;
    this.http.get(urlBase, headers)
    .map(res => res.json())
    .subscribe(dataUsuarioObtenido => {
      this.dataUnUsuario = new Usuario(
        dataUsuarioObtenido.msg.nombre, 
        dataUsuarioObtenido.msg.correo,
        dataUsuarioObtenido.msg.usuario,
        dataUsuarioObtenido.msg.direccion,
        dataUsuarioObtenido.msg.asignaturasAlumno
        )
      localStorage.setItem('dataUserTabla', JSON.stringify(this.dataUnUsuario));
      this.router.navigate(['../detalles'], {relativeTo:this.ruta});
    });
  }
  eliminarData(){
    
  }


}