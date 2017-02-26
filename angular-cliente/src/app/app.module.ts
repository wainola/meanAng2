import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// modulo para establecer las rutas.
import { RouterModule, Routes } from '@angular/router';
// flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// importacion de servicios.
import { ValidacionService } from './servicios/validacion.service';
import { AuthService } from './servicios/auth.service';

// estableciendo las rutas para cada componente de la pagina.
const appRutas: Routes = [
  // primer elemento es la pagina de inicio.
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRutas),
    FlashMessagesModule,
    ReactiveFormsModule
  ],
  // aca añadimos los servicios que generamos.
  providers: [
    ValidacionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
