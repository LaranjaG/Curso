using jogoXadrez.tabuleiro;

namespace jogoXadrez.xadrez
{
    public class Rei : Peca 
    {
        public Rei(Tabuleiro tab, Cor cor) : base(tab, cor){

        }

        private bool podeMover(Posicao pos)
        {
            Peca p = tab.peca(pos);
            return p == null || p.cor != this.cor; //se a posição estiver vazia ou se cor é diferente da cor da peça que está indo
        }

        public override bool[,] movimentosPossiveis(){
            bool[,] mat = new bool[tab.linhas, tab.colunas];

            Posicao pos = new Posicao(0, 0);

            //Acima
            pos.definirValores(posicao.linha -1, posicao.coluna);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            //ne
            pos.definirValores(posicao.linha -1, posicao.coluna + 1);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            //direita
            pos.definirValores(posicao.linha, posicao.coluna + 1);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            //esquerda
            pos.definirValores(posicao.linha, posicao.coluna - 1);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            //se
            pos.definirValores(posicao.linha + 1, posicao.coluna - 1);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            //abaixo
            pos.definirValores(posicao.linha + 1, posicao.coluna);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            //no
            pos.definirValores(posicao.linha - 1, posicao.coluna - 1);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            //so
            pos.definirValores(posicao.linha + 1, posicao.coluna + 1);
            if(tab.posicaoValida(pos) && podeMover(pos)){ //Verifica se a posição está livre ou com alguma peça adversária
                mat[pos.linha, pos.coluna] = true;
            }

            return mat;

        }

        public override string ToString(){
            return "R";
        }
    }
}