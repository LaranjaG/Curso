/* 
 *
 */

package Adapter;

import db.ConnectionDB;

/**
 *
 * @author Laranja
 */
public interface Conexao {
    public void pegarConexao(ConnectionDB db);
    public void terminarConexao(ConnectionDB db);
}
