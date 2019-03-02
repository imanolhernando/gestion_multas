import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agente } from '../model/agente';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private endpoint ='http://localhost:8080/wsrest/api/';

  constructor(private httpClient: HttpClient) {
    console.trace('CocheService canActivate');
  }


  getVehiculoByMatricula(matricula:string): Observable<any>{
    let url = this.endpoint + `vehiculo/${matricula}`;
    console.trace(`CocheService getCocheByMatricula url: ${url}`);
    return this.httpClient.get(url);
  }


}
