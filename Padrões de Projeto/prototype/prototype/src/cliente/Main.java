package cliente;

import Instrumentos.Violao;
import java.util.Scanner;

/*
 *
 */

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
        
        double pagamento = 0;
        int tipoViolao;
        
        System.out.println("Escolha um violão:"
                + "\n1 - Violão Clássico"
                + "\n2 - Violão Folk"
                + "\n3 - Violão Flet"
                + "\n4 - Violao Jumbo"
                + "\n5 - Violão 7 Cordas"
                + "\n6 - Violão 12 Cordas"
                + "\n7 - Violão Zero"
                + "\n8 - Violão Duplo Zero"
                + "\n9 - Violão Triplo Zero");
    
        System.out.print("Violão: ");
        tipoViolao = scan.nextInt();
        
        Violao violao = escolherViolao(tipoViolao);
        
        if(violao == null){
            System.out.println("Opção invalida! Comece o processo de compra novamente!");
            System.exit(0);
        }
        
        System.out.println("\n--------------------------------");
        System.out.println("Detalhes produto: \n" + violao.detalhesProduto());
        System.out.println("--------------------------------\n");
        
        System.out.println("O preço do violão é: " + violao.getPreco() + "!");
        System.out.println("Efetue o pagamento para pegar seu produto");
        System.out.print("Pagar: R$ ");
        pagamento = scan.nextFloat();
        
        if(pagamento >= violao.getPreco()){
            if(pagamento > violao.getPreco())
                System.out.println("Troco: R$ " + (pagamento - violao.getPreco()));
            System.out.println("Compra executada com sucesso! Volte sempre!");
        } else{
            System.out.println("Não foi possivel completar a compra!");
        }
    }
    
    private static Violao escolherViolao(int tipoViolao){
        Violao violaoClassico = new Violao("Classico", "marrom", "nylon", 400, 65, "metalica", "madeira");
        Violao clone = violaoClassico.clone();
        
        switch(tipoViolao){
            //Case 1 não é necessário, já que não vai fazer nenhuma alteração no clone!
            case 2: 
                clone.setTipoViolao("Folk");
                clone.setPreco(500);
                clone.setTipoCordoamento("aço");
            case 3: 
                clone.setTipoViolao("Flet");
                clone.setPreco(600);
            case 4: 
                clone.setTipoViolao("Jumbo");
                clone.setPreco(700);
                clone.setTipoCordoamento("aço");
            case 5: 
                clone.setTipoViolao("7 cordas");
                clone.setPreco(800);
                clone.setTipoCordoamento("aço");
            case 6:
                clone.setTipoViolao("12 cordas");
                clone.setPreco(900);
                clone.setTipoCordoamento("aço");
            case 7:
                clone.setTipoViolao("Zero");
                clone.setPreco(1000);
                clone.setTipoCordoamento("aço");
            case 8:
                clone.setTipoViolao("Duplo Zero");
                clone.setPreco(1050);
                clone.setTipoCordoamento("aço");
            case 9: 
                clone.setTipoViolao("Triplo Zero");
                clone.setPreco(1100);
                clone.setTipoCordoamento("aço");
        }
        
         return clone;
    }
}
