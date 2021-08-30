/*
 *
 */

package absFac.enuns;

import absFac.etnia.Arabes;
import absFac.etnia.Aruaques;
import absFac.etnia.Cree;
import absFac.etnia.Etnia;

/**
 *
 * @author Laranja
 */

public enum EtniaEnum implements Instanciador<Etnia> {
    ARABES(new Arabes()),
    ARUAQUES(new Aruaques()),
    CREE(new Cree());
    
    private Etnia etinia;
    
  //Construtor  
    EtniaEnum(Etnia etinia){
        this.etinia = etinia;
    }
    
    @Override
    public Etnia getInstancia() {
        return this.etinia;
    }

}
