/*
 *
 */

package cliente;

import produtos.Box;

/**
 *
 * @author Laranja
 */

public class Cliente {
    private String assinatura;
    private int qtdItens;
    private Box box = new Box();
    
    public Cliente(String assinatura, int qtdItens) {
        this.assinatura = assinatura;
        this.qtdItens = qtdItens;
    }
    
  //Getters  
    public String getAssinatura() {
        return assinatura;
    }

    public int getQtdItens() {
        return qtdItens;
    }

    public Box getBox() {
        return box;
    }
}