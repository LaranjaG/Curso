/*
 *
 */

package fabricas;

import produto.CamisaEsportiva;
import produto.Produto;

/**
 *
 * @author Laranja
 */

public class Puma extends FabricaProdutosEsportivos{

    @Override
    public Produto factoryMethod() {
        return new CamisaEsportiva("Botafogo");
    }

}
