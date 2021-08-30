/*
 *
 */

package builder;

import Instrumentos.Violao;
import interfaces.Builder;

/**
 *
 * @author Laranja
 */

public class ConcreteBuilder implements Builder{

    protected Violao violao = new Violao();
    
    @Override
    public Violao makeViolao(String tipo, String cor, String corda, double preco, int braco, String pino, String material) {
        this.violao = new Violao(tipo, cor, corda, preco, braco, pino, material);
        return this.violao;
    }

    @Override
    public void reset() {
        this.violao = new Violao();
    }
    
    @Override
    public Violao getViolao() {
        return violao;
    }
}
