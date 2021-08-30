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

public interface OperacoesBasicas {
    void sacar();
    void depositar();    
    void trasferir();
    double verificarSaldo();
    Map<Date, List<String>> extrato();
}
