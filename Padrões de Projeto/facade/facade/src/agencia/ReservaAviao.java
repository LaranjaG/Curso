/*
 *
 */

package agencia;


/**
 *
 * @author Laranja
 */

public class ReservaAviao extends Reserva{
    private String nomeEmpresa;

    public ReservaAviao(String data) {
        super(data, 600);
        this.nomeEmpresa = "Avião sem asa";
    }
    
    @Override
    public String toString() {
        return "Companhia Áerea : \nNome:" + this.getNomeEmpresa() + " \nValor: " + this.getValor();
    }
    
  //Getters & Setters
    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }
}