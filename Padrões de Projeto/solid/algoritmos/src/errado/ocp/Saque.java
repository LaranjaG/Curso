/*
 *
 */

package errado.ocp;

/**
 *
 * @author Laranja
 */

public class Saque {
    private double saldo;
    private double chequeEspecialSaldo;
    private double taxa;
    
    public void Saque(double valor, TipoConta tipo, boolean chequeEspecial) throws Exception{
        if(tipo == TipoConta.POUPANCA){
            if(valor <= this.saldo){
                this.saldo -= valor; //Executa o saque
            } else{
                throw new Exception("Não foi possível realizar saque! Saldo insuficiente!"); 
            }
        } else if(tipo == TipoConta.ESPECIAL){
            double total = valor + this.taxa;
            if(total <= this.saldo){
                this.saldo -= total; //Executa o saque
            } else if(valor <= (this.chequeEspecialSaldo + this.saldo)){   
                if(chequeEspecial){
                    this.saldo -= valor;
                }    
            } else{
                throw new Exception("Não foi possível realizar saque! Saldo insuficiente!");
            }
        } else{
            throw new Exception("Tipo de conta não encontrado");
        }
    }
}