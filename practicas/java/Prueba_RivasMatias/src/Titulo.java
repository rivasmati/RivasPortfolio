import java.util.Date;

public class Titulo {

    private Persona persona;
    private int cantMaterias;
    private Date fechaInicio;
    private Date fechaFin;
    private boolean selladoMinisterio;
    private boolean selladoInstituto;

    public Titulo(Persona persona, int cantMaterias, Date fechaInicio, Date fechaFin, boolean selladoMinisterio, boolean selladoInstituto) {
        this.persona = persona;
        this.cantMaterias = cantMaterias;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.selladoMinisterio = selladoMinisterio;
        this.selladoInstituto = selladoInstituto;
    }

    public boolean puedeEjercer(){
        if (selladoInstituto == true && selladoMinisterio == true) return true;
        return false;
    }
}
