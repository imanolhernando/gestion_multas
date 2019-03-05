import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/model/coche';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MultaPost } from 'src/app/model/multa-post';
import { Alert } from 'src/app/model/alert';
import { Agente } from 'src/app/model/agente';
import { AgenteService } from 'src/app/services/agente.service';

@Component({
  selector: 'app-listar-multas',
  templateUrl: './crear-multa.component.html',
  styleUrls: ['./crear-multa.component.scss']
})
export class CrearMultaComponent implements OnInit {

   coche: Coche;
  formNuevaMulta: FormGroup;
  alert: Alert;
   agenteLogeado: Agente;

  constructor(
    private vehiculoService: VehiculoService,
    private autorizacionService: AutorizacionService,
    private agenteService: AgenteService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
    this.coche =  this.agenteService.coche;
    if(this.coche.id === -1){
      this.router.navigate(['/multar']);
    }
    this.crearFormulario();
    this.alert = new Alert('');
    this.agenteLogeado = new Agente();
  }

  ngOnInit  () {
  }

  crearFormulario(){
    console.trace('CrearMultaComponent crearFormulario');
    this.formNuevaMulta = this.formBuilder.group({
      importe: [
                '',
                [Validators.required, Validators.min(10), Validators.max(9999)]
              ],
      concepto : [
              '',
              [Validators.required, Validators.minLength(10), Validators.maxLength(255)]
      ]
    });

  }// crearFormulario


  nuevaMulta() {
    console.log('CrearMultaComponent nuevaMulta %o', this.formNuevaMulta.value);

    let multa = new MultaPost(this.formNuevaMulta.value.concepto, this.formNuevaMulta.value.importe);
    this.agenteLogeado =  this.autorizacionService.getAgente();
    this.agenteService.postMulta(multa, this.agenteLogeado.id).subscribe(
      result => {
        console.log('CrearMultaComponent new %o', result);
        this.agenteService.alert = new Alert('Multa creada con exito',Alert.INFO);
       this.router.navigate(['/principal']);
      },
      error => {
        this.alert = new Alert('Error, no se ha podido crear la multa ',Alert.DANGER);
        console.error(error);
      }
    );
  }
}
