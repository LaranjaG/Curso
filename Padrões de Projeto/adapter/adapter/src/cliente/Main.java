/*
 *
 */

package cliente;

import Adapter.AdapterUserDB;
import Adapter.Conexao;
import db.ConnectionDB;
import db.Firebird;
import db.MySql;
import db.Paradox;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import usuarios.MultiUser;
import usuarios.MultiUserMulti;
import usuarios.SingleUser;
import usuarios.Usuario;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        ArrayList<Usuario> users = new ArrayList<>();
          
        users.add(new SingleUser("Rayslla", "rayslla@dominio.com", "pao"));
        users.add(new MultiUser("Laranja", "laranja@dominio.com", "paozinho"));
        users.add(new MultiUserMulti("Natasha", "natasha@dominio.com", "paozinhoDeQueijo"));
        users.add(new MultiUserMulti("Novo Usuário", "newUser@dominio.com", "zero"));
        
        Map<String, ConnectionDB> mapDB = new HashMap<String, ConnectionDB>();
        
        mapDB.put(SingleUser.class.toString(), new Paradox());
        mapDB.put(MultiUser.class.toString(), new Firebird());
        mapDB.put(MultiUserMulti.class.toString(), new MySql());
        
        users.forEach(user -> {
            Conexao adapter = new AdapterUserDB(user);
            ConnectionDB db = mapDB.get(user.getClass().toString());
            
            System.out.println("\n----------------------------");
            
            if(adapter != null){
                adapter.pegarConexao(db);
                adapter.terminarConexao(db);
            }
            
            System.out.println("----------------------------");
        });
    }

}
