package com.ipartek.formacion.dgt.service.impl;

import java.sql.SQLException;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;

import com.ipartek.formacion.dgt.daos.CocheDAO;
import com.ipartek.formacion.dgt.daos.MultaDAO;
import com.ipartek.formacion.dgt.pojos.Multa;
import com.ipartek.formacion.dgt.service.MultaService;

public class MultaServiceImpl implements MultaService{
	
	private final static Logger LOG = Logger.getLogger(MultaServiceImpl.class);
	private static MultaServiceImpl INSTANCE = null;
	static MultaDAO multaDAO;
	private ValidatorFactory factory;
	private Validator validator;
	
	private MultaServiceImpl(MultaDAO multaDAO) {
		super();
		MultaServiceImpl.multaDAO = MultaDAO.getInstance();
		factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}

	public synchronized static MultaServiceImpl getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new MultaServiceImpl(multaDAO);
		}
		return INSTANCE;
	}



	@Override
	public Boolean activar(long id) {
		boolean resul= false;
		Multa m = new Multa();
		 try {
			 m.setId(id);
			resul = multaDAO.activar(m);
		} catch (SQLException e) {
			LOG.debug(e);
		}
		return resul;
	}

	@Override
	public Boolean anular(long id) {
		boolean resul= false;
		Multa m = new Multa();
		 try {
			 m.setId(id);
			resul = multaDAO.update(m);
		} catch (SQLException e) {
			LOG.debug(e);
		}
		return resul;
	}

}
