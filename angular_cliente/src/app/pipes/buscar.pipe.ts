import { Pipe, PipeTransform } from '@angular/core';
import { Multa } from '../model/multa';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(multas: Multa[], searchText: string): any[] {

      // conseguimos el mismo array pero sin que apunte a la misma posicion de memoria
    // no usar aResul = multas; 
    let aResul = multas.map(f=>f);
  
     if ( searchText && searchText !== '' ){
      aResul = aResul.filter( f => {
        let busqueda = f.matricula + f.modelo + f.concepto; 
        return busqueda.toLowerCase().includes(searchText);
       });
    }

    return aResul;
 }


}
