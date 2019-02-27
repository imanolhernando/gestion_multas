package com.ipartek.formacion.dgt.service;

import java.sql.SQLException;
import java.util.List;

import com.ipartek.formacion.dgt.pojos.Agente;
import com.ipartek.formacion.dgt.pojos.Multa;

public interface AgenteService {
	
	/**
	 * Todas las multas de un Agente
	 * @param idAgente
	 * @return listado, si no hay ninguna vacio, no null
	 */
	List<Multa> obtenerMultas(int idAgente);
	
	/**
	 * Multar un Vehiculo
	 * @param idCoche
	 * @param idAgente
	 * @param concepto
	 * @param importe
	 * @return
	 * @throws Exception si el concepto es null, el idAgente o idCoche no existen, importe < 0
	 */
	Multa multar( int idCoche, int idAgente, String concepto, float importe  ) throws Exception;;
	
	
	/**
	 * 	comprueba que exista el Agente en la bbdd
	 * @param numeroPlaca
	 * @param password
	 * @return Agente si existe, null si no existe
	 */
	Agente existe( String numeroPlaca, String password);

}
