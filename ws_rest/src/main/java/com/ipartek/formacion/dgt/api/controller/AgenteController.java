package com.ipartek.formacion.dgt.api.controller;

import java.util.ArrayList;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.formacion.dgt.pojos.Multa;
import com.ipartek.formacion.dgt.service.AgenteService;
import com.ipartek.formacion.dgt.service.impl.AgenteServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/agente/")
@Api(tags = { "AGENTE" }, produces = "application/json", description = "Gestión de taller")
public class AgenteController {
	// LOG
	private final static Logger LOG = Logger.getLogger(AgenteController.class);

	private static AgenteService agenteService;



	public  AgenteController() {
		super();
		agenteService = AgenteServiceImpl.getInstance();

	}
	
	
	@ApiResponses({ @ApiResponse(code = 200, message = "Listado"), 
		@ApiResponse(code = 500, message = "Error interno"),
		@ApiResponse(code = 404, message = "Datos no encontrados") })
		@RequestMapping(value = { "{id}/multa" }, method = RequestMethod.GET)
		public ResponseEntity<ArrayList<Multa>> listarMultasAgente(@PathVariable int id) {
			ResponseEntity<ArrayList<Multa>> response = new ResponseEntity<ArrayList<Multa>>(
					HttpStatus.INTERNAL_SERVER_ERROR);
			ArrayList<Multa> multas = new ArrayList<Multa>();
			try {
				multas = (ArrayList<Multa>) agenteService.listarMultasAgente(id);
				if (multas.size() != 0) {
					response = new ResponseEntity<ArrayList<Multa>>(multas, HttpStatus.OK);
				} else {
					response = new ResponseEntity<ArrayList<Multa>>(HttpStatus.NOT_FOUND);
				}
			} catch (Exception e) {
				LOG.debug(e);
			}
			return response;
		}
	

	
	

	

	

}