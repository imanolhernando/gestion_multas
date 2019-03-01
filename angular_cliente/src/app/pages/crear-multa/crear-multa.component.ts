import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/model/coche';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-listar-multas',
  templateUrl: './crear-multa.component.html',
  styleUrls: ['./crear-multa.component.scss']
})
export class CrearMultaComponent implements OnInit {

  private coche: Coche;

  constructor(private vehiculoService: VehiculoService) { 
    
  }

  ngOnInit() {
  }

}
