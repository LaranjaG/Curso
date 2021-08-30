/*
 *
 */

package certo.ocp;

/**
 *
 * @author Laranja
 */

public abstract class Saque {
  //Atributo  
    private double saldo;
    
  //Metodo  
    public abstract void saque(double valor) throws Exception;

  //Getters & Setters  
    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
}
