/*
 *
 */

package masterbusiness.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import masterbusiness.controller.Venda;
import masterbusiness.controller.VendaItem;

/**
 *
 * @author Laranja
 */

public class VendaDAO {

        public static void create(Venda v) throws SQLException{
        
        Connection conn = BancoDados.createConnection();
        
        if (v.getVendedor() == null || v.getVendedor().getPk() == 0){
            throw new RuntimeException("ERRO: Vendedor não está cadastrado");
        } 
        
        if (v.getCliente() == null || v.getCliente().getPk() == 0){
            throw new RuntimeException("ERRO: Fornecedor não está cadastrado");
        }
        
        if (v.getVendaItem().isEmpty()){//testa se o array list está vazio (mesmo que size==0)
            throw new RuntimeException("ERRO: A venda precisa possuir ao menos um item cadastrado");
        }

        PreparedStatement stm = conn.prepareStatement(
             "INSEvRT INTO venda(fk_cliente, fk_vendedor, numero, data) "
                     + "VALUES (?, ?, ?, ?)", 
             PreparedStatement.RETURN_GENERATED_KEYS);
        
        stm.setInt(1, v.getCliente().getPk());
        stm.setInt(2, v.getVendedor().getPk());
        stm.setInt(3, v.getNumero());
        stm.setDate(4, v.getData());
        
        stm.execute();
        ResultSet rs = stm.getGeneratedKeys();
        
        rs.next();
        
        v.setPkVenda(rs.getInt(1));//recuperando a chave primária que acabou de ser gerada durante a inserção e atribuindo a propriedade 'pk' da classe pessoa/pessoafisica/funcionario

        for (VendaItem i: v.getVendaItem()){
            i.setPkVendaItem(v.getPkVenda());//atribuindo a chave primária do funcionario que acabou de ser inserino na chave extrangeira do endereço
            VendaItemDAO.create(i);
        }
    }
        
    public static Venda retreave(int pk_venda) throws SQLException{
        
        Connection conn = BancoDados.createConnection();
        
        ResultSet rs = conn.createStatement().executeQuery(
                               
                "SELECT * FROM venda WHERE pk_venda = " + pk_venda);
        
        Venda v;
        
        if (rs.next()){
            v = new Venda(
                    pk_venda,
                    ClienteDAO.retreave(rs.getInt("fk_cliente")),
                    FuncionarioDAO.retreave(rs.getInt("fk_vendedor")), 
                    rs.getInt("numero"),
                    rs.getDate("data"),
                    VendaItemDAO.retreaveAll(pk_venda));
            
            
        } else {
            throw new RuntimeException("Venda não existe");
        }
        
        return v;        
    }
    
    public static ArrayList<Venda> retreaveAll()throws SQLException{
        Connection conn = BancoDados.createConnection();
        
        ResultSet rs = conn.createStatement().executeQuery(
                "SELECT * FROM venda");
        
        ArrayList<Venda> vendas = new ArrayList<>();
        
        while(rs.next()){
            
            vendas.add(new Venda(
                    rs.getInt("pk_venda"),
                    ClienteDAO.retreave(rs.getInt("fk_cliente")),
                    FuncionarioDAO.retreave(rs.getInt("fk_vendedor")), 
                    rs.getInt("numero"),
                    rs.getDate("data"),
                    VendaItemDAO.retreaveAll(rs.getInt("pk_venda"))));
            
        }    
        
        return vendas;   
    }
    
     public static void update(Venda v)throws SQLException{
        Connection conn = BancoDados.createConnection();
        
        PreparedStatement stm = conn.prepareStatement(
             "UPDATE venda "
                     + "SET fk_cliente = ?, fk_vendedor = ?, numero = ?, data = ? "
                     + "WHERE pk_venda = ?"   
        );
        
        stm.setInt(1, v.getCliente().getPk());
        stm.setInt(2, v.getVendedor().getPk());
        stm.setInt(3, v.getNumero());
        stm.setDate(4, v.getData());
        stm.setInt(4, v.getPkVenda());
        
        stm.execute();
        
        for (VendaItem i: v.getVendaItem()){
               VendaItemDAO.update(i);
        }
    }
    
    public static void delete(Venda v) throws SQLException{
       delete(v.getPkVenda());
       v.setPkVenda(0); //Retira o pk do objeto, para que seja constato que ele não pertence mais a base de Dados
    
    }
    public static void delete(int pk_venda) throws SQLException{

        Connection conn = BancoDados.createConnection();
        
        conn.createStatement().execute(
                "DELETE FROM venda WHERE pk_venda = " + pk_venda);

    }    
}