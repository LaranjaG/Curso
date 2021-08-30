/*
 *
 */

package errado.lsp;

/**
 *
 * @author Laranja
 */

public class Ave { //Abstração indevida da classe ave
    public void voar(){}; //Esta classe afirma que ser for uma ave pode voar
    public void cantar(){}//Esta classe afirma que toda ave pode cantar
    /**
     * As cegonhas não cantam pois não possuem siringe, logo na classe 
     */
}
