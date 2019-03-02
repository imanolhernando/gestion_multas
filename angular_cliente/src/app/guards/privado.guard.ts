import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../services/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class PrivadoGuard implements CanActivate {

  constructor(
    private autorizacionService: AutorizacionService,
    private router: Router
  ){
    console.trace('PrivadoGuard constructor');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.trace('PrivadoGuard canActivate');
    console.warn(this.autorizacionService.isLogged());

    if ( this.autorizacionService.isLogged()){
      console.debug(' estamos autorizados');
      return true;

    }else{
      console.warn(' NO estamos autorizados');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
