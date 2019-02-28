import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agente } from '../model/agente';
@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  private _isLogged: boolean;
  private _agenteLogeado: Agente;
  
  public get agenteLogeado(): Agente {
    return this._agenteLogeado;
  }
  public set agenteLogeado(value: Agente) {
    this._agenteLogeado = value;
  }

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
    this._agenteLogeado = new Agente();
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
    return this.httpClient.get(url);

  }

  getMultas(id:number=2): Observable<any>{
    this.endpoint = this.endpoint + `/agente/${id}/multa`;
    let url = this.endpoint;
    console.trace(`AutorizacionService getMultas url: ${url}`);
    return this.httpClient.get(url);

  }


  /**
   * Cierra la session del usuario llamando al backoffice
   */
  logout(){
    //TODO llamar Servicio Rest
    this._isLogged = false;
  }


}
