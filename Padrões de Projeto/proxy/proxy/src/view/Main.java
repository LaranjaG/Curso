/*
 *
 */

package view;

import interfaces.ILogin;
import proxy.LoginProxy;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ILogin iLoing = new LoginProxy("laranja@dominio.com", "123456");
        
        System.out.println(iLoing.display());
    }

}
