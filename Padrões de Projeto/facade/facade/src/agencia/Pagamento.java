/*
 *
 */

package agencia;

/**
 *
 * @author Laranja
 */

public class Pagamento {
    private String formaPagamento;

    public Pagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }
    
  //Getters & Setters
    public String getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }
}