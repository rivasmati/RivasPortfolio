import java.util.Date;

public class Terciario extends Titulo {

    private String validacion;

    public Terciario(Persona persona, int cantMaterias, Date fechaInicio, Date fechaFin, boolean selladoMinisterio, boolean selladoInstituto, String validacion) {
        super(persona, cantMaterias, fechaInicio, fechaFin, selladoMinisterio, selladoInstituto);
        this.validacion = validacion;
    }

    public boolean validezNacional(){
        if (validacion == "nacional")return true;
        return false;
    }
}
