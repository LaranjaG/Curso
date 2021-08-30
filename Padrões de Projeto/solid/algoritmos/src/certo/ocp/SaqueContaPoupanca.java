/*
 *
 */

package certo.ocp;

import certo.ocp.Saque;

/**
 *
 * @author Laranja
 */

public class SaqueContaPoupanca extends Saque{

    @Override
    public void saque(double valor) throws Exception{
        if(valor <= getSaldo())
            setSaldo(getSaldo() - valor); //Executa o saque
         else
            throw new Exception("Não foi possível realizar saque! Saldo insuficiente!");
    }
    
}
