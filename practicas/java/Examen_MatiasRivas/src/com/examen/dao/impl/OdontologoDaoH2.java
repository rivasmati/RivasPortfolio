package com.examen.dao.impl;

import com.examen.dao.IDao;
import com.examen.model.Odontologo;
import com.examen.service.OdontologoService;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class OdontologoDaoH2 implements IDao<Odontologo> {

    private final static String DB_JDBC_DRIVER = "org.h2.Driver";
    //con la instruccion INIT=RUNSCRIPT cuando se conecta a la base ejecuta el script de sql que esta en dicho archivo
    private final static String DB_URL = "jdbc:h2:~/db_clinica;INIT=RUNSCRIPT FROM 'create.sql'";
    private final static String DB_USER ="sa";
    private final static String DB_PASSWORD = "";


    @Override
    public Odontologo registrar(Odontologo odontologo) {

        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {

            Class.forName(DB_JDBC_DRIVER);
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            preparedStatement = connection.prepareStatement("INSERT INTO odontologos(id,matricula,nombre,apellido) VALUES(?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setInt(1, odontologo.getMatricula());
            preparedStatement.setString(2, odontologo.getNombre());
            preparedStatement.setString(3, odontologo.getApellido());

            preparedStatement.executeUpdate();
            ResultSet keys = preparedStatement.getGeneratedKeys();
            if(keys.next())
                odontologo.setId(keys.getInt(1));

            preparedStatement.close();

        } catch (SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
        return odontologo;
    }



    @Override
    public List<Odontologo> listarTodos() {

        Connection connection = null;
        PreparedStatement preparedStatement = null;

        List<Odontologo> odontologos = new ArrayList<>();
        try {

            Class.forName(DB_JDBC_DRIVER);
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            preparedStatement = connection.prepareStatement("SELECT *  FROM odontologos");

            ResultSet result = preparedStatement.executeQuery();


            while (result.next()) {
                int matricula = result.getInt("matricula");
                String nombre = result.getString("nombre");
                String apellido = result.getString("apellido");

                Odontologo odontologo = new Odontologo(matricula,nombre,apellido);
                odontologos.add(odontologo);
            }

            preparedStatement.close();
        } catch (SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }

        return odontologos;
    }
}
