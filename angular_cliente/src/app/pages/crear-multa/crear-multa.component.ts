import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/model/coche';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MultaPost } from 'src/app/model/multa-post';
import { Alert } from 'src/app/model/alert';
import { Agente } from 'src/app/model/agente';

@Component({
  selector: 'app-listar-multas',
  templateUrl: './crear-multa.component.html',
  styleUrls: ['./crear-multa.component.scss']
})
export class CrearMultaComponent implements OnInit {

  private coche: Coche;
  formNuevaMulta: FormGroup;
  alert: Alert;
  private agenteLogeado: Agente;

  constructor(
    private vehiculoService: VehiculoService,
    private autorizacionService: AutorizacionService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
    this.coche =  this.autorizacionService.coche;
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
                [Validators.required, Validators.min(10), Validators.max(999)]
              ],
      concepto : [
              '',
              [Validators.required, Validators.minLength(15), Validators.maxLength(255)]
      ]
    });

  }// crearFormulario


  nuevaMulta() {
    console.log('CrearMultaComponent nuevaMulta %o', this.formNuevaMulta.value);

    let multa = new MultaPost(this.formNuevaMulta.value.concepto, this.formNuevaMulta.value.importe);
    this.agenteLogeado =  this.autorizacionService.getAgente();
    this.autorizacionService.postMulta(multa, this.agenteLogeado.id).subscribe(
      result => {
        console.log('CrearMultaComponent new %o', result);
        this.alert = new Alert('Multa creada con exito',Alert.SUCCESS);
       this.router.navigate(['/principal']);
      },
      error => {
        this.alert = new Alert('Error, no se ha podido crear la multa ',Alert.DANGER);
        console.error(error);
      }
    );
  }
}
