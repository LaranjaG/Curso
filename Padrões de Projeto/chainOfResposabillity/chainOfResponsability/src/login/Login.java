/*
 *
 */

package login;

/**
 *
 * @author Laranja
 */

public class Login{
  //Atributos
    private String email;
    private String senha;

  //Construtores  
    public Login(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

  //Getters & Setters  
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
}