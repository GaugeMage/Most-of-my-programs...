//Leap Year program - prints out which years are leap years.
//by www.neiljohan.com

import java.io.*;


public class LeapYear
{
    public static void main(String[] pArgs) throws IOException
        {
            for (int Year = 2002; Year < 2100; Year++)
            {
                boolean tIsLeap = IsItLeap(Year);
                System.out.println(Year + " " +  tIsLeap);
            }
        }

    public static boolean IsItLeap(int tYear)
        {

            if ((tYear%400==0) || (tYear%4==0 && tYear%100!=0))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    
}