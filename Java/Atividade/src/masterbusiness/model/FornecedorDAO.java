/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package masterbusiness.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import masterbusiness.controller.Endereco;
import masterbusiness.controller.Fornecedor;

/**
 *
 * @author lcarl
 */
public class FornecedorDAO {
    //similar ao ClienteDAO e FuncionarioDAO
    public static void create(Fornecedor f) throws SQLException{
        
        Connection conn = BancoDados.createConnection();
        
        PreparedStatement stm = conn.prepareStatement(
             "INSERT INTO fornecedor(nome, cnpj) "
                          + "VALUES (?, ?)", 
             PreparedStatement.RETURN_GENERATED_KEYS);
        
        stm.setString(1, f.getNome());
        stm.setString(2, f.getCnpj());
        
        stm.execute();
        ResultSet rs = stm.getGeneratedKeys();
        
        rs.next();
        
        f.setPk(rs.getInt(1));//recuperando a chave primária que acabou de ser gerada durante a inserção e atribuindo a propriedade 'pk' da classe pessoa/pessoafisica/funcionario
        
        
        for (Endereco e : f.getEnderecos()){
            e.setFk(f.getPk());//atribuindo a chave primária do funcionario que acabou de ser inserino na chave extrangeira do endereço
            FornecedorEnderecoDAO.create(e);
        }
    }
    
    public static Fornecedor retreave(int pk_fornecedor) throws SQLException{
        
        Connection conn = BancoDados.createConnection();
        
        ResultSet rs = conn.createStatement().executeQuery(
                               
                "SELECT * FROM fornecedor WHERE pk_fornecedor = " + pk_fornecedor);
        
        Fornecedor f;
        
        if (rs.next()){
            
            f = new Fornecedor(
                        pk_fornecedor, 
                        rs.getString("cnpj"),
                        rs.getString("nome"));
            
            f.setEnderecos(FornecedorEnderecoDAO.retreaveAll(pk_fornecedor));
        } else {
            throw new RuntimeException("Funcionário com a chave " + pk_fornecedor + " não existe");
        }
        
        return f;        
    }
    
    public static ArrayList<Fornecedor> retreaveAll()throws SQLException{
        Connection conn = BancoDados.createConnection();
        
        ResultSet rs = conn.createStatement().executeQuery(
                               
                "SELECT * FROM fornecedor");
        
        ArrayList<Fornecedor> forns = new ArrayList<>();
        
        while(rs.next()){
            
            Fornecedor f = new Fornecedor(
                        rs.getInt("pk_fornecedor"),
                        rs.getString("cpf"),
                        rs.getString("nome"));
            
            f.setEnderecos(FornecedorEnderecoDAO.retreaveAll(rs.getInt("pk_fornecedor")));
            
            forns.add(f);
        }    
        
        return forns;        
        
    }
    
    
    public static void update(Fornecedor f)throws SQLException{
        Connection conn = BancoDados.createConnection();
        
        PreparedStatement stm = conn.prepareStatement(
             "UPDATE fornecedor SET nome = ?, cnpj = ? WHERE pk_fornecedor = ?"   
        );
  
        stm.setString(1, f.getNome());
        stm.setString(2, f.getCnpj());
        stm.setInt(3, f.getPk());
        
        stm.execute();
        
        for (Endereco e: f.getEnderecos()){
            if (!e.isPersistido()){
               FornecedorEnderecoDAO.update(e);
            }
        }
    }
    
    public static void delete(Fornecedor f) throws SQLException{
       delete(f.getPk());
       f.setPk(0);
    
    }
    public static void delete(int pk_fornecedor) throws SQLException{

        Connection conn = BancoDados.createConnection();
        
        conn.createStatement().execute(
                "DELETE FROM fornecedor WHERE pk_fornecedor = " + pk_fornecedor);
    }
}
