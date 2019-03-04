package com.ipartek.formacion.dgt.service;

import com.ipartek.formacion.dgt.pojos.Multa;

public interface MultaService {

	/**
	 * Activa una multa anulada cambiando su fecha_baja a nulo
	 * @param m Recibe una Multa
	 * @return True si cambia False en caso contrario
	 */
	Boolean activar(long id);
	/**
	 * Anula una multa activa cambiando su fecha_baja a la fecha actual
	 * @param m Recibe una Multa
	 * @return True si cambia False en caso contrario
	 */
	Boolean anular(long id);
}
