package com.ipartek.formacion.dgt.service.exception;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.ipartek.formacion.dgt.pojos.Agente;

public class AgenteException extends Exception {

	private static final long serialVersionUID = 1L;

	public static final String EXCEPTION_VIOLATIONS = "No cumple las condiciones de validación";

	public static final String EXCEPTION_NUMBER = "No es numero";

	private Set<ConstraintViolation<Agente>> violations;

	public AgenteException(String message) {
		super(message);
		this.violations = null;
	}

	public AgenteException(String message, Set<ConstraintViolation<Agente>> violations) {
		this(message);
		this.setViolations(violations);
	}

	public Set<ConstraintViolation<Agente>> getViolations() {
		return violations;
	}

	public void setViolations(Set<ConstraintViolation<Agente>> violations) {
		this.violations = violations;
	}

}
