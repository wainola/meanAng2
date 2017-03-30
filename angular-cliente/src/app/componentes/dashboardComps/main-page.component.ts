import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit{
  private dataApi:any;

  constructor(
    private http: Http
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
      console.log(this.dataApi[i].nombre);
    }
  }
}