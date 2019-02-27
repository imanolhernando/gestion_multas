import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  private isLogged: boolean;

  endpoint ='http://localhost:8080/wsrest/api/';

  constructor( private httpClient: HttpClient ) {
    console.trace('AutorizacionService canActivate');
    this.isLogged = false;
  }


  /**
   * Nos dice si el usuario ha hecho login o no
   */
  estaLogeado(): boolean{
    return this.isLogged;
  }

  /**
   * metodo para llamar al servicio rest del backoffice
   * @param usuario
   * @param password
   */
  loggin(usuario: string, password: string): Observable<any>{
    this.endpoint = this.endpoint + "agente/login/";
    let url = this.endpoint + usuario +"/"+ password;
    console.trace("loggin url: " + url);
    this.isLogged = true;
    return this.httpClient.get(this.endpoint);

      //TODO llamar Servicio Rest
      //if ( usuario === 'admin' && password === 'admin'){
       // this.isLogged = true;
      //}else{
       // this.isLogged = false;
     // }
  }


  /**
   * Cierra la session del usuario llamando al backoffice
   */
  logout(){
    //TODO llamar Servicio Rest
    this.isLogged = false;
  }


}
