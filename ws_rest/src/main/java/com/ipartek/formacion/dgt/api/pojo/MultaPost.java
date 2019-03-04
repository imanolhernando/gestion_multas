package com.ipartek.formacion.dgt.api.pojo;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

public class MultaPost {

	@NotNull(message = "Error")
	@Max(9999)
	private Float importe;

	@NotEmpty
	@Size(min = 10, max = 150)
	private String concepto;

	@NotNull
	private long coche;

	public MultaPost() {
		super();
		this.importe = (float) -1;
		this.concepto = "";
		this.coche = -1;
	}

	public MultaPost(Float importe, String concepto, int coche) {
		super();
		setImporte(importe);
		setConcepto(concepto);
		setCoche(coche);
	}

	public Float getImporte() {
		return importe;
	}

	public void setImporte(Float importe) {
		this.importe = importe;
	}

	public String getConcepto() {
		return concepto;
	}

	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}

	public long getCoche() {
		return coche;
	}

	public void setCoche(long coche) {
		this.coche = coche;
	}

	@Override
	public String toString() {
		return "MultaPost [importe=" + importe + ", concepto=" + concepto + ", coche=" + coche + "]";
	}
}
