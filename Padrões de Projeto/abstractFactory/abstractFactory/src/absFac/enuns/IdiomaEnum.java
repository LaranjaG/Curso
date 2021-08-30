/*
 * 
 */
package absFac.enuns;

import absFac.idioma.Arabe;
import absFac.idioma.Guarani;
import absFac.idioma.Idioma;
import absFac.idioma.Ingles;


/**
 *
 * @author raysl
 */
public enum IdiomaEnum implements Instanciador<Idioma> {
    INGLES(new Ingles()), // FRANCES, CREE
    ARABE(new Arabe()),
    GUARANI(new Guarani()); // PORTUGUES, ESPANHOL, ARUAQUE, GUARANI;
    
    private Idioma idioma;

  //Construtor
    IdiomaEnum(Idioma idioma){
        this.idioma = idioma;
    }
    
    @Override
    public Idioma getInstancia() {
        return this.idioma;
    }
}
