/*
 *
 */

package usuarios;

/**
 *
 * @author Laranja
 */

public abstract class Usuario {

    private String nomeUser;
    private String email;
    private String senha;

    public Usuario(String nomeUser, String email, String senha) {
        this.nomeUser = nomeUser;
        this.email = email;
        this.senha = senha;
    }

    public String getNomeUser() {
        return nomeUser;
    }

    public void setNomeUser(String nomeUser) {
        this.nomeUser = nomeUser;
    }

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