/*
 *
 */

package fabricas;

import produto.Produto;

/**
 *
 * @author Laranja
 */

public abstract class FabricaProdutosEsportivos {
    
    public abstract Produto factoryMethod();
    
    public void criarMostrar(){
        Produto produto = this.factoryMethod();
        System.out.println(produto);
    }
}
