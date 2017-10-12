/*Temperature Program
by www.neiljohan.com*/
import java.io.*;
public class TempChart {
    public static void main(String[] pArgs) throws IOException {
            System.out.println("  F   C");
            for (int tFahrenheit = 50; tFahrenheit<=100; tFahrenheit=tFahrenheit+25) {
                int tCelcius = ((tFahrenheit - 32)*5/9);     
                        if (tCelcius%10>=5) {
                         tCelcius=tCelcius+(10-tCelcius%10);
                         }
                        else {
                         tCelcius=(tCelcius - tCelcius%10);
                         }
                System.out.print(tFahrenheit + "  "); 
                System.out.println(tCelcius);
            }
        }
}

            