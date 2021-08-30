/*
 * O código a seguir mostra de forma simples e rápida como efetuar uma conexão com banco de dados 
 * usando a linguagem de programação Java.
 */

package db;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Laranja
 */

public class ConnectionDB {
    private Connection con = null;

    private String userName;
    private String password;
    private String url;
    private String jdbcDriver;

    public ConnectionDB(String userName, String password, String url, String jdbcDriver) {
        this.userName = userName;
        this.password = password;
        this.url = url;
        this.jdbcDriver = jdbcDriver;
    }
    
    public ConnectionDB(){
        
    }
    
    public Connection getConnection() {
        try {
          if (con == null) {
            Class.forName(jdbcDriver);
            con = DriverManager.getConnection(url, userName, password);
          } else if (con.isClosed()) {
            con = null;
            return getConnection();
          }
        } catch (ClassNotFoundException e) {

      //TODO: use um sistema de log apropriado.

             e.printStackTrace();
        } catch (Exception e) {

      //TODO: use um sistema de log apropriado.

          e.printStackTrace();
        }
        
        return con;
    }
    
    public void closeConnection() {
        if (con != null) {
            try {
                con.close();
            } catch (Exception e) {
            //TODO: use um sistema de log apropriado.
                 e.printStackTrace();
            }
        }
    }
}
