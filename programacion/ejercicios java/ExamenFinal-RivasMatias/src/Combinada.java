import java.util.ArrayList;
import java.util.List;

public class Combinada extends Habilidad{

    private int multiplicador;
    private List<Habilidad> habilidadList = new ArrayList<>();

    public void setMultiplicador(int multiplicador) {
        this.multiplicador = multiplicador;
    }

    @Override
    public double calcularPuntaje() {
        double total = 0.00;
        for(Habilidad habilidad : habilidadList){
            total += habilidad.calcularPuntaje();
        }
        return total * multiplicador;
    }

    public void agregarHabilidadCombinada(Habilidad habilidad){
        habilidadList.add(habilidad);
    }
}
