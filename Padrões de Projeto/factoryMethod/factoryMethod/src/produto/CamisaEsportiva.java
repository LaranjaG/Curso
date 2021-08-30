/*
 *
 */

package produto;

/**
 *
 * @author Laranja
 */

public class CamisaEsportiva implements Produto{

    private String time;
    
    public CamisaEsportiva(String time){
        this.time = time;
    }
    
    @Override
    public void camisaEsportiva(String fabrica) {
        System.out.println("A fabrica "+ fabrica +" produz camisas esportivas do " + this.time);
    }

}
