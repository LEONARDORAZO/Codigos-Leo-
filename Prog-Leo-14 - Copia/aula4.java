import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class aula4 {
    
public static void main(String[] args){
//LocalDate dat = LocalDate.now();
LocalTime idTime = LocalTime.now();
//var tim3 = tim / 1000;
//System.out.println(tim3);
DateTimeFormatter dtForm = DateTimeFormatter.ofPattern("ss");
String formatad = idTime.format(dtForm);
int segund0 = Integer.parseInt(formatad);
System.out.println(segund0 * 60);


}

}
