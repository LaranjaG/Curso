/*
 *
 */

package cliente;

import classes.Streaming;
import classes.User;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Streaming service = new Streaming();
        
        User user1 = new User("Rayslla", "rayslla@gmail.com");
        User user2 = new User("Laranja", "laranja@gmail.com");
        User user3 = new User("Natasha", "natasha@gmail.com");
        
        service.subscribe(user1);
        service.subscribe(user2);
        service.subscribe(user3);
        
        service.upContent("Filme: The kissing booth 3");
    
        System.out.println("\n----------------------------\n");
        
        user3.setNotify();
        System.out.println("Serviço do usuário 3: " + user3.getService().getName());
        
        service.upContent("Serie: Control Z");
        
        System.out.println("\n----------------------------\n");
        
        service.unsubscribe(user2);
        System.out.println("Serviço do usuário 2: " + user2.getService());
    
        service.upContent("Filme: Streat Ferar 1666");
    }
}