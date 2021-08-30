/*
 *
 */

package db;

import java.sql.Connection;

/**
 *
 * @author Laranja
 */

public class Firebird extends ConnectionDB{

    public Firebird() {
        super("root", "", "url", "org.firebirdsql.jdbc.FBDriver");
    }

    @Override
    public void closeConnection() {
        //super.closeConnection(); //To change body of generated methods, choose Tools | Templates.
        System.out.println("Conexão encerrada com o Firebird!");
    }

    @Override
    public Connection getConnection() {
        //return super.getConnection(); //To change body of generated methods, choose Tools | Templates.
        System.out.println("Conexão iniciada com o Firebird!");
        return null;
    }
}
