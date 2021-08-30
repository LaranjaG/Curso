/*
 * 
 */
package cliente;

/**
 *
 * @author raysl
 */
public enum TipoCliente {
    BRONZE(new Cliente("Bronze", 3)),
    PRATA(new Cliente("Prata", 5)),
    OURO(new Cliente("Ouro", 7)),
    PLATINA(new Cliente("Platina", 10));
    
    private Cliente cliente;
    
    TipoCliente(Cliente cliente){
        this.cliente = cliente;
    };

    public Cliente getCriator() {
        return this.cliente;
    }
    
}