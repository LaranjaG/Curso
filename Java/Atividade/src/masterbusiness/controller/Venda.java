/*
 *
 */

package masterbusiness.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Objects;

/**
 *
 * @author Laranja
 */

public class Venda {
    int pkVenda;
    Cliente cliente;
    Funcionario vendedor;
    int numero;
    Date data;
    ArrayList<VendaItem> vendaItem;

    public Venda(int pkVenda, Cliente cliente, Funcionario vendedor, int numero, Date data, ArrayList<VendaItem> vendaItem) {
        this.pkVenda = pkVenda;
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.numero = numero;
        this.data = data;
        this.vendaItem = vendaItem;
    }

    public Venda(Cliente cliente, Funcionario vendedor, int numero, Date data, ArrayList<VendaItem> vendaItem) {
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.numero = numero;
        this.data = data;
        this.vendaItem = vendaItem;
    }   

    public Venda(Cliente cliente, Funcionario vendedor, int numero, Date data) {
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.numero = numero;
        this.data = data;
    }
    
    public int getPkVenda() {
        return pkVenda;
    }

    public void setPkVenda(int pkVenda) {
        this.pkVenda = pkVenda;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Funcionario getVendedor() {
        return vendedor;
    }

    public void setVendedor(Funcionario vendedor) {
        this.vendedor = vendedor;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }
    
    public ArrayList<VendaItem> getVendaItem() {
        if(this.vendaItem == null){
            this.vendaItem = new ArrayList<>();
        }
        return vendaItem;
    }

    public void setVendaItem(ArrayList<VendaItem> vendaItem) {
        this.vendaItem = vendaItem;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 59 * hash + this.pkVenda;
        hash = 59 * hash + Objects.hashCode(this.cliente);
        hash = 59 * hash + Objects.hashCode(this.vendedor);
        hash = 59 * hash + this.numero;
        hash = 59 * hash + Objects.hashCode(this.data);
        hash = 59 * hash + Objects.hashCode(this.vendaItem);
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
        final Venda other = (Venda) obj;
        if (this.pkVenda != other.pkVenda) {
            return false;
        }
        if (this.numero != other.numero) {
            return false;
        }
        if (!Objects.equals(this.cliente, other.cliente)) {
            return false;
        }
        if (!Objects.equals(this.vendedor, other.vendedor)) {
            return false;
        }
        if (!Objects.equals(this.data, other.data)) {
            return false;
        }
        if (!Objects.equals(this.vendaItem, other.vendaItem)) {
            return false;
        }
        return true;
    }
    
    @Override
    public String toString() {
        return "Venda{" + "pkVenda=" + pkVenda + ", cliente=" + cliente + ", vendedor=" + vendedor + ", numero=" + numero + ", data=" + data + ", vendaItem=" + vendaItem + '}';
    }
    
    public void print(){
        System.out.println(this);
        
        for (VendaItem venda: vendaItem){
            venda.print();
        }
    }   
}