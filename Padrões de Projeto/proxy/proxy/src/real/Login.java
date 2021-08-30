/*
 *
 */

package real;

import interfaces.ILogin;

/**
 *
 * @author Laranja
 */

public class Login implements ILogin<String>{
    private String email;
    private String senha;

    public Login(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    @Override
    public String display() {
        return "Login on: " + this.email;
    }
}