/*
 *
 */

package masterbusiness.controller;

import java.util.Objects;

/**
 *
 * @author Laranja
 */

public class VendaItem {
    private int pkVendaItem;
    private int fkVenda;
    private Produto produto;
    private int quantidade;
    private double valorUnitario;

    public VendaItem(int pkVendaItem, int venda, Produto produto, int quantidade, double valorUnitario) {
        this.pkVendaItem = pkVendaItem;
        this.fkVenda = venda;
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }

    public VendaItem(int venda, Produto produto, int quantidade, double valorUnitario) {
        this.fkVenda = venda;
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }    
    

    public int getPkVendaItem() {
        return pkVendaItem;
    }

    public void setPkVendaItem(int pkVendaItem) {
        this.pkVendaItem = pkVendaItem;
    }

    public int getFkVenda() {
        return fkVenda;
    }

    public void setFkVenda(int fkVenda) {
        this.fkVenda = fkVenda;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getValorUnitario() {
        return valorUnitario;
    }

    public void setValorUnitario(double valorUnitario) {
        this.valorUnitario = valorUnitario;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 97 * hash + this.pkVendaItem;
        hash = 97 * hash + Objects.hashCode(this.produto);
        hash = 97 * hash + this.quantidade;
        hash = 97 * hash + (int) (Double.doubleToLongBits(this.valorUnitario) ^ (Double.doubleToLongBits(this.valorUnitario) >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final VendaItem other = (VendaItem) obj;
        if (this.pkVendaItem != other.pkVendaItem) {
            return false;
        }
        if (this.quantidade != other.quantidade) {
            return false;
        }
        if (Double.doubleToLongBits(this.valorUnitario) != Double.doubleToLongBits(other.valorUnitario)) {
            return false;
        }
        if (!Objects.equals(this.produto, other.produto)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "VendaItem{" + "pkVendaItem=" + pkVendaItem + ", fkVenda=" + fkVenda + ", produto=" + produto + ", quantidade=" + quantidade + ", valorUnitario=" + valorUnitario + '}';
    }
    
    public void print(){
        System.out.println(this);
    }
}