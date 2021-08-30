/*
 *
 */

package verificadores;

import login.Login;

/**
 *
 * @author Laranja
 */

public class Minusculo extends Verificador{

    public Minusculo() {
        super("[a-z]");
    }
    
    public Login handle(Login login) {

        if(match(login.getSenha())){
            super.handle(login);
            return login;
        }
        
        System.out.println("A senha não possui caracter minusculo!");
        return super.handle(login);
    }
}