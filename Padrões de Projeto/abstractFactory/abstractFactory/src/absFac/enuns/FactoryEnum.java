/*
 *
 */
package absFac.enuns;

import absFac.factory.AbstractFactory;
import absFac.factory.EtniaFactory;
import absFac.factory.IdiomaFactory;

/**
 *
 * @author raysl
 */
public enum FactoryEnum implements Instanciador<AbstractFactory>{

    ETNIA(new EtniaFactory()), 
    IDIOMA(new IdiomaFactory());
        
    private AbstractFactory factory;
    
    FactoryEnum(AbstractFactory factory){
        this.factory = factory;
    }

    @Override
    public AbstractFactory getInstancia() {
        return factory;
    }
    
}
