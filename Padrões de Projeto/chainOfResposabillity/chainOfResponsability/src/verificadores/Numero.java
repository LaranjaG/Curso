/*
 *
 */

package verificadores;

import login.Login;

/**
 *
 * @author Laranja
 */

public class Numero extends Verificador{

    public Numero() {
        super("\\d");
    }
    
    @Override
    public Login handle(Login login) {
        if(match(login.getSenha())){
            super.handle(login);
            return login;
        }
        
        System.out.println("Não há números na senha!");
        return super.handle(login);
    }
    
}