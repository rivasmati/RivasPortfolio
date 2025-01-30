public class Simple extends Habilidad{

    private double puntaje;

    public void setPuntaje(double puntaje) {
        this.puntaje = puntaje;
    }

    public double getPuntaje() {
        return puntaje;
    }

    @Override
    public double calcularPuntaje() {
        if (this.getNombre().equals("DISPARAR")){
            return puntaje + puntaje * 0.1;
        }
        return puntaje;
    }
}
