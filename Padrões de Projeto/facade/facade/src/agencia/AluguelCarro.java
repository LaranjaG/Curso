/*
 *
 */

package agencia;

/**
 *
 * @author Laranja
 */

public class AluguelCarro {
    private String modelo;
    private double valorDiaria;

    public AluguelCarro() {
        this.modelo = "Fusca Azul";
        this.valorDiaria = 300;
    }

    @Override
    public String toString() {
        return "Carro alugado: \nModelo: " + this.modelo + "\nValor diaria: " + this.valorDiaria ;
    }
    
  //Getters & Setters  
    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public double getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(double valorDiaria) {
        this.valorDiaria = valorDiaria;
    }   
}