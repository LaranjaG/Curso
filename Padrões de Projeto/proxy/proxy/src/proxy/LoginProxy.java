/*
 *
 */

package proxy;

import interfaces.ILogin;
import real.Login;

/**
 *
 * @author Laranja
 */

public class LoginProxy implements ILogin<String>{
    private String email;
    private String senha;
    private Login realLogin = null;

    public LoginProxy(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }
    
    private Login createRealLogin(){
        return new Login(this.email, this.senha);
    }

    @Override
    public String display() {
        if(this.realLogin == null){
            this.realLogin = this.createRealLogin();
        }
        
        return this.realLogin.display();
    }
}
