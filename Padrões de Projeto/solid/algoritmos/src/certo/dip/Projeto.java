/*
 *
 */

package certo.dip;

import java.util.List;

/**
 *
 * @author Laranja
 */

public class Projeto {
    //O resultado é que a classe Project não depende de módulos de nível inferior, mas sim de abstrações.
    //Além disso, os módulos de baixo nível e seus detalhes dependem de abstrações.
    
    private List<Desenvolvedor> devs;
    
    public Projeto(List<Desenvolvedor> devs){
        this.devs = devs;
    }
    
    public void implementos(){
        devs.forEach(item -> item.desenvolver());
    }
}
