/*
 *
 */

package verificadores;

import login.Login;

/**
 *
 * @author Laranja
 */

public class CaractereEspecial extends Verificador{

    public CaractereEspecial() {
        super("[\\W]");
    }

    @Override
    public Login handle(Login login) {
        if(match(login.getSenha())){
            super.handle(login);
            //Essa mensagem só será verdade se este item for o ultimo da cadeia
            System.out.println("O ultimo item a ser executado! Login válido!"); 
            return login;
        }
        
        System.out.println("Não há caractere especial na senha!");
        return super.handle(login);
    }
    
}