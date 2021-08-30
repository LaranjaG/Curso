package com.calculadorafx;

import java.io.IOException;
import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class MeuControladorAmado {

    
    @FXML
    private Label lblTitulo;//precisa ter exatamente o mesmo nome definido do fx:id no scene builder (fxml)
    
    
    
    @FXML
    private void switchToVovo() throws IOException {
        App.setNovaCena("calculadora");
    }
    
    @FXML
    private void mudaTexto(){
        lblTitulo.setText("PARABÉNS, VOCÊ DESCOBRIU UM EASTER EGG");
        lblTitulo.setPrefWidth(500);
    }
}
