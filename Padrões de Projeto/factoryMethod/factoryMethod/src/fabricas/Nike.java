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

public class Nike extends FabricaProdutosEsportivos{

    @Override
    public Produto factoryMethod() {
        return new CamisaEsportiva("Brasil");
    }

}
