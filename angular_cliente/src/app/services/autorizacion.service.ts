import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agente } from '../model/agente';
import { Coche } from '../model/coche';
import { MultaPost } from '../model/multa-post';
@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {


  private storage = window.sessionStorage;
  private _agenteLogeado: Agente;
  endpoint ='http://localhost:8080/wsrest/api/';

  private _coche: Coche;


  constructor(
    private httpClient: HttpClient
    ) {
    console.trace('AutorizacionService canActivate');
    this._agenteLogeado = new Agente();
    this._coche = new Coche();
  }


  public get coche(): Coche {
    return this._coche;
  }
  public set coche(value: Coche) {
    this._coche = value;
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
  /**
   * metod para obtener todas la multas de un agente
   * @param id identifacador del agente
   */
  getMultas(id:number): Observable<any>{
    let url = this.endpoint + `agente/${id}/multa`;
    console.trace(`AutorizacionService getMultas url: ${url}`);
    return this.httpClient.get(url);

  }

  postMulta(multa:MultaPost):Observable<any>{
    let url = this.endpoint + `agente/${this.storage.id}/multa`;
    console.trace(`AutorizacionService postMulta url: ${url} coche id ${this.coche.id}`);
    let body = {
                  "concepto": multa.concepto,
                  "importe": multa.importe,
                  "coche": {
                    "id": this.coche.id
                  }
                }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpClient.post( url, body , httpOptions );
  }









}
