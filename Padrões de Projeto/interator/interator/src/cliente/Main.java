/*
 *
 */

package cliente;

import classes.BilheteLoteria;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Random random = new Random();
        ArrayList<Integer> numerosBilhete = new ArrayList();
    
        for(int i = 0; i < 6; i++){
            numerosBilhete.add(random.nextInt(100));
        }
        
        Iterator bilheteIterator = new BilheteLoteria(numerosBilhete);
        
        System.out.println("Números do bilhete premiado:");
        while (bilheteIterator.hasNext()) { 
            int numero = (Integer) bilheteIterator.next();
            System.out.print(numero + " ");
        }
        
        System.out.println("");
    }
}