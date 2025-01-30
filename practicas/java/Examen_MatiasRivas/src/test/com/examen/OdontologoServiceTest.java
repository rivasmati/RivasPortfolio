package test.com.examen;

import com.examen.dao.impl.OdontologoDaoH2;
import com.examen.model.Odontologo;
import com.examen.service.OdontologoService;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.Date;
import java.util.List;

public class OdontologoServiceTest {

    private static OdontologoService odontologoService = new OdontologoService(new OdontologoDaoH2());

    @BeforeClass
    public static void registrarOdontologo() {
//        Odontologo o1 = OdontologoService.registrar(new Odontologo(235231, "Exequiel", "Zeballos"));
//        Odontologo o2 = OdontologoService.registrar(new Odontologo(229385, "Luca", "Langoni"));

    }

    @Test
    public void listarTodos() {
        List<Odontologo> odontologos = OdontologoService.listarTodos();
        Assert.assertTrue(!odontologos.isEmpty());
        Assert.assertTrue(odontologos.size() > 0);
        System.out.println(odontologos);
    }
}
