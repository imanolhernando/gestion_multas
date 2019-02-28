package com.ipartek.formacion.dgt.service.impl;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;

import com.ipartek.formacion.dgt.daos.CocheDAO;
import com.ipartek.formacion.dgt.pojos.Coche;
import com.ipartek.formacion.dgt.service.CocheService;
import com.ipartek.formacion.dgt.service.exception.CocheException;

public class CocheServiceImpl implements CocheService {

	private final static Logger LOG = Logger.getLogger(AgenteServiceImpl.class);

	private static CocheServiceImpl INSTANCE = null;

	static CocheDAO cocheDAO;

	private ValidatorFactory factory;
	private Validator validator;

	private CocheServiceImpl(CocheDAO cocheDAO) {
		super();
		CocheServiceImpl.cocheDAO = CocheDAO.getInstance();
		factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}

	public synchronized static CocheServiceImpl getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new CocheServiceImpl(cocheDAO);
		}
		return INSTANCE;
	}

	@Override
	public Coche ObtenerCoches(String matricula) throws Exception {
		// TODO Verificaciones validaciones
		boolean isMatricula = false;
		Coche c = null;

		try {
			c = new Coche();
			c.setMatricula(matricula);
			Set<ConstraintViolation<Coche>> violations = validator.validate(c);
			if (violations.isEmpty()) {
				c = cocheDAO.getMatricula(matricula);
			} else {
				throw new CocheException(CocheException.EXCEPTION_VIOLATIONS, violations);
			}
		} catch (Exception e) {
			LOG.error(e);
		}
		return c;
	}

}
