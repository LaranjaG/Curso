using jogoXadrez.tabuleiro;

namespace jogoXadrez.xadrez
{
    public class PartidaXadrez
    {
        public Tabuleiro tab {get; private set;}
        private int turno;
        private Cor jogadorAtual;
        public bool terminada {get; private set;}

        public PartidaXadrez(){
            tab = new Tabuleiro();
            turno = 1;
            jogadorAtual = Cor.Branca;
            terminada = false;
            colocarPecas();
        }

        public void executarMovimetno(Posicao origem, Posicao destino){
            Peca p = tab.retirarPeca(origem);
            p.incrementarQtdMovimentos();
            Peca pecaCapturada = tab.retirarPeca(destino);
            tab.colocarPeca(p, destino);
        }

        private void colocarPecas(){
            tab.colocarPeca(new Torre(tab, Cor.Branca), new PosicaoXadrez('c', 1).toPosicao());
            
        }
    }
}