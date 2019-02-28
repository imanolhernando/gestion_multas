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
  private multas : Multa[];

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
      this.multas = data.map( f => {
        return new Multa( f.id, f.fecha, f.coche.matricula, f.concepto, f.coche.modelo, f.coche.km, f.fecha_baja, f.importe);
      });

    },error=>{
      console.warn('Json listarMultas %o',error);
    }
  );
}//listarMultas

}
