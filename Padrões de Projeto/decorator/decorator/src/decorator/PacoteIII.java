/*
 *
 */

package decorator;

import interfaces.IAssinatura;

/**
 *
 * @author Laranja
 */

public class PacoteIII extends Pacote{

    public PacoteIII(IAssinatura pacote) {
        super(pacote);
    }

    @Override
    public String getServico() {
        return super.getServico() + "\nPacote III";
    }

    @Override
    public double getPrice() {
        return super.getPrice() + 29.99;
    }

    @Override
    public String getDescricao() {
        return super.getDescricao() + "\n - Caixa surpresa com produtos relacionados a filmes e série.";
    }
    
}