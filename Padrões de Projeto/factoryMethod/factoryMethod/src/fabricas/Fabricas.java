package fabricas;

import fabricas.Adidas;
import fabricas.FabricaProdutosEsportivos;
import fabricas.Kappa;
import fabricas.Nike;
import fabricas.Puma;
import fabricas.Umbro;

/*
 *
 */

/**
 *
 * @author Laranja
 */public enum Fabricas {
    NIKE(new Nike()),
    ADIDAS(new Adidas()),
    PUMA(new Puma()),
    UMBRO(new Umbro()),
    KAPPA(new Kappa());
    
    private FabricaProdutosEsportivos criator;
    
    Fabricas(FabricaProdutosEsportivos criator){
        this.criator = criator;
    };

    public FabricaProdutosEsportivos getCriator() {
        return criator;
    }
}