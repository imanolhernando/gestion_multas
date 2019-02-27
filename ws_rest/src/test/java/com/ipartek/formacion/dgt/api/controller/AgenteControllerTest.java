package com.ipartek.formacion.dgt.api.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.Test;
import org.springframework.http.ResponseEntity;

import com.ipartek.formacion.dgt.pojos.Agente;

public class AgenteControllerTest {

	@Test
	public void test() {
		AgenteController aController = new AgenteController();
		ResponseEntity<Agente> response = aController.loginAgente("222", "123456");
		
		assertEquals(200, response.getStatusCode().value());
		assertNotNull("Agente tiene que venir en el body", response.getBody());
		
		response = aController.loginAgente("","");
		assertEquals(403, response.getStatusCode().value());
		assertNull( response.getBody());
		
		response = aController.loginAgente(null,null);
		assertEquals(403, response.getStatusCode().value());
		assertNull( response.getBody());
	}

}
