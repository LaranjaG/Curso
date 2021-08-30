package absFac.factory;

/*
 *
 */



/**
 *
 * @author Laranja
 */
//tem q passar uma classe e um enum, da forma que ai é criado é o mais generico possivel
public interface AbstractFactory<O, E extends Enum<E>> { //Fabrica abstrata que recebe um tipo generico O
    O criar(E tipo);
}
