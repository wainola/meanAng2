import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MainPageComponent } from './dashboardComps/main-page.component';
import { DetallesComponent } from './dashboardComps/detalles.component';
import { TODOComponent } from './dashboardComps/todo.component';
import { ClasesComponent } from './dashboardComps/clases.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) { }

    // OJO CON BORRAR ESTE METODO PUES NO SE ESTA USANDO.
  colapsado:string = "toggled";
    collapsed(){
        if(this.colapsado === ""){
            this.colapsado = "toggled";
        }
        else if(this.colapsado === "toggled"){
            this.colapsado = "";
        }
    }
    irHacia(par1){
      console.log(par1.target.textContent.toLowerCase());
      this.router.navigate([par1.target.textContent.toLowerCase()], {relativeTo: this.route});
    }
}
export const subRutas:Routes = [
  {path: "", redirectTo: "main", pathMatch: "full"},
  {path: "main", component: MainPageComponent},
  {path: "detalles", component: DetallesComponent},
  {path: "todo", component: TODOComponent},
  {path: "clases", component: ClasesComponent}
];

