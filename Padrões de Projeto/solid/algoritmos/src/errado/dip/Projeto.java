/*
 *
 */

package errado.dip;

/**
 *
 * @author Laranja
 */

public class Projeto {
    //E nosso projeto usa ambos (back e front) ao longo do processo de desenvolvimento
    private DesenvolvedorBackEnd backDev = new DesenvolvedorBackEnd();
    private DesenvolvedorBackEnd backDev2 = new DesenvolvedorBackEnd();
    private DesenvolvedorFrontEnd frontDev = new DesenvolvedorFrontEnd();
    private AdmBD dba = new AdmBD();
    
    public void implementar(){
        backDev2.escreveJava();
        backDev.escreveJava();
        frontDev.escreveJavaScript();
        dba.escreveSQL();
    }
    
}
