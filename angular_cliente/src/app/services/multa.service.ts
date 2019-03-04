import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultaService {

  private endpoint ='http://localhost:8080/wsrest/api/multa/';
  
  constructor(private httpClient: HttpClient) {
    console.trace('MultaService constructor');
  }

  activarMulta(id:number): Observable<any>{
    let url = this.endpoint + `activar/${id}`;
    console.trace(`MultaService activarMulta url: ${url}`);
    let body = {                    
      "id": id
    } 
    return this.httpClient.patch(url,body);
  }

  anularMulta(id:number): Observable<any>{
    let url = this.endpoint + `anular/${id}`;
    console.trace(`MultaService anularMulta url: ${url}`);
    let body = {                    
      "id": id
    } 
    return this.httpClient.patch(url,body);
  }


}
