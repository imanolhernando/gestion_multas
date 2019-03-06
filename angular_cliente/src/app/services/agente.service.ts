import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coche } from '../model/coche';
import { MultaPost } from '../model/multa-post';
import { Alert } from '../model/alert';
@Injectable({
  providedIn: 'root'
})
export class AgenteService {

 private endpoint ='http://localhost:8080/imanol_wsrest/api/';
 private _coche: Coche;
 private _alert: Alert;

  constructor(
    private httpClient: HttpClient
  ) {
    this._coche = new Coche();
    this.alert =new Alert("");
  }
  public get alert(): Alert {
    return this._alert;
  }
  public set alert(value: Alert) {
    this._alert = value;
  }
  public get coche(): Coche {
    return this._coche;
  }
  public set coche(value: Coche) {
    this._coche = value;
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

  postMulta(multa:MultaPost, id:number):Observable<any>{
    let url = this.endpoint + `agente/${id}/multa`;
    console.trace(`AutorizacionService postMulta url: ${url} coche id ${this.coche.id}`);
    let body = {
                  "concepto": multa.concepto,
                  "importe": multa.importe,
                  "coche":  this.coche.id
                }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpClient.post( url, body , httpOptions );
  }


}
