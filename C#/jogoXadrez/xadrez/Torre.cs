using jogoXadrez.tabuleiro;

namespace jogoXadrez.xadrez
{
    public class Torre : Peca
    {
        public Torre(Tabuleiro tab, Cor cor) : base(tab, cor){

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
            pos.definirValores(posicao.linha - 1, posicao.coluna);
            while(tab.posicaoValida(pos) && podeMover(pos)){
                mat[pos.linha, pos.coluna] = true;
                if(tab.peca(pos) != null && tab.peca(pos). cor != cor){
                    break;
                }

                pos.linha -= 1;
            }
            
            //Abaixo
            pos.definirValores(posicao.linha + 1, posicao.coluna);
            while(tab.posicaoValida(pos) && podeMover(pos)){
                mat[pos.linha, pos.coluna] = true;
                if(tab.peca(pos) != null && tab.peca(pos). cor != cor){
                    break;
                }

                pos.linha += 1;
            }

            //Direita
            pos.definirValores(posicao.linha, posicao.coluna + 1);
            while(tab.posicaoValida(pos) && podeMover(pos)){
                mat[pos.linha, pos.coluna] = true;
                if(tab.peca(pos) != null && tab.peca(pos). cor != cor){
                    break;
                }

                pos.coluna += 1;
            }

            //esquerda
            pos.definirValores(posicao.linha, posicao.coluna - 1);
            while(tab.posicaoValida(pos) && podeMover(pos)){
                mat[pos.linha, pos.coluna] = true;
                if(tab.peca(pos) != null && tab.peca(pos).cor != cor){
                    break;
                }

                pos.coluna -= 1;
            }



            return mat;

        }

        public override string ToString(){
            return "T";
        }
    }
}