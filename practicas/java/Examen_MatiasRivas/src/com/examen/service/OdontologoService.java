package com.examen.service;

import com.examen.dao.IDao;
import com.examen.model.Odontologo;
import org.apache.log4j.Logger;


import java.util.List;

public class OdontologoService {

    private static final Logger logger = Logger.getLogger(OdontologoService.class);
    private static IDao<Odontologo> odontologoIDao;

    public OdontologoService(IDao<Odontologo> pacienteIDao) {
        this.odontologoIDao = pacienteIDao;
    }

    public static Odontologo registrar(Odontologo odontologo){
        logger.info("Se registro un odontologo");
        return odontologoIDao.registrar(odontologo);

    }

    public static List<Odontologo> listarTodos(){
        logger.info("Se listan todos los odontologos registrados");
        return odontologoIDao.listarTodos();
    }

}
