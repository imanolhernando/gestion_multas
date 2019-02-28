import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  private _isLogged: boolean;

  public get isLogged(): boolean {
    return this._isLogged;
  }
  public set isLogged(value: boolean) {
    this._isLogged = value;
  }

  endpoint ='http://localhost:8080/wsrest/api/';

  constructor( private httpClient: HttpClient ) {
    console.trace('AutorizacionService canActivate');
    this.isLogged = false;
  }


  
  /**
   * metodo para llamar al servicio rest del backoffice
   * @param usuario
   * @param password
   */
  loggin(usuario: string, password: string): Observable<any>{
    this.endpoint = this.endpoint + "agente/login/";
    let url = this.endpoint + usuario +"/"+ password;
    console.trace(`AutorizacionService loggin url: ${url}`);
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
