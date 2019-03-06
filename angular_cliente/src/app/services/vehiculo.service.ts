import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agente } from '../model/agente';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private endpoint ='http://localhost:8080/imanol-wsrest/api/vehiculo/';

  constructor(private httpClient: HttpClient) {
    console.trace('VehiculoService constructor');
  }


  getVehiculoByMatricula(matricula:string): Observable<any>{
    let url = this.endpoint + `${matricula}`;
    console.trace(`VehiculoService getVehiculoByMatricula url: ${url}`);
    return this.httpClient.get(url);
  }


}
