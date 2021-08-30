/*
 *
 */

package certo.ocp;

import certo.ocp.Saque;

/**
 *
 * @author Laranja
 */

public class SaqueContaEspecial extends Saque{
    private double chequeEspecial;
    private double taxa;

    @Override
    public void saque(double valor) throws Exception {
        double total = getSaldo() + this.taxa;
        
        if(total <= getSaldo()) //Taxa
            setSaldo(total - getSaldo()); //Executa o saque
        else
            throw new Exception("Não foi possível realizar saque! Saldo insuficiente!");
    }
    
    public void saqueChequeEspecial(double valor) throws Exception{
        if(valor <= (this.chequeEspecial + getSaldo()))
            setSaldo(getSaldo() - valor);
        else
            throw new Exception("Saldo do cheque especial não cobre o valor que deseja retirar! Saldo insuficiente!");
    }

}
