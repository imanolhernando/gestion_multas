import { Pipe, PipeTransform } from '@angular/core';
import { Multa } from '../model/multa';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(multas: Multa[], searchText: string): any[] {
    
    let aResul = multas.map(f=>f);
  
     //2º filtrar por searchText, si esta definido y diferente vacio
     if ( searchText && searchText !== '' ){
      
    }

    return aResul;
 }


}
