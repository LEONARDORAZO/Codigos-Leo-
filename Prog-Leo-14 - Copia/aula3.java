import java.text.DecimalFormat;

public class aula3 {
    public static void main(String[] args) {
       DecimalFormat decimalFormat = new DecimalFormat("#.000000");
        
       var pih = Math.PI;
        System.out.println(pih);

        var PIarredondado = decimalFormat.format(pih);
System.out.println(PIarredondado);

var aleatorio = Math.random()*100;
System.out.println(aleatorio);

//var NUmber = decimalFormat.format("5,25"); Math.random();
//System.out.println(NUmber);

//GABARITO

var NUmber = (Math.random()*20) + 5;
System.out.println(NUmber);

}

    //exercício 2


}
