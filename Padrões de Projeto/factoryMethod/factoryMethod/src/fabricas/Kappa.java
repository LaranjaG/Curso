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

public class Kappa extends FabricaProdutosEsportivos{
    @Override
    public Produto factoryMethod() {
        return new CamisaEsportiva("Flamengo");
    }
}
