/*
 *
 */

package verificadores;

import java.util.ArrayList;
import login.Login;

/**
 *
 * @author Laranja
 */

public class LoginCadastrado extends Verificador{ 
    
    private ArrayList<Login> logins;

    public LoginCadastrado(ArrayList<Login> logins) {
        this.logins = logins;
    }
    
    @Override
    public Login handle(Login login) {
        String loginOut = login.getEmail(), 
                senhaOut = login.getSenha();
        
        for(Login arrayLogin : logins){
            String loginIn = arrayLogin.getEmail(), 
                    senhaIn = arrayLogin.getSenha();
            
            if(loginIn.equals(loginOut) 
                && senhaIn.equals(senhaOut)){
                super.handle(login);
                return login;
            }
        }
        
        System.out.println("O login não encontrado!");
        return super.handle(login);
    }

}