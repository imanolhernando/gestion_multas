package com.ipartek.formacion.dgt.api.controller;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.formacion.dgt.pojos.Coche;
import com.ipartek.formacion.dgt.service.MultaService;
import com.ipartek.formacion.dgt.service.impl.MultaServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/multa/")
@Api(tags = { "Multa" }, produces = "application/json", description = "Activar o anular multa")
public class MultaController {

	// LOG
	private final static Logger LOG = Logger.getLogger(AgenteController.class);

	private static MultaService multaService;

	public MultaController() {
		super();
		multaService = MultaServiceImpl.getInstance();

	}

	@ApiResponses({ @ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 500, message = "Error interno"),
			@ApiResponse(code = 404, message = "Datos no encontrados") })
	@RequestMapping(value = { "activar/{idMulta}" }, method = RequestMethod.PATCH)
	public ResponseEntity<Boolean> activar(@PathVariable long idMulta) {
		ResponseEntity<Boolean> response = new ResponseEntity<Boolean>(HttpStatus.INTERNAL_SERVER_ERROR);
		Boolean resultado = false;
		try {
			resultado =  multaService.activar(idMulta);
			if (resultado == true) {
				response = new ResponseEntity<Boolean>( HttpStatus.OK);
			} else {
				response = new ResponseEntity<Boolean>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			LOG.fatal(e);
		}
		return response;
	}
	
	
	@ApiResponses({ @ApiResponse(code = 200, message = "OK"), @ApiResponse(code = 500, message = "Error interno"),
		@ApiResponse(code = 404, message = "Datos no encontrados") })
@RequestMapping(value = { "anular/{idMulta}" }, method = RequestMethod.PATCH)
public ResponseEntity<Boolean> anular(@PathVariable long idMulta) {
	ResponseEntity<Boolean> response = new ResponseEntity<Boolean>(HttpStatus.INTERNAL_SERVER_ERROR);
	Boolean resultado = false;
	try {
		resultado =  multaService.anular(idMulta);
		if (resultado == true) {
			response = new ResponseEntity<Boolean>( HttpStatus.OK);
		} else {
			response = new ResponseEntity<Boolean>(HttpStatus.NOT_FOUND);
		}
	} catch (Exception e) {
		LOG.fatal(e);
	}
	return response;
}
	
	



}
