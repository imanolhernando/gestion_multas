import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListarMultasComponent } from './pages/listar-multas/listar-multas.component';
import { AlertComponent } from './components/alert/alert.component';

import { HttpClientModule } from '@angular/common/http';
import { EstadoMultaPipe } from './pipes/estado-multa.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    Error404Component,
    PrincipalComponent,
    ListarMultasComponent,
    AlertComponent,
    EstadoMultaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
