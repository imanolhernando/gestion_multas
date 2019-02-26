package com.ipartek.formacion.dgt.service;

import java.sql.SQLException;
import java.util.List;

import com.ipartek.formacion.dgt.pojos.Agente;
import com.ipartek.formacion.dgt.pojos.Multa;

public interface AgenteService {
	
	List<Multa> listarMultasAgente(int idAgente);
	
	Boolean crear(Multa multa, Agente agente) throws SQLException;

}
