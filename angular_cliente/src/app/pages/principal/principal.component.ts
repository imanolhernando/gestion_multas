import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';
import { Multa } from 'src/app/model/multa';
import { Agente } from 'src/app/model/agente';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  private agenteLogeado: Agente;

multas:Multa[];
  constructor(
    private autorizacionService: AutorizacionService,
    private router: Router) { }

  ngOnInit() {
    this.listarMultas();
  }


listarMultas(){
  console.trace('listarMultas ');
  this.autorizacionService.getMultas(this.autorizacionService.agenteLogeado.id).subscribe(
    data=>{
      console.warn('Json listarMultas %o',data);
      this.router.navigate(['/principal']);
      return this.multas = data;

    },error=>{
      console.warn('Json listarMultas %o',error);
    }
  );
}//listarMultas

}
