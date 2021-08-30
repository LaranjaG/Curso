/*
 *
 */

package db;

import java.sql.Connection;


/**
 *
 * @author Laranja
 */

public class MySql extends ConnectionDB{

    public MySql() {
        super("root", "", "url", "com.mysql.jdbc.Driver");
    }    

    @Override
    public void closeConnection() {
        //super.closeConnection(); //To change body of generated methods, choose Tools | Templates.
        System.out.println("Conexão encerrada com MySQL! ");
    }

    @Override
    public Connection getConnection() {
        //return super.getConnection(); //To change body of generated methods, choose Tools | Templates.
        System.out.println("Conexão iniciada com MySQL!");
        return null;
    }
    
    
}
