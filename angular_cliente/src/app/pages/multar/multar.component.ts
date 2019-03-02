import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Alert } from 'src/app/model/alert';
import { Coche } from 'src/app/model/coche';
import { AutorizacionService } from 'src/app/services/autorizacion.service';



@Component({
  selector: 'app-multar',
  templateUrl: './multar.component.html',
  styleUrls: ['./multar.component.scss']
})
export class MultarComponent implements OnInit {


  formularioBuscarMatricula: FormGroup;
  alert: Alert;
  coche:Coche;

  constructor(
     private vehiculoService: VehiculoService,
     private formBuilder: FormBuilder,
    private router: Router,
    private autorizacionService: AutorizacionService) {
      this.crearFormularioMatricula();
      this.alert = new Alert('');
  }

  ngOnInit() {

  }

  crearFormularioMatricula(){
    console.trace('MultarComponent crearFormulario');
    this.formularioBuscarMatricula = this.formBuilder.group({
      matriculaBuscar: [
                '',
                [Validators.required, Validators.minLength(6), Validators.maxLength(10)]
              ]
    });

  }// crearFormulario

  obtenerVehiculo(){
    console.trace('obtenerVehiculo');
    let matricula = this.formularioBuscarMatricula.controls.matriculaBuscar.value;
    console.debug('Matricula: %s',matricula);
    this.vehiculoService.getVehiculoByMatricula(matricula).subscribe(
      data=>{
        console.warn('Json obtenerVehiculo %o',data);
       this.coche = data;
       this.autorizacionService.coche = this.coche;
       this.router.navigate(['/crear-multa']);

      },error=>{
        console.warn('Json obtenerVehiculo %o',error);
        this.alert = new Alert(`${matricula} no existe.`);
      }
    );
  }


}
