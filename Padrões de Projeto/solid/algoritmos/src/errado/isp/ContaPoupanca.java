/*
 *
 */

package errado.isp;

import java.util.Date;
import java.util.List;
import java.util.Map;


/**
 *
 * @author Laranja
 */

public class ContaPoupanca implements Operacoes {

    @Override
    public void sacar() {
        //..
    }

    @Override
    public void render() {
        //..
    }

    @Override
    public void depositar() {
        //..
    }

    @Override
    public void trasferir() {
        //..
    }

    @Override
    public double verificarSaldo() {
        //..
        
        return 0;
    }

    @Override
    public Map<Date, List<String>> extrato() {
        //..
        return null;
    }

    @Override
    public void sacarChequeEspecial() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}