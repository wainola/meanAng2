import { Component } from '@angular/core';
// modulo para establecer las rutas.
import { RouterModule, Routes } from '@angular/router';
// componentes.
import { HomeComponent } from './componentes/home.component';
import { RegistroComponent } from './componentes/registro.component';
import { DashboardComponent } from './componentes/dashboard.component';
import { LoginComponent } from './componentes/login.component';
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
  {path: "dashboard", component: DashboardComponent, canActivate:[AuthGuardia]},
  {path: "login", component: LoginComponent}
]
