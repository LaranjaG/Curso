/*
 *
 */

package produtos;

/**
 *
 * @author Laranja
 */

public class Produto implements Composite{
    private String name;
    private double preco;

    public Produto(String name, double preco) {
        this.name = name;
        this.preco = preco;
    }
    
    @Override
    public double getPrice() {
        return this.preco;
    }
    
  //Getter  
    public String getName() {
        return this.name;
    }
}
