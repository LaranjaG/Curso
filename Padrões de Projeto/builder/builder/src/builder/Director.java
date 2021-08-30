/*
 *
 */

package builder;

import interfaces.Builder;

/**
 *
 * @author Laranja
 */

public class Director {
    
    private static Builder builder = new ConcreteBuilder();
    
    public static Builder constructClassico(){
        Director.builder.makeViolao("Classico", "Rosa", "Nylon", 300, 30, "grossa", "madeira");
        return builder;
    }
    
    public static Builder constructFolk(){
        Director.builder.makeViolao("Folk", "Preto", "Aço", 400, 40, "metalica", "madeira");
        return builder;
    }
    
    public static Builder constructFlet(){
        Director.builder.makeViolao("Flet", "Azul", "Nylon", 500, 50, "metalica", "madeira");
        return builder;
    }
    
    public static Builder constructJumbo(){
        Director.builder.makeViolao("Jumbo", "Marsala", "Aço", 600, 60, "metalica", "madeira");
        return builder;
    }
    
    public static Builder constructSeteCordas(){
        Director.builder.makeViolao("7 Cordas", "Nude", "Aço", 700, 70, "metalica", "madeira");
        return builder;
    }

    public static Builder constructDozeCordas(){
        Director.builder.makeViolao("12 Cordas", "Verde militar", "Aço", 800, 70, "metalica", "madeira");
        return builder;
    }
    
    public static Builder constructZero(){
        Director.builder.makeViolao("Zero", "Branco", "Aço", 900, 70, "metalica", "madeira");
        return builder;
    }
    
    public static Builder constructDuploZero(){
        Director.builder.makeViolao("Duplo Zero", "Thai dai", "Aço", 950, 70, "metalica", "madeira");
        return builder;
    }
    
    public static Builder constructTriploZero(){
        Director.builder.makeViolao("Triplo Zero", "Verde água", "Aço", 1000, 70, "metalica", "madeira");
        return builder;
    }
}
