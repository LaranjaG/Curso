/* 
 *
 */

package interfaces;

/**
 *
 * @author Laranja
 */
public interface Observer <T> {
    public void update(String up);
    public void subscriptionService(T service);
    public boolean getNotify();
    
    public void deleteSubscriptionService();
}
