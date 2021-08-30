/*
 *
 */

package absFac.factory;

import absFac.enuns.IdiomaEnum;
import absFac.idioma.Idioma;


/**
 *
 * @author Laranja
 */

public class IdiomaFactory implements AbstractFactory<Idioma, IdiomaEnum>{

    @Override
    public Idioma criar(IdiomaEnum idioma) {
        return idioma.getInstancia();
    }

}
