/*
 *
 */

package produtos;

import java.util.ArrayList;

/**
 *
 * @author Laranja
 */

public class Box implements Composite{

    private ArrayList<Composite> children = new ArrayList<>();
    
    @Override
    public double getPrice() {
        double soma = 0;
        
        for(Composite item : this.children){
            soma += item.getPrice();
        }
        
        return soma; 
    }
    
    public void verBox(){
        this.children.forEach(item ->{
            if(item.getClass().equals(Produto.class)){
                Produto produto = (Produto) item;
                System.out.println("Item: " + produto.getName() + " - Preço: R$ " + produto.getPrice());
            }
        });
    }
    
    public void add(Composite item){
        this.children.add(item);
    }
    
    public void remove(Composite item){
        this.children.remove(item);
    }

  //Setter
    public void setChildren(ArrayList<Composite> children) {
        this.children = children;
    }
}
