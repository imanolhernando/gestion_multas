package com.ipartek.formacion.dgt.service;

import java.util.List;

import com.ipartek.formacion.dgt.pojos.Coche;

public interface CocheService {
	/**
	 * Obtener un coche por su matricula
	 * @param matricula string matricula
	 * @return Coche si existe
	 */
	Coche ObtenerCoches(String matricula);
}
