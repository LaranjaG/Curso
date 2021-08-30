/*
 *
 */

package absFac.factory;

import absFac.enuns.EtniaEnum;
import absFac.etnia.Etnia;

/**
 *
 * @author Laranja
 */

public class EtniaFactory implements AbstractFactory<Etnia, EtniaEnum>{

    @Override
    public Etnia criar(EtniaEnum etnia) {
        return etnia.getInstancia();
    }
}
