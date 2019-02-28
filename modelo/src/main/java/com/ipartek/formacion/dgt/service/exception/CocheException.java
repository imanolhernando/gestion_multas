package com.ipartek.formacion.dgt.service.exception;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.ipartek.formacion.dgt.pojos.Coche;

public class CocheException extends Exception {

	private static final long serialVersionUID = 1L;

	public static final String EXCEPTION_VIOLATIONS = "No cumple las condiciones de validación";

	private Set<ConstraintViolation<Coche>> violations;

	public CocheException(String message) {
		super(message);
		this.violations = null;
	}

	public CocheException(String message, Set<ConstraintViolation<Coche>> violations) {
		this(message);
		this.setViolations(violations);
	}

	public Set<ConstraintViolation<Coche>> getViolations() {
		return violations;
	}

	public void setViolations(Set<ConstraintViolation<Coche>> violations) {
		this.violations = violations;
	}

}
