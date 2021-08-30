module com.calculadorafx {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.base;

    opens com.calculadorafx to javafx.fxml;
    exports com.calculadorafx;
}
