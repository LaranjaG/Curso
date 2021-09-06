using jogoXadrez.tabuleiro;

namespace jogoXadrez.xadrez
{
    public class Rei : Peca 
    {

        private PartidaXadrez partida;

        public Rei(Tabuleiro tab, Cor cor, PartidaXadrez partida) : base(tab, cor){
            this.partida = partida;
        }

        private bool podeMover(Posicao pos)
        {
            Peca p = tab.peca(pos);
            return p == null || p.cor != this.cor; //se a posição estiver vazia ou se cor é diferente da cor da peça que está indo
        }

        private bool testeTorreParaRoque(Posicao pos){
            Peca p = tab.peca(pos);
            //A peça não pode ser igual a null, tem que ser uma torre e pode ter 0 moviemntos e tem de ser da msm cor
            return p != null && p is Torre && p.cor == cor && p.qtdMov == 0;
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

            // #jogadaespecial roque -- moviemento de troca que o rei faz com a torre (Rei anda duas casas para direita e a torre duas para esquerda)
            if (qtdMov == 0 && !partida.xeque) {
                // #jogadaespecial roque pequeno
                Posicao posT1 = new Posicao(posicao.linha, posicao.coluna + 3);
                
                if (testeTorreParaRoque(posT1)) {
                    //Observa se as casas entre o rei e a torre estão vazias
                    Posicao p1 = new Posicao(posicao.linha, posicao.coluna + 1);
                    Posicao p2 = new Posicao(posicao.linha, posicao.coluna + 2);
                    
                    if (tab.peca(p1) == null && tab.peca(p2) == null)
                        mat[posicao.linha, posicao.coluna + 2] = true;
                }
                // #jogadaespecial roque grande (rei anda duas casas para a esquerda e a torre tres casa para a difeita)
                Posicao posT2 = new Posicao(posicao.linha, posicao.coluna - 4);
                if (testeTorreParaRoque(posT2)) {
                    //Observa se as casas entre o rei e a torre estão vazias
                    Posicao p1 = new Posicao(posicao.linha, posicao.coluna - 1);
                    Posicao p2 = new Posicao(posicao.linha, posicao.coluna - 2);
                    Posicao p3 = new Posicao(posicao.linha, posicao.coluna - 3);

                    if (tab.peca(p1) == null && tab.peca(p2) == null && tab.peca(p3) == null)
                        mat[posicao.linha, posicao.coluna - 2] = true;
                }
            } 

            return mat;

        }

        public override string ToString(){
            return "R";
        }
    }
}