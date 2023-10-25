public class HabilidadFactory {

    private static HabilidadFactory instance;

    private HabilidadFactory(){}

    public static HabilidadFactory getInstance(){
        if(instance == null){
            instance = new HabilidadFactory();
        }
        return instance;
    }

    public Habilidad crearHabilidad(String type){
        switch (type){
            case "SIMPLE":
                return new Simple();

            case "COMBINADA":
                return new Combinada();

            default:
                return null;
        }
    }

}