import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CrearMultaComponent } from './pages/crear-multa/crear-multa.component';
import { AlertComponent } from './components/alert/alert.component';

import { HttpClientModule } from '@angular/common/http';
import { EstadoMultaPipe } from './pipes/estado-multa.pipe';
import { MultarComponent } from './pages/multar/multar.component';
import { BuscarPipe } from './pipes/buscar.pipe';
import { ObjetivosComponent } from './pages/objetivos/objetivos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    Error404Component,
    PrincipalComponent,
    CrearMultaComponent,
    AlertComponent,
    EstadoMultaPipe,
    MultarComponent,
    BuscarPipe,
    ObjetivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
