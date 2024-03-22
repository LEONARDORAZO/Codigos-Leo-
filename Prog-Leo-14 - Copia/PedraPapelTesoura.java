import java.util.Scanner;

public class PedraPapelTesoura {
    public static void main(String[]args){
        JogarPPT();   
    }
    public static void JogarPPT(){
        Scanner ppt = new Scanner(System.in);
        System.out.println("escolha: pedra, papel ou tesoura");
        String escolha = ppt.nextLine();
        double pedra = 1.0;
        double papel = 2.0;
       double tesoura = 3.0;
        double EscolhaPPT = Math.random() + 4 ;
        double Combate = Math.floor( EscolhaPPT);
        if( Combate == 3.0){
            System.out.println("tesoura");
        }if (Combate == 2.0){
            System.out.println("Papel");
        }if (Combate == 1.0){
            System.out.println("pedra");
        }
        
}}


