import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.awt.event.KeyEvent;
import java.awt.event.KeyAdapter;
import javax.swing.JFrame;
import java.util.Scanner;

class aula5{// dever de casa
    public static void main (KeyEvent[] evt){
        LocalTime idTime = LocalTime.now();


        int EscolhaDia = KeyEvent.VK_4;
        int EscolhaHora = KeyEvent.VK_5;
        switch (EscolhaDia) {
            case 1:
                DateTimeFormatter dtForm = DateTimeFormatter.ofPattern("ss");  //minutos
                String tformat = idTime.format(dtForm);
                int second = Integer.parseInt(tformat);
                System.out.println( second * 60);
                break;
               
        }
        switch (EscolhaHora) {
            case 1:
            DateTimeFormatter date = DateTimeFormatter.ofPattern("dd");  //horas
            String Tformat = idTime.format(date);
            int minute = Integer.parseInt(Tformat);
            System.out.println( minute * 60);
                break;
           }
        



    }



}