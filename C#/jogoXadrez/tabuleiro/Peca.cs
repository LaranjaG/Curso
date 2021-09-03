namespace jogoXadrez.tabuleiro
{
    public class Peca
    {
        public Posicao posicao {get; set;} //Uma peça tem uma posição
        public Cor cor {get; protected set;}
        public int qtdMov {get; protected set;}
        public Tabuleiro tab {get; set;}
        
        public Peca(Tabuleiro tab, Cor cor)
        {
            this.posicao = null;
            this.tab = tab;
            this.cor = cor;
            this.qtdMov = 0;
        }

        public void incrementarQtdMovimentos(){
            qtdMov++;
        }
    } 
}