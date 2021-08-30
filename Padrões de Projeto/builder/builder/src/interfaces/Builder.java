/* 
 *
 */

package interfaces;

import Instrumentos.Violao;

/**
 *
 * @author Laranja
 */
public interface Builder {
    public Violao makeViolao(String tipo, String cor, String corda, double preco, int braco, String pino, String material);
    public void reset();
    public Violao getViolao();
}
