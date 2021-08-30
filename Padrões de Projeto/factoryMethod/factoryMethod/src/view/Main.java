/*
 *
 */

package view;

import fabricas.Fabricas;
import produto.Produto;
import fabricas.FabricaProdutosEsportivos;
import java.util.Scanner;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.println("Escolha uma Fabrica: \n" + 
                           "1 - Nike\n" +
                           "2 - Adidas\n" +
                           "3 - Puma\n" +
                           "4 - Umbro\n" +
                           "5 - Kappa\n\n" +
                           "Fabrica: ");
        
        int fabrica = scan.nextInt();
        
        System.out.println("--------------------------");
        
        FabricaProdutosEsportivos creator = escolherFabrica(fabrica);
        
        if(creator != null) {
            Produto product = creator.factoryMethod();
            product.camisaEsportiva(creator.getClass().getSimpleName());
            creator.criarMostrar();
        } else
            System.out.println("Opção inválida! Fábrica não existe");
    }

    private static FabricaProdutosEsportivos escolherFabrica(int fabrica) {
        switch(fabrica){
            case 1:
                return Fabricas.NIKE.getCriator();
            case 2:
                return Fabricas.ADIDAS.getCriator();
            case 3:
                return Fabricas.PUMA.getCriator();
            case 4:
                return Fabricas.UMBRO.getCriator();
            case 5:
                return Fabricas.KAPPA.getCriator();
            default:
                return null;
        }
    }

}

