/*
 *
 */

package certo.lsp;

import certo.lsp.Implements.Correr;
import certo.lsp.Implements.Nadar;
import certo.lsp.Implements.Voar;

/**
 *
 * @author Laranja
 */

public class Pato extends Ave implements Voar, Nadar, Correr{

    @Override
    public void voar() {
        //Patos podem voar
    }

    @Override
    public void nadar() {
        //Patos podem nadar
    }

    @Override
    public void correr() {
        //Patos podem correr
    }

}
