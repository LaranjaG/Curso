/*
 *
 */

package classes;

import classes.Streaming;
import interfaces.Observer;

/**
 *
 * @author Laranja
 */

public class User implements Observer<Streaming>{
    private boolean notify = true;
    private Streaming service;
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    @Override
    public void update(String up) {
        System.out.println("Hey " + this.name + " temos novidades quentinha para você!\n" + up);
    }
    
    @Override
    public void subscriptionService(Streaming service){
        this.service = service;
    }
    
    @Override
    public void deleteSubscriptionService() {
        this.service = null;
    }
    
    @Override
    public boolean getNotify(){
        return this.notify;
    }
    
  //Getters & Setters  
    public Streaming getService() {
        return service;
    }
    
    public void setNotify() {
        this.notify = !this.notify;
    }
}
