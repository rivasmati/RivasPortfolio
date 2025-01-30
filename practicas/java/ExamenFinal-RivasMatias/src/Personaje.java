import java.util.ArrayList;
import java.util.List;

public class Personaje {

    private String nombre;
    private List<Habilidad> listHabilidadesPersonaje = new ArrayList<>();

    public Personaje(String nombre) {
        this.nombre = nombre;
    }



    public void mostrarHabilidades(){
        for(Habilidad habilidad : listHabilidadesPersonaje) {
            System.out.println("Habilidad: " + habilidad.getNombre() + "\n Puntaje: " + habilidad.calcularPuntaje());
        }
    }

    public void agregarHabilidad(Habilidad habilidad){
        listHabilidadesPersonaje.add(habilidad);
    }
}
