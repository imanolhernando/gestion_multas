package com.ipartek.formacion.dgt.service.exception;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.ipartek.formacion.dgt.pojos.Multa;

public class MultaException extends Exception {

	private static final long serialVersionUID = 1L;

	public static final String EXCEPTION_VIOLATIONS = "No cumple las condiciones de validación";

	public static final String EXCEPTION_NUMBER = "Excepcion de numero";

	private Set<ConstraintViolation<Multa>> violations;

	public MultaException(String message) {
		super(message);
		this.violations = null;
	}

	public MultaException(String message, Set<ConstraintViolation<Multa>> violations) {
		this(message);
		this.setViolations(violations);
	}

	public Set<ConstraintViolation<Multa>> getViolations() {
		return violations;
	}

	public void setViolations(Set<ConstraintViolation<Multa>> violations) {
		this.violations = violations;
	}

}
