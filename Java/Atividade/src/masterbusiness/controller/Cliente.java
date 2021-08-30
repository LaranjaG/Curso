/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package masterbusiness.controller;

/**
 *
 * @author lcarl
 */
public class Cliente extends PessoaFisica{

    public Cliente(String cpf, int pk, String nome) {
        super(cpf, pk, nome);
    }

    public Cliente(String cpf, String nome) {
        super(cpf, nome);
    }
    
}
