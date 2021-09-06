namespace jogoXadrez.tabuleiro
{
    public class Tabuleiro
    {
        public int linhas { get; private set; } //No xadrex se tem um tabuleiro de 8x8

        public int colunas { get; private set; }

        private Peca[,] pecas;

        public Tabuleiro()
        {
            //Tabuliero de xadrex
            this.linhas = 8;
            this.colunas = 8;
            pecas = new Peca[this.linhas, this.colunas];
        }

        public Peca peca(int linha, int coluna)
        {
            return pecas[linha, coluna];
        }

        public Peca peca(Posicao pos)
        {
            return pecas[pos.linha, pos.coluna];
        }

        public void colocarPeca(Peca p, Posicao pos)
        {
            if (existePeca(pos))
                throw new TabuleiroException("Já existe uma peça nessa posição");

            pecas[pos.linha, pos.coluna] = p;
            p.posicao = pos;
        }

        public bool posicaoValida(Posicao pos) =>
            (
            !(
            pos.linha < 0 ||
            pos.linha >= linhas ||
            pos.coluna < 0 ||
            pos.coluna >= colunas
            )
            );

        public void validarPosicao(Posicao pos)
        {
            if (!posicaoValida(pos))
            {
                throw new TabuleiroException("Posição inválida!");
            }
        }

        public bool existePeca(Posicao pos)
        {
            validarPosicao (pos);
            return peca(pos) != null;
        }

        public Peca retirarPeca(Posicao pos)
        {
            if (peca(pos) == null) return null;

            Peca aux = peca(pos);
            aux.posicao = null;
            pecas[pos.linha, pos.coluna] = null;

            return aux;
        }
    }
}
