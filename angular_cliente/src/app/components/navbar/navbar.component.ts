import { Component, OnInit } from '@angular/core';
import { Agente } from 'src/app/model/agente';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private agenteLogeado: Agente;

  constructor(
    private autorizacionService: AutorizacionService,
    private router: Router
    ) {
    this.agenteLogeado =  this.autorizacionService.getAgente();
  }

  ngOnInit() {

  }

  cerrarSesion(){
    this.autorizacionService.logout();
    this.agenteLogeado = null;
    this.router.navigate(['login']);
}
}
