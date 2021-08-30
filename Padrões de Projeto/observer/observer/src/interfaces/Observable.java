/* 
 *
 */

package interfaces;

/**
 *
 * @author Laranja
 */
public interface Observable <T> {
    public void subscribe(T user);
    public void unsubscribe(T user);
    public void notification();
    
    public void upContent(String conteudo);
}
