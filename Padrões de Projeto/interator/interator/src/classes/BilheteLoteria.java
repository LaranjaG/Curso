/*
 *
 */

package classes;

import java.util.ArrayList;
import java.util.Iterator;

/**
 *
 * @author Laranja
 */

public class BilheteLoteria implements Iterator<Integer> {

	private ArrayList<Integer> numerosBilhete;
	private int posicao = 0;

	public BilheteLoteria(ArrayList<Integer> numerosBilhete) {
		this.numerosBilhete = numerosBilhete;
	}

	public Integer next() {
            int numero = numerosBilhete.get(posicao);
            posicao++;
            return numero;
	}

	public boolean hasNext() {
            if (posicao >= numerosBilhete.size() || numerosBilhete.get(posicao) == null) {
                return false;
            }
            return true;
	}

}
