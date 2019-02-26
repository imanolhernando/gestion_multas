package com.ipartek.formacion.dgt.service.impl;

import java.util.List;

import javax.validation.Validator;

import org.apache.log4j.Logger;

import com.ipartek.formacion.dgt.daos.AgenteDAO;
import com.ipartek.formacion.dgt.daos.CocheDAO;
import com.ipartek.formacion.dgt.pojos.Multa;
import com.ipartek.formacion.dgt.service.AgenteService;


public class AgenteServiceImpl implements AgenteService{
	
	private final static Logger LOG = Logger.getLogger(AgenteServiceImpl.class);

	private static AgenteServiceImpl INSTANCE = null;
	
	static AgenteDAO agenteDAO;
	
	private AgenteServiceImpl(AgenteDAO agenteDAO) {
		super();
		AgenteServiceImpl.agenteDAO = AgenteDAO.getInstance();
	}

	public synchronized static AgenteServiceImpl getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new AgenteServiceImpl(agenteDAO);
		}
		return INSTANCE;
	}
	
	@Override
	public List<Multa> listarMultasAgente(int idAgente) {
		
		return agenteDAO.getMultas(idAgente);
	}

}
