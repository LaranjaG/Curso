package com.calculadorafx;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

public class CalculadoraController {

    private String opr;
    private int num1;
    private int num2;
    private int aux;
    private int result;
    private boolean info = true;
    
    @FXML
    private TextField tfVisor;
    
    @FXML
    private Button btNada;


    @FXML
    void calcule(ActionEvent event) {
        num2 = Integer.valueOf(tfVisor.getText());
        if(num2 == 0){
            info = false;
            result = 1;
        } else {
            result = 1;
            info = true;
        }
        
        switch (opr) {
            case "+":
                if(num1 == 0){
                    num1 = num2;
                    num2 = aux;
                }
                result = num1 + num2;
                break;
            case "-":
                if(num1 == 0){
                    num1 = num2;
                    num2 = aux;
                }

                result = num1 - num2;
                break;        
            case "*":
                if(num1 == 0){
                    num1 = num2;
                    num2 = aux;
                }
                result = num1 * num2;
                break;
            case "/":
                if(num1 == 0){
                    num1 = num2;
                    num2 = aux;
                }

                result = num1 / num2;
                break;
        }
        
        tfVisor.setText(String.valueOf(result));

        if(result == 0 && num2 != 0){
            aux = num2;
        } else{
            if(aux != 0 && num2 == 0 && info){
                aux = aux;
            } else if(info && num2 == 0){ //Caso o número somado seja 0 + num2
                    aux = num1;
            } else{
                aux = num2;
            }
        }
        
        num1 = 0;
        num2=0;
    }
    
    @FXML
    void digite(ActionEvent event) {
        if (tfVisor.getText().equals("0")){
            tfVisor.setText("");
        }
        
        tfVisor.setText(tfVisor.getText() + ((Button)  event.getSource()).getText());
    }
    
    @FXML
    void resetDados(ActionEvent event){
        
        opr = "";
        num1 = 0;
        num2 = 0;
        aux = 0;
        result = 0;
        info = true;

        limpaVisor(null);
    }

    @FXML
    void limpaVisor(ActionEvent event) {
        tfVisor.setText("0");             
    }

    @FXML
    void setOpr(ActionEvent event) {
        
        num1 = Integer.valueOf(tfVisor.getText());
        opr = ((Button)  event.getSource()).getText();//retorna o texto do botão que originou a ação
        limpaVisor(null);
    }
    
    
 @FXML
    void naoFacaNada(ActionEvent event) {
        btNada.setText("AHHAHAHAHAHA");        
    }    

}