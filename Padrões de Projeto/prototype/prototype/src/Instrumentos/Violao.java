/*
 *
 */

package Instrumentos;

import interfaces.Prototype;


/**
 *
 * @author Laranja
 */

public class Violao implements Prototype<Violao>{
    
    private String tipoViolao;
    private String cor;
    private String tipoCordoamento;
    private double preco;
    private double tamanhoBraco;
    private String tipoTarraxa;
    private String tipoMaterialCorpo;

    public Violao(String tipoViolao, String cor, String tipoCordoamento, double preco, double tamanhoBraco, String tipoTarraxa, String tipoMaterialCorpo) {
        this.tipoViolao = tipoViolao;
        this.cor = cor;
        this.tipoCordoamento = tipoCordoamento;
        this.preco = preco;
        this.tamanhoBraco = tamanhoBraco;
        this.tipoTarraxa = tipoTarraxa;
        this.tipoMaterialCorpo = tipoMaterialCorpo;
    }    
    
    public Violao(Violao violao) {
        this.tipoViolao = violao.tipoViolao;
        this.cor = violao.cor;
        this.tipoCordoamento = violao.tipoCordoamento;
        this.preco = violao.preco;
        this.tamanhoBraco = violao.tamanhoBraco;
        this.tipoTarraxa = violao.tipoTarraxa;
        this.tipoMaterialCorpo = violao.tipoMaterialCorpo;
    }

    public Violao() {
        
    }
    
    @Override
    public Violao clone(){
        return new Violao(this);
    }
    
    public String detalhesProduto() {
        return "Violao: \nTipo violão: " + this.tipoViolao + "\nTipo cordoamento: " + this.tipoCordoamento + "\nCor: " + this.cor + "\nPreço: " + this.preco + "\nMaterial Corpo: " + this.tipoMaterialCorpo + "\nTipo Tarraxa: " + this.tipoTarraxa;
    }

  //Getters & Setters
    public String getTipoViolao() {
        return tipoViolao;
    }

    public void setTipoViolao(String tipoViolao) {
        this.tipoViolao = tipoViolao;
    }
    
    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getTipoCordoamento() {
        return tipoCordoamento;
    }

    public void setTipoCordoamento(String tipoCordoamento) {
        this.tipoCordoamento = tipoCordoamento;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public double getTamanhoBraco() {
        return tamanhoBraco;
    }

    public void setTamanhoBraco(double tamanhoBraco) {
        this.tamanhoBraco = tamanhoBraco;
    }

    public String getTipoTarraxa() {
        return tipoTarraxa;
    }

    public void setTipoTarraxa(String tipoTarraxa) {
        this.tipoTarraxa = tipoTarraxa;
    }

    public String getTipoMaterialCorpo() {
        return tipoMaterialCorpo;
    }

    public void setTipoMaterialCorpo(String tipoMaterialCorpo) {
        this.tipoMaterialCorpo = tipoMaterialCorpo;
    }
    
}