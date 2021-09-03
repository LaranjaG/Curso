using jogoXadrez.tabuleiro;

namespace jogoXadrez.xadrez
{
    public class Rei : Peca 
    {
        public Rei(Tabuleiro tab, Cor cor) : base(tab, cor){

        }

        public override string ToString(){
            return "R";
        }
    }
}