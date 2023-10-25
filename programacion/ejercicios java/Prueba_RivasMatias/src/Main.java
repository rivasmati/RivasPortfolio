import java.util.Date;

public class Main {

    public static void main(String[] args) {

        Persona pedroR = new Persona("Pedro","Rodriguez",43126234,20);

        Licenciatura licenciatura1 = new Licenciatura(pedroR, 8,new Date(2010/3/1),new Date(2015/11/30),true,true,"Astrologia",new Date(2015/11/30),15);
        Licenciatura licenciatura2 = new Licenciatura(pedroR, 8,new Date(2013/3/1),new Date(2018/11/30),false,true,"Veterinario",new Date(2015/11/30),31);

        Terciario terciario1 = new Terciario(pedroR,16,new Date(2016/3/1),new Date(2020/11/30),true,false,"nacional");
        Terciario terciario2 = new Terciario(pedroR,16,new Date(2017/3/1),new Date(2022/11/30),false,false,"provincial");

        System.out.println("El metodo compareTo devuelve: " + licenciatura1.compareTo(licenciatura2));
        System.out.println("Puede ejercer? " + licenciatura1.puedeEjercer());
        System.out.println("Puede ejercer? " + terciario2.puedeEjercer());
        System.out.println("Tiene validez nacional? " + terciario1.validezNacional());

    }
}