/*
 *
 */

package certo.isp;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Laranja
 */

public class ContaPoupanca implements OperacoesPoupanca {  

    @Override
    public void render() {
        //..
    }

    @Override
    public void sacar() {
        //..
    }

    @Override
    public void depositar() {
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
    public void trasferir() {
        //..
    }
}