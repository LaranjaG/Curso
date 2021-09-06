namespace jogoXadrez.tabuleiro
{
    public abstract class Peca
    {
        public Posicao posicao { get; set; } //Uma peça tem uma posição

        public Cor cor { get; protected set; }

        public int qtdMov { get; protected set; }

        public Tabuleiro tab { get; set; }

        public Peca(Tabuleiro tab, Cor cor)
        {
            this.posicao = null;
            this.tab = tab;
            this.cor = cor;
            this.qtdMov = 0;
        }

        public void incrementarQtdMovimentos()
        {
            qtdMov++;
        }

        public void decrementarQtdMovimentos()
        {
            qtdMov--;
        }

        public bool existeMovimentosPossiveis()
        {
            bool[,] mat = movimentosPossiveis();

            for (int i = 0; i < tab.linhas; i++)
            {
                for (int j = 0; j < tab.colunas; j++)
                {
                    if(mat[i, j])
                    {
                        return true;
                    }
                }
            }

            return false;
        }

        public bool movimentoPossivel(Posicao pos){
            return movimentosPossiveis()[pos.linha, pos.coluna];
        }

        public abstract bool[,] movimentosPossiveis();
    }
}
