package com.calculadorafx;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        scene = new Scene(loadFXML("primary"), 600, 600);
        stage.setScene(scene);//atribuindo uma scene ao palco
        stage.show();//apresnta o palco "abre as cortinas"
    }
    //comuta entre várias 'telas' ou janelas ou 'cenas'
    static void setNovaCena(String fxml) throws IOException {
        scene.setRoot(loadFXML(fxml));
    }
    //carrega um fxml qualquer, você não preciasa informar o tipo do arquivo
    private static Parent loadFXML(String fxml) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource(fxml + ".fxml"));
        return fxmlLoader.load();
    }

    public static void main(String[] args) {
        launch();
    }

}