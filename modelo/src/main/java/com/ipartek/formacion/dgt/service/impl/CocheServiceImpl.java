package com.ipartek.formacion.dgt.service.impl;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;

import com.ipartek.formacion.dgt.daos.CocheDAO;
import com.ipartek.formacion.dgt.pojos.Coche;
import com.ipartek.formacion.dgt.service.CocheService;

public class CocheServiceImpl implements CocheService{


	private final static Logger LOG = Logger.getLogger(AgenteServiceImpl.class);

	private static CocheServiceImpl INSTANCE = null;
	
	static CocheDAO cocheDAO;
	
	private ValidatorFactory factory;
	private Validator validator;

	
	
	private CocheServiceImpl(CocheDAO cocheDAO) {
		super();
		CocheServiceImpl.cocheDAO = CocheDAO.getInstance();
		factory  = Validation.buildDefaultValidatorFactory();
    	validator  = factory.getValidator();
	}

	public synchronized static CocheServiceImpl getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new CocheServiceImpl(cocheDAO);
		}
		return INSTANCE;
	}

	@Override
	public Coche ObtenerCoches(String matricula) {
		// TODO Verificaciones validaciones
		return cocheDAO.getMatricula(matricula);
		
	}
	


}
