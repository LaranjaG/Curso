/*
 *
 */

package agencia;


/**
 *
 * @author Laranja
 */

public class ReservaHotel extends Reserva{
    private String nomeHotel;
    private int qtdDias;

    public ReservaHotel(String data, int qtdDias) {
        super(data, 200);
        this.nomeHotel = "Hotel sem chão";
        this.qtdDias = qtdDias;
    }

    @Override
    public String toString() {
        return "Hotel: \nNome:" + this.getNomeHotel() + " \nQuantidade dias: " + this.getQtdDias() + " \nValor: " + this.getValor();
    }

  //Getters & Setters  
    public String getNomeHotel() {
        return nomeHotel;
    }

    public void setNomeHotel(String nomeHotel) {
        this.nomeHotel = nomeHotel;
    }

    public int getQtdDias() {
        return qtdDias;
    }

    public void setQtdDias(int qtdDias) {
        this.qtdDias = qtdDias;
    }

    
}
