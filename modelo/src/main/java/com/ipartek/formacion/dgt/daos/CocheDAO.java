package com.ipartek.formacion.dgt.daos;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;

import org.apache.log4j.Logger;

import com.ipartek.formacion.dgt.pojos.Coche;

public class CocheDAO {


	private static CocheDAO INSTANCE = null;

	private final static Logger LOG = Logger.getLogger(AgenteDAO.class);

	private static final String SQL_GET_MATRICULA = "{call coche_get_matricula(?)}";
	

	private CocheDAO() {
		super();
	}
	
	// instance/singleton
	public synchronized static CocheDAO getInstance() {
		if (INSTANCE == null) {
			INSTANCE = new CocheDAO();
		}
		return INSTANCE;
	}
	
	
	public Coche getMatricula(String matricula) {
		String sql = SQL_GET_MATRICULA;
		Coche coche = null;
		try (Connection conn = ConnectionManager.getConnection(); 
				CallableStatement cs = conn.prepareCall(sql);) {
						cs.setString(1, matricula);
			try (ResultSet rs = cs.executeQuery()) {
				while (rs.next()) {
					coche = new Coche();
					coche.setId(rs.getLong("id"));
					coche.setMatricula(rs.getString("matricula"));
					coche.setModelo(rs.getString("modelo"));
					coche.setKm(rs.getInt("km"));
				}
			}

		} catch (Exception e) {
			LOG.fatal("getMultas:---> " + e);
		}
		LOG.debug("Listado multas OK");
		return coche;
	}

}
