/*
 *
 */

package Adapter;

import db.ConnectionDB;
import usuarios.Usuario;

/**
 *
 * @author Laranja
 */

public class AdapterUserDB implements Conexao{
    
    private Usuario user;

    public AdapterUserDB(Usuario user) {
        this.user = user;
    }
    
    @Override
    public void pegarConexao(ConnectionDB db) {
        if(db != null){
            System.out.println("Usuário: " + user.getNomeUser() + "\nE-mail: " + user.getEmail());
            db.getConnection();
        }
    }
    
    @Override
    public void terminarConexao(ConnectionDB db) {
        if(db != null){
            db.closeConnection();
        }
    }

    public Usuario getUser() {
        return user;
    }

    public void setUser(Usuario user) {
        this.user = user;
    }

}
