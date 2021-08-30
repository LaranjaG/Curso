/*
 *
 */

package errado.isp;

import certo.isp.*;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Laranja
 */

public interface Operacoes {
    void sacar();
    void render();
    void depositar();    
    void trasferir();
    double verificarSaldo();
    void sacarChequeEspecial();
    Map<Date, List<String>> extrato();
}
