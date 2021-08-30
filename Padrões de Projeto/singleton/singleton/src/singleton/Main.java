/*
 *
 */

package singleton;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Login usuario = Login.getInstace("admin", "admin");
        Login usuario2 = Login.getInstace("Jão", "jão");
        
        System.out.println(usuario.logar("admin", "admin"));
        System.out.println(usuario.logar("admin", "admin"));
        System.out.println(usuario2.logar("Jão", "jão"));
    }

}
