package com.ipartek.formacion.dgt.service.impl;

import java.util.ArrayList;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;

import com.ipartek.formacion.dgt.daos.AgenteDAO;
import com.ipartek.formacion.dgt.daos.MultaDAO;
import com.ipartek.formacion.dgt.pojos.Agente;
import com.ipartek.formacion.dgt.pojos.Coche;
import com.ipartek.formacion.dgt.pojos.Multa;
import com.ipartek.formacion.dgt.service.AgenteService;
import com.ipartek.formacion.dgt.service.exception.AgenteException;
import com.ipartek.formacion.dgt.service.exception.MultaException;

public class AgenteServiceImpl implements AgenteService {

	private final static Logger LOG = Logger.getLogger(AgenteServiceImpl.class);

	// primero Instance siempre lo devolvera
	private static AgenteServiceImpl INSTANCE = null;

	static AgenteDAO agenteDAO;
	static MultaDAO multaDAO;

	private ValidatorFactory factory;
	private Validator validator;

	// constructor privado
	private AgenteServiceImpl(AgenteDAO agenteDAO) {
		super();
		AgenteServiceImpl.agenteDAO = AgenteDAO.getInstance();
		AgenteServiceImpl.multaDAO = MultaDAO.getInstance();
		factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}

	public synchronized static AgenteServiceImpl getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new AgenteServiceImpl(agenteDAO);
		}
		return INSTANCE;
	}

	@Override
	public ArrayList<Multa> obtenerMultas(int idAgente) {

		return agenteDAO.getAllMultasByAgenteId(idAgente);
	}

	@Override
	public Multa multar(int idCoche, int idAgente, String concepto, float importe) throws Exception {
		boolean isCreado = false;
		Agente agente = new Agente();
		Multa multa = new Multa();
		Coche coche = new Coche();

		try {
			if(importe<0)
			coche.setId((long) idCoche);
			agente.setId((long) idAgente);
			multa.setConcepto(concepto);
			multa.setImporte(importe);
			multa.setCoche(coche);
		} catch (Exception e) {
			throw new MultaException(AgenteException.EXCEPTION_NUMBER);

		}
		Set<ConstraintViolation<Multa>> violations = validator.validate(multa);
		if (violations.isEmpty()) {
			isCreado = multaDAO.insert(multa, agente);
			if (isCreado == true) {
				return multa;
			} else {
				return null;
			}
		} else {
			throw new MultaException(MultaException.EXCEPTION_VIOLATIONS, violations);
		}

	}

	@Override
	public Agente existe(String numeroPlaca, String password) {

		int placa = -1;
		Agente a = null;
		try {
			a = new Agente();
			placa = Integer.parseInt(numeroPlaca);
			a.setPlaca(placa);
			a.setPassword(password);
			Set<ConstraintViolation<Agente>> violations = validator.validate(a);
			if (violations.isEmpty()) {
				a = agenteDAO.login(placa, password);
			} else {
				LOG.debug(new AgenteException(AgenteException.EXCEPTION_VIOLATIONS, violations));
				a = null;
			}

		} catch (NumberFormatException e) {
			LOG.debug(new AgenteException(AgenteException.EXCEPTION_NUMBER));
			a = null;

		}
		return a;

	}

}
