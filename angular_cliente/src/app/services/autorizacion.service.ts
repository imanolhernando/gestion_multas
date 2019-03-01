import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agente } from '../model/agente';
@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  private _isLogged: boolean;
  private storage = window.sessionStorage;
  private _agenteLogeado: Agente;

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

  endpoint ='http://localhost:8080/wsrest/api/';

  constructor( private httpClient: HttpClient ) {
    console.trace('AutorizacionService canActivate');
    this._agenteLogeado = new Agente();
  }


  public saveAgente( agente: any ){
    this.storage.setItem('agente',  JSON.stringify(agente)); 
  }

  public getAgente(): any{

    let agenteString = this.storage.getItem('agente');
    if( agenteString ){    
      return JSON.parse(agenteString);
    }else{
      return undefined;
    }  

  }



  /**
   * metodo para llamar al servicio rest del backoffice
   * @param usuario
   * @param password
   */
  loggin(usuario: string, password: string): Observable<any>{
    let url = this.endpoint + `agente/login/${usuario}/${password}`;
    console.trace(`AutorizacionService loggin url: ${url}`);
    return this.httpClient.get(url);

  }

  getMultas(id:number=2): Observable<any>{
    let url = this.endpoint + `agente/${id}/multa`;
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
