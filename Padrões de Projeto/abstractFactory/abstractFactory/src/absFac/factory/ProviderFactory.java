/*
 *
 */

package absFac.factory;

import absFac.enuns.FactoryEnum;


/**
 *
 * @author Laranja
 */

public class ProviderFactory {
    public static AbstractFactory getFactory(FactoryEnum factory){
        return factory.getInstancia();
    }
}
