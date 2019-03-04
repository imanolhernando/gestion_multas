import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';
import { Multa } from 'src/app/model/multa';
import { Agente } from 'src/app/model/agente';
import { Alert } from 'src/app/model/alert';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  private agenteLogeado: Agente;
  private multas : Multa[];
  isActiva: boolean;
  alert: Alert;
  

  constructor(
    private autorizacionService: AutorizacionService,
    private router: Router) {
      this.isActiva = true;
      this.agenteLogeado = new Agente();
      this.alert = new Alert('');
      this.multas = [];
     }

  ngOnInit() {
    this.listarMultas();
  }


listarMultas(){
  console.trace('listarMultas ');
  this.agenteLogeado =  this.autorizacionService.getAgente();
  this.autorizacionService.getMultas( this.agenteLogeado.id).subscribe(
    data=>{
      console.warn('Json listarMultas %o',data);
      this.router.navigate(['/principal']);
      this.multas = data.map( f => {
        return new Multa( f.id, f.fecha, f.coche.matricula, f.concepto, f.coche.modelo, f.coche.km, f.fecha_baja, f.importe);
      });

    },error=>{
      console.warn('Json listarMultas %o',error);
    }
  );
}//listarMultas

cambiarEstado( value: boolean){
  this.isActiva = value;
  console.debug('click cambiarEstado ' + this.isActiva);
}

}
