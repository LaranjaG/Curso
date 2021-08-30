/*
 *
 */

package singleton;

/**
 *
 * @author Laranja
 */

public class Login {
    private static String email;
    private static String senha;
    private static Login instanciaUnica;
    private boolean statusLog;
    
    public static Login getInstace(String email, String senha){ //Não permite criar uma nova instancia do objeto login
        if(instanciaUnica == null){
            synchronized (Login.class){ //Checa novamente antes de criar o objeto de forma sincrona se já foi ou não instanciado
                if(instanciaUnica == null){
                    instanciaUnica = new Login();
                    Login.email = email;
                    Login.senha = senha;
                }
            }

        }
        
        return instanciaUnica;
    }
    
    public String logar (String email, String senha){
        boolean usuario = (this.email.equals(email) && this.senha.equals(senha));
        if(usuario && !statusLog){
            setStatus();
            return "Usuário Admin logado";
        } else if(usuario && statusLog){
            return "Usuário já está logado";
        }
        return "Como você não sabe o email e a senha?!";
    }
    
    public void logout(){
        setStatus();
    }
    
    private void setStatus(){
        statusLog = !statusLog;
    }
}
