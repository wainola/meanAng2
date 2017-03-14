import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// modulo para establecer las rutas.
import { RouterModule, Routes } from '@angular/router';

// flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// componentes.
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home.component';
import { RegistroComponent } from './componentes/registro.component';
import { NavBarComponent } from './componentes/nav-bar.component';
import { DashboardComponent } from './componentes/dashboard.component';
import { LoginComponent } from './componentes/login.component';

// importacion de servicios.
import { ValidacionService } from './servicios/validacion.service';
import { AuthService } from './servicios/auth.service';
import { AuthGuardia } from './guardias/auth.guard';

// rutas.
import { rutas } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rutas),
    FlashMessagesModule,
    ReactiveFormsModule
  ],
  // aca añadimos los servicios que generamos.
  providers: [
    ValidacionService,
    AuthService,
    AuthGuardia
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
