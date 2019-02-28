import { Pipe, PipeTransform } from '@angular/core';
import { Multa } from '../model/multa';

@Pipe({
  name: 'estadoMulta'
})
export class EstadoMultaPipe implements PipeTransform {

  transform( multas: Multa[] , isActiva: boolean): Multa[] {
    let aResul = multas.map(f=>f);
    if ( isActiva ){
      aResul = aResul.filter( f => f.fecha_baja === null );
    }else{
      aResul = aResul.filter( f => f.fecha_baja !== null );
    }
    return aResul;
  }

}
