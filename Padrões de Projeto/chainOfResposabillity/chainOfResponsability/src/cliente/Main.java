/*
 *
 */

package cliente;

import java.util.ArrayList;
import java.util.Scanner;
import login.Login;
import verificadores.CaractereEspecial;
import verificadores.Maiusculo;
import verificadores.LoginCadastrado;
import verificadores.Minusculo;
import verificadores.NumerosConsecutivos;
import verificadores.Numero;
import verificadores.TamanhoSenha;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ArrayList logins = new ArrayList<>();
        Scanner scan = new Scanner(System.in);
        String email, senha;
        
        logins.add(new Login("laranja@dominio.com", "@ewerR8G9"));
        logins.add(new Login("rayslla@dominio.com", "ewerR@8ç9"));
        logins.add(new Login("natasha@dominio.com", "rAy5||LA"));
        logins.add(new Login("usuario@dominio.com", "ew{erR8}9"));
        logins.add(new Login("email", "senha"));
        
        System.out.println("------------------------");
        
        System.out.print("E-mail: ");
        email = scan.next();
        System.out.print("Senha: ");
        senha = scan.next();
        
        Login login = new Login(email, senha);
        
        LoginCadastrado verificarLogin = new LoginCadastrado(logins);
        
        verificarLogin
                .setNextHandler(new TamanhoSenha())
                .setNextHandler(new Maiusculo())
                .setNextHandler(new Minusculo())
                .setNextHandler(new Numero())
                .setNextHandler(new NumerosConsecutivos())
                .setNextHandler(new CaractereEspecial());

        System.out.println("------------------------");
        
        Login log = verificarLogin.handle(login);
        
        System.out.println("------------------------");
        
        if(log != null)
            System.out.println("Login verificado: " + log.getEmail() + " - " + log.getSenha());
    }
}