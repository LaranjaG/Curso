/*
 *
 */

package decorator;

import interfaces.IAssinatura;

/**
 *
 * @author Laranja
 */

public class PacoteI extends Pacote{

    public PacoteI(IAssinatura iPrduct) {
        super(iPrduct);
    }

    @Override
    public String getServico() {
        return super.getServico() + "\nPacote I";
    }

    @Override
    public double getPrice() {
        return super.getPrice() + 19.99;
    }

    @Override
    public String getDescricao() {
        return super.getDescricao() + "\n - Vídeos em vários dispositivos.";
    }

}