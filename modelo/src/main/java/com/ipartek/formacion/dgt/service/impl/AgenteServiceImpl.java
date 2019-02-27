package com.ipartek.formacion.dgt.service.impl;

import java.text.ParseException;
import java.util.ArrayList;

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


public class AgenteServiceImpl implements AgenteService{
	
	private final static Logger LOG = Logger.getLogger(AgenteServiceImpl.class);
	
	//primero Instance siempre lo devolvera
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
	public ArrayList<Multa> obtenerMultas(int idAgente) {
		
		return agenteDAO.getAllMultasByAgenteId(idAgente);
	}

	
	//TODO cambiar a parametros necesarios no obejto 
	@Override
	public Multa multar(int idCoche, int idAgente, String concepto, float importe) throws Exception{
		boolean isCreado = false;
		Agente agente = new Agente();
		Multa multa = new Multa();
		Coche coche = new Coche();
		
		try {
			coche.setId((long)idCoche);
			agente.setId((long) idAgente); 
			multa.setConcepto(concepto);
			multa.setImporte(importe);
			multa.setCoche(coche);
		}catch(Exception e) {
			LOG.debug(e);
			
		}
		
		
		isCreado = multaDAO.insert(multa, agente);
		if(isCreado==true) {
			 return multa;
		}else {
			return null;
		}
	}

	@Override
	public Agente existe( String numeroPlaca, String password) {
		//TODO validaciones
		int placa=-1;
		Agente a;
		try {
			a = new Agente();
			placa = Integer.parseInt(numeroPlaca);
			
		}catch(Exception e){
			LOG.debug(e);
		}
			return agenteDAO.login(placa, password);
		
		
		
	}
		

}
