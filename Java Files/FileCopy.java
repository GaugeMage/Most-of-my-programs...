//This will copy a file
//Usage: FileCopy SourceFile DestinationFile
//By www.neiljohan.com

import java.io.*;
import java.util.StringTokenizer;
import java.awt.*;

public class FileCopy
{
    public static void main(String[] pArgs) throws IOException
        {
		String oneLine;
		String[] aStore = new String [100];
		int i = 0;
		int Return=-1;	
		File filen = new File(pArgs[0]); 
	
		FileInputStream theFile = new FileInputStream(pArgs[0]);
		int FileSize =(int)filen.length();
		byte Bytes[]=new byte[FileSize];
		Return=theFile.read(Bytes);
		
		String file1 = new String(Bytes);
		System.out.println(file1);

		FileOutputStream myOutput = new FileOutputStream(pArgs[1]);

		for (int loop = i; i<FileSize; i++)
		{
			myOutput.write(Bytes[i]);
		}		
			myOutput.close();

        }

}
