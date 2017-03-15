import { Component } from '@angular/core';
// modulo para establecer las rutas.
import { RouterModule, Routes } from '@angular/router';
// componentes.
import { HomeComponent } from './componentes/home.component';
import { RegistroComponent } from './componentes/registro.component';
import { DashboardComponent } from './componentes/dashboard.component';
import { LoginComponent } from './componentes/login.component';
import { MainPageComponent } from './componentes/dashboardComps/main-page.component';
import { DetallesComponent } from './componentes/dashboardComps/detalles.component';
import { TODOComponent } from './componentes/dashboardComps/todo.component';
// importacion de servicio de proteccion de las rutas.
import { AuthGuardia } from './guardias/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
export const rutas:Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "register", component: RegistroComponent},
  {path: "dashboard", component: DashboardComponent, canActivate:[AuthGuardia], children: [
    {path: "", redirectTo: "main", pathMatch: "full"},
    {path: "main", component: MainPageComponent},
    {path: "detalles", component: DetallesComponent},
    {path: "todo", component: TODOComponent}
  ]},
  {path: "login", component: LoginComponent}
]
