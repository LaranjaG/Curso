/*
 *
 */

package absFac;

import absFac.enuns.EtniaEnum;
import absFac.enuns.FactoryEnum;
import absFac.enuns.IdiomaEnum;
import absFac.etnia.Etnia;
import absFac.factory.ProviderFactory;
import absFac.idioma.Idioma;

/**
 *
 * @author Laranja
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Etnia etnia = (Etnia) ProviderFactory.getFactory(FactoryEnum.ETNIA).criar(EtniaEnum.ARABES);
        
        Idioma idioma = (Idioma) ProviderFactory.getFactory(FactoryEnum.IDIOMA).criar(IdiomaEnum.ARABE);
        
        String resultado = String.format("Grupo etnico: %s \nIdioma: %s \nPopulação: %s", etnia.getEtinia(), idioma.getIdioma(), etnia.populacao());
        
        System.out.println(resultado);
    }

}
