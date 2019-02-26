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

import com.ipartek.formacion.dgt.pojos.Coche;
import com.ipartek.formacion.dgt.pojos.Multa;
import com.ipartek.formacion.dgt.service.CocheService;
import com.ipartek.formacion.dgt.service.impl.CocheServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/coche/")
@Api(tags = { "COCHE" }, produces = "application/json", description = "Obtener coche por matricula")
public class CocheController {
	
	// LOG
		private final static Logger LOG = Logger.getLogger(AgenteController.class);

		private static CocheService cocheService;



		public  CocheController() {
			super();
			cocheService = CocheServiceImpl.getInstance();

		}
		
		@ApiResponses({ @ApiResponse(code = 200, message = "Listado"), 
			@ApiResponse(code = 500, message = "Error interno"),
			@ApiResponse(code = 404, message = "Datos no encontrados") })
			@RequestMapping(value = { "{matricula}" }, method = RequestMethod.GET)
			public ResponseEntity<Coche> ObtenerVehiculoMatricula(@PathVariable String matricula) {
				ResponseEntity<Coche> response = new ResponseEntity<Coche>(
						HttpStatus.INTERNAL_SERVER_ERROR);
				Coche c = new Coche();
				try {
					c = (Coche) cocheService.ObtenerCoches(matricula);
					if (c != null) {
						response = new ResponseEntity<Coche>(c, HttpStatus.OK);
					} else {
						response = new ResponseEntity<Coche>(HttpStatus.NOT_FOUND);
					}
				} catch (Exception e) {
					LOG.debug(e);
				}
				return response;
			}

}
