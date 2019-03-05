import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { Agente } from 'src/app/model/agente';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  alert: Alert;
  texto:string = environment.texto;

  private agenteLogeado: Agente;

  constructor(
    private autorizacionService: AutorizacionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    console.trace('LoginComponent constructor');
    this.crearFormulario();
    this.alert = new Alert('');
  }

  ngOnInit() {
    console.trace('LoginComponent ngOnInit');
  }

  crearFormulario(){
    console.trace('LoginComponent crearFormulario');
    this.formulario = this.formBuilder.group({
      placa: [
                '',
                [Validators.required, Validators.minLength(3), Validators.maxLength(150)]
              ],
      pass : [
              '',
              [Validators.required, Validators.minLength(3), Validators.maxLength(16)]
      ]
    });

  }// crearFormulario


  comprobar(){
    console.trace('click boton submit');
    let placa = this.formulario.controls.placa.value;
    let pass = this.formulario.controls.pass.value;
    console.debug('nombre: %s password: %s',placa , pass);
    this.autorizacionService.loggin(placa, pass).subscribe(
      data=>{
        console.warn('Json agente %o',data);
        console.info('Login correcto, tenemos permisos');
        this.autorizacionService.agenteLogeado =  new Agente( data.id, data.apellido, data.placa, data.departamento);
        this.autorizacionService.setLogged(true);
        this.autorizacionService.saveAgente(data);
        this.router.navigate(['/principal']);

      },error=>{
        console.warn('Json agente %o',error);
        this.autorizacionService.setLogged(false);
        console.warn('No tienes permisos');
        this.alert = new Alert('No tienes permisos');
      }
    );
}// comprobar



}
