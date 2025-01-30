public class Test {
    public static void main(String[] args) {

        Personaje personaje = new Personaje("PIRULO");
        HabilidadFactory factory  = HabilidadFactory.getInstance();


        Habilidad habilidad1 = factory.crearHabilidad("SIMPLE");
        habilidad1.setNombre("SALTAR");
        ((Simple)habilidad1).setPuntaje(7.5);
        personaje.agregarHabilidad(habilidad1);

        Habilidad habilidad2 = factory.crearHabilidad("SIMPLE");
        habilidad2.setNombre("DISPARAR");
        ((Simple)habilidad2).setPuntaje(10);
        personaje.agregarHabilidad(habilidad2);

        Habilidad habilidad3 = factory.crearHabilidad("COMBINADA");
        habilidad3.setNombre("DISPARO-AL-SALTAR");
        ((Combinada)habilidad3).setMultiplicador(3);
        ((Combinada)habilidad3).agregarHabilidadCombinada(habilidad1);
        ((Combinada)habilidad3).agregarHabilidadCombinada(habilidad2);
        personaje.agregarHabilidad(habilidad3);


        personaje.mostrarHabilidades();

    }
}