import { Component, OnInit } from '@angular/core';
import { Agente } from 'src/app/model/agente';
import { AutorizacionService } from 'src/app/services/autorizacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private agenteLogeado: Agente;

  constructor(private autorizacionService: AutorizacionService) { 
     
  }

  ngOnInit() {
    this.agenteLogeado = this.autorizacionService.agenteLogeado;
  }

}
