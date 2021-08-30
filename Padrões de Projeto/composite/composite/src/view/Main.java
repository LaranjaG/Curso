/*
 *
 */

package view;

import cliente.Cliente;
import cliente.TipoCliente;
import java.util.ArrayList;
import java.util.Random;
import produtos.Produto;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ArrayList<Produto> produtos = new ArrayList<>();
        itens(produtos);
        
        ArrayList<Cliente> clientes = new ArrayList();
        
        clientes.add(TipoCliente.BRONZE.getCriator());
        clientes.add(TipoCliente.PRATA.getCriator());
        clientes.add(TipoCliente.OURO.getCriator());
        clientes.add(TipoCliente.PLATINA.getCriator());
        
        clientes.forEach(cliente ->{
           System.out.println("----------------------------------------");
           System.out.println("Tipo Cliente: " + cliente.getAssinatura());
           cliente.getBox().setChildren( 
                escolherItensBox(cliente.getQtdItens(), produtos));
        
            System.out.println("Ver Box: ");
            cliente.getBox().verBox();
            System.out.println("Preço total: " + cliente.getBox().getPrice());
            System.out.println("----------------------------------------\n");
        });
        
        
    }
    
    private static void itens(ArrayList<Produto> produtos){ 
        
        produtos.add(new Produto("Quadrinhos", 15));
        produtos.add(new Produto("Chaveiros", 5));
        produtos.add(new Produto("Bustos", 10));
        produtos.add(new Produto("Adesivos", 1));
        produtos.add(new Produto("Posters", 25));
        produtos.add(new Produto("Camisetas", 25));
        produtos.add(new Produto("Miniaturas", 20));
        
    }
    
    private static ArrayList escolherItensBox(int numeroItens, ArrayList produtos){
        Random random = new Random();
        ArrayList array = new ArrayList();
        
        while(numeroItens > 0){
            int item = random.nextInt(7);
            array.add(produtos.get(item));
            numeroItens--;
        }
        
        return array;
    }

}
