import java.util.Date;

public class Licenciatura extends Titulo implements Comparable{

    private String temaTesis;
    private Date fechaEntregaTesis;
    private int cantTrabajos;

    public Licenciatura(Persona persona, int cantMaterias, Date fechaInicio, Date fechaFin, boolean selladoMinisterio, boolean selladoInstituto, String temaTesis, Date fechaEntregaTesis, int cantTrabajos) {
        super(persona, cantMaterias, fechaInicio, fechaFin, selladoMinisterio, selladoInstituto);
        this.temaTesis = temaTesis;
        this.fechaEntregaTesis = fechaEntregaTesis;
        this.cantTrabajos = cantTrabajos;
    }

    public int compareTo(Object o){
        Licenciatura otraLicenciatura= (Licenciatura) o;

        if (this.cantTrabajos > otraLicenciatura.cantTrabajos)return 1;
        if (this.cantTrabajos < otraLicenciatura.cantTrabajos)return -1;
        return 0;

    }
}
