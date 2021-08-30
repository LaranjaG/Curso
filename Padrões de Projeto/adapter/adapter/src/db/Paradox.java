/*
 *
 */

package db;

import java.sql.Connection;

/**
 *
 * @author Laranja
 */

public class Paradox extends ConnectionDB {

    public Paradox(){
       super("root", "", "url", "com.hxtt.sql.paradox.ParadoxDriver");
    }

    @Override
    public void closeConnection() {
        //super.closeConnection(); //To change body of generated methods, choose Tools | Templates.
    
        System.out.println("Conexão encerrada com Paradox!");
    }

    @Override
    public Connection getConnection() {
        //return super.getConnection(); //To change body of generated methods, choose Tools | Templates.
        System.out.println("Conexão iniciada com Paradox!");
        return null;
    }
   
   
}
