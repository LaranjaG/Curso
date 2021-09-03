using jogoXadrez.tabuleiro;

namespace jogoXadrez.xadrez
{
    public class PosicaoXadrez
    {
        public char coluna { get; set; }

        public int linha { get; set; }

        public PosicaoXadrez(char coluna, int linha)
        {
            this.coluna = coluna;
            this.linha = linha;
        }

        public Posicao toPosicao()
        {
            return new Posicao(8 - linha, coluna - 'a'); //O a é um numero inteiro, que menos b por exemplo gera o numero necessario
        }

        public override string ToString()
        {
            return $"{coluna} - {linha}";
        }

        
    }
}
