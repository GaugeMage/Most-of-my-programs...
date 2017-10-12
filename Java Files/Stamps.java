//Type in a weight from 0-200 and it will tell you how much you need to spend on stamps
//by www.neiljohan.com

import java.io.*;

public class Stamps
{
    public static void main(String[] pArgs) throws IOException
        {

            final InputStreamReader tInputStreamReader = new InputStreamReader(System.in);
            final BufferedReader tKeyboard = new BufferedReader(tInputStreamReader);

            System.out.print("Type in the weight ");

            final String tInput = tKeyboard.readLine();
            final int tWeight = new Integer(tInput).intValue();
            

            if (tWeight<61) {
                System.out.println("The price is 26p");
            } else if (tWeight<101) {
                System.out.println("The price is 39p");
            }
            else if (tWeight<151){
                System.out.println("The price is 49p");}
            else if (tWeight<201){
                System.out.println("The price is 60p");
            }
          
        }
}