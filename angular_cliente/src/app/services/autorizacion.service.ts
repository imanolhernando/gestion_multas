import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agente } from '../model/agente';
import { Alert } from '../model/alert';
@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {


  private storage = window.sessionStorage;
  private _agenteLogeado: Agente;
  endpoint ='http://localhost:8080/imanol-wsrest/api/';
  private _alert: Alert;




  constructor(
    private httpClient: HttpClient
    ) {
    console.trace('AutorizacionService canActivate');
    this._agenteLogeado = new Agente();

    this.alert =new Alert("");
  }
  public get alert(): Alert {
    return this._alert;
  }
  public set alert(value: Alert) {
    this._alert = value;
  }


  public get agenteLogeado(): Agente {
    return this._agenteLogeado;
  }
  public set agenteLogeado(value: Agente) {
    this._agenteLogeado = value;
  }

  public isLogged(): boolean {
    if ( this.storage.getItem('isLogged') === "true" ){
      return true;
    }else{
      return false;
    }

  }
  public setLogged(value: boolean) {
    console.debug('Hacemos setter de _isLogged y guardar en sessionStorage %o', this.storage);
    this.storage.setItem('isLogged', 'true' );

  }

  public saveAgente( agente: Agente ){
    this.storage.setItem('agente',  JSON.stringify(agente));
  }

  public getAgente(): Agente{
    let agenteString = this.storage.getItem('agente');
    if( agenteString ){
      return JSON.parse(agenteString);
    }else{
      return undefined;
    }

  }

  /**
   * metodo para llamar al servicio rest de para validar el acceso
   * @param usuario
   * @param password
   */
  loggin(usuario: string, password: string): Observable<any>{
    let url = this.endpoint + `agente/login/${usuario}/${password}`;
    console.trace(`AutorizacionService loggin url: ${url}`);
    return this.httpClient.get(url);

  }
  /**
   * Cierra la session del usuario llamando al backoffice
   */
  logout(){
    //TODO llamar Servicio Rest
    //this._isLogged = false;
    this.storage.clear();
    this._agenteLogeado=null;
  }











}
