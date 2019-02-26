package com.ipartek.formacion.dgt.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;

import com.ipartek.formacion.dgt.daos.AgenteDAO;
import com.ipartek.formacion.dgt.daos.MultaDAO;
import com.ipartek.formacion.dgt.pojos.Agente;
import com.ipartek.formacion.dgt.pojos.Multa;
import com.ipartek.formacion.dgt.service.AgenteService;


public class AgenteServiceImpl implements AgenteService{
	
	private final static Logger LOG = Logger.getLogger(AgenteServiceImpl.class);

	private static AgenteServiceImpl INSTANCE = null;
	
	static AgenteDAO agenteDAO;
	static MultaDAO multaDAO;
	
	private ValidatorFactory factory;
	private Validator validator;

	
	
	private AgenteServiceImpl(AgenteDAO agenteDAO) {
		super();
		AgenteServiceImpl.agenteDAO = AgenteDAO.getInstance();
		AgenteServiceImpl.multaDAO = MultaDAO.getInstance();
		factory  = Validation.buildDefaultValidatorFactory();
    	validator  = factory.getValidator();
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

	@Override
	public Boolean crear(Multa multa, Agente agente) throws SQLException{
		boolean isCreado = false;
		return isCreado = multaDAO.insert(multa, agente);
		
	}
		

}
