using jogoXadrez.tabuleiro;
using System.Collections.Generic;

namespace jogoXadrez.xadrez
{
    public class PartidaXadrez
    {
        public Tabuleiro tab { get; private set; }

        public int turno { get; private set; }

        public Cor jogadorAtual { get; private set; }

        public bool terminada { get; private set; }

        public HashSet<Peca> pecas;

        public HashSet<Peca> capturadas;
        
        public bool xeque {get; private set;}

        public Peca vulneravelEnPassant { get; private set; } //Peão que pode ser capturado em uma situação atípica

        public PartidaXadrez()
        {
            tab = new Tabuleiro();
            turno = 1;
            jogadorAtual = Cor.Branca;
            terminada = false;
            pecas = new HashSet<Peca>();
            capturadas = new HashSet<Peca>();
            vulneravelEnPassant = null;
            colocarPecas();
        }

        public Peca executarMovimento(Posicao origem, Posicao destino)
        {
            Peca p = tab.retirarPeca(origem);
            p.incrementarQtdMovimentos();
            Peca pecaCapturada = tab.retirarPeca(destino);
            tab.colocarPeca (p, destino);

            if(pecaCapturada != null){
                capturadas.Add(pecaCapturada);
            }

            //#jogadaespecial --roque pequeno (mais detalhes em rei)

            if(p is Rei && destino.coluna == origem.coluna + 2)
            {
                Posicao origemT = new Posicao(origem.linha, origem.coluna + 3);
                Posicao destinoT = new Posicao(origem.linha, origem.coluna + 1);
                Peca T = tab.retirarPeca(origemT);
                T.decrementarQtdMovimentos();
                tab.colocarPeca(T, destinoT);                
            }

            //#jogadaespecial --roque grande (mais detalhes em rei)

            if(p is Rei && destino.coluna == origem.coluna - 2)
            {
                Posicao origemT = new Posicao(origem.linha, origem.coluna - 4);
                Posicao destinoT = new Posicao(origem.linha, origem.coluna - 1);
                Peca T = tab.retirarPeca(origemT);
                T.decrementarQtdMovimentos();
                tab.colocarPeca(T, destinoT);                
            }

            // #jogadaespecial en passant
            if (p is Peao) {
                if (origem.coluna != destino.coluna && pecaCapturada == null) {
                    Posicao posP;
                    if (p.cor == Cor.Branca) {
                        posP = new Posicao(destino.linha + 1, destino.coluna);
                    }
                    else {
                        posP = new Posicao(destino.linha - 1, destino.coluna);
                    }
                    pecaCapturada = tab.retirarPeca(posP);
                    capturadas.Add(pecaCapturada);
                }
            }

            return pecaCapturada;
        }

        public void desfazerMovimento(Posicao origem, Posicao destino, Peca pecaCapturada)
        {
            Peca p = tab.retirarPeca(destino);
            p.decrementarQtdMovimentos();
            
            if(pecaCapturada != null)
            {
                tab.colocarPeca(pecaCapturada, destino);
                capturadas.Remove(pecaCapturada);
            }

            tab.colocarPeca(p, origem);

            // #jogadaespecial roque pequeno
            if (p is Rei && destino.coluna == origem.coluna + 2) {
                Posicao origemT = new Posicao(origem.linha, origem.coluna + 3);
                Posicao destinoT = new Posicao(origem.linha, origem.coluna + 1);
                Peca T = tab.retirarPeca(destinoT);
                T.decrementarQtdMovimentos();
                tab.colocarPeca(T, origemT);
            }

            // #jogadaespecial roque grande
            if (p is Rei && destino.coluna == origem.coluna - 2) 
            {
                Posicao origemT = new Posicao(origem.linha, origem.coluna - 4);
                Posicao destinoT = new Posicao(origem.linha, origem.coluna - 1);
                Peca T = tab.retirarPeca(destinoT);
                T.decrementarQtdMovimentos();
                tab.colocarPeca(T, origemT);
            }

            // #jogadaespecial en passant
            if (p is Peao) 
            {
                if (origem.coluna != destino.coluna && pecaCapturada == vulneravelEnPassant) {
                    Peca peao = tab.retirarPeca(destino);
                    Posicao posP;
                    if (p.cor == Cor.Branca) {
                        posP = new Posicao(3, destino.coluna);
                    }
                    else {
                        posP = new Posicao(4, destino.coluna);
                    }
                    tab.colocarPeca(peao, posP);
                }
            }
        }

        public void realizaJogada(Posicao origem, Posicao destino)
        {
            //Não pode permitir que o usuário se coloque em cheque

            Peca pecaCapturada = executarMovimento(origem, destino);
            Peca p = tab.peca(destino);

            if(estaEmXeque(jogadorAtual)){
                desfazerMovimento(origem, destino, pecaCapturada);
                throw new TabuleiroException("Você não pode se colocar em xeque");
            }

            //#jogadaespecial promoção -- quando o peão chega no extremo do tabuleiro inimigo pode ser promovido

            /**
             * O jogador recebe uma dama automaticamente
             */

            if(p is Peao){
                //Se o peão chega no extremo do tabuliero
                if((p.cor == Cor.Branca && destino.linha == 0) || (p.cor == Cor.Preta && destino.linha == 7)){
                    p = tab.retirarPeca(destino); //ele é retirado
                    pecas.Remove(p);
                    //é adicionado uma dama no lugar
                    Peca dama = new Dama(tab, p.cor);
                    tab.colocarPeca(dama, destino);
                    pecas.Add(dama);
                }
            }   

            xeque = estaEmXeque(adversaria(jogadorAtual)); //Verifica se o jogador está em xeque

            terminada = testeXequeMate(adversaria(jogadorAtual)); //Verifica se a partida acabou

            if(!terminada){
                turno++;
                mudaJogador();
            }

            
            // #jogadaespecial en passant
            vulneravelEnPassant = (p is Peao && (destino.linha == origem.linha - 2 || destino.linha == origem.linha + 2)) ? p : null;
        }

        private void mudaJogador()
        {
            if (jogadorAtual == Cor.Branca)
                this.jogadorAtual = Cor.Preta;
            else
                this.jogadorAtual = Cor.Branca;
        }

        public HashSet<Peca> pecasCapturadas(Cor cor)
        {
            HashSet<Peca> aux = new HashSet<Peca>();
            foreach (Peca x in capturadas){
                if(x.cor == cor){
                    aux.Add(x);
                }
            }

            return aux;
        }

        public HashSet<Peca> pecasEmJogo(Cor cor)
        {
            HashSet<Peca> aux = new HashSet<Peca>();
            foreach (Peca x in pecas){
                if(x.cor == cor){
                    aux.Add(x);
                }
            }

            aux.ExceptWith(pecasCapturadas(cor)); // Retira um hash do outro --> retira do hash peças em jogo as peças que foram capturadas
            return aux;
        }

        private Cor adversaria(Cor cor)
        {
            if(cor == Cor.Branca){
                return Cor.Preta;
            }

            return Cor.Branca;
        }

        private Peca rei(Cor cor)
        {
            foreach(Peca x in pecasEmJogo(cor)){
                if(x is Rei){
                    return x;
                }
            }

            return null;
        }

        public bool estaEmXeque(Cor cor){
            Peca R = rei(cor);

            if(R == null) throw new TabuleiroException($"Não tem rei da cor {cor} no tabuleiro");
            
            foreach (Peca x in pecasEmJogo(adversaria(cor))){
                bool[,] mat = x.movimentosPossiveis();
                if(mat[R.posicao.linha, R.posicao.coluna])
                    return true;
            }

            return false;
        }

        public bool testeXequeMate(Cor cor)
        {   
            if(!estaEmXeque(cor)) return false; //Senão esta em cheque é impossivel esta em cheque mate!

            foreach(Peca x in pecasEmJogo(cor))
            {
                bool[,] mat = x.movimentosPossiveis();

                for (int i=0; i<tab.linhas; i++) 
                {
                    for (int j=0; j<tab.colunas; j++) 
                    {
                        if (mat[i, j]) 
                        {
                            Posicao origem = x.posicao;
                            Posicao destino = new Posicao(i, j);
                            Peca pecaCapturada = executarMovimento(origem, destino);
                            bool testeXeque = estaEmXeque(cor);
                            desfazerMovimento(origem, destino, pecaCapturada);
                            if (!testeXeque) 
                                return false;
                        }
                    }
                }
            }

            //Se após todos os testes não tiver nenhum movimento que libera a peça então ela está em cheque mate
            return true;
        }

        public void validarPosicaoOrigem(Posicao pos)
        {
            if (tab.peca(pos) == null)
            {
                throw new TabuleiroException("Não existe peça na posicao de origem escolhida!");
            }

            if (jogadorAtual != tab.peca(pos).cor)
            {
                throw new TabuleiroException("A peça de origem escolhida não é sua!");
            }

            if (!tab.peca(pos).existeMovimentosPossiveis())
            {
                throw new TabuleiroException("Não há movimentos possíveis para a peça de origem escolhida!");
            }
        }

        public void validarPosicaoDestino(Posicao origem, Posicao destino){
            if(!tab.peca(origem).movimentoPossivel(destino))
            {
                throw new TabuleiroException("Posição de destino inválida!");
            }
        }

        public void colocarNovaPeca(char coluna, int linha, Peca peca)
        {
            tab.colocarPeca(peca, new PosicaoXadrez(coluna, linha).toPosicao());
            pecas.Add(peca);
        }

        private void colocarPecas()
        {

            for(int i = 0; i < 4; i++) //32 é o número de peças em uma partida
            { 
                int numero;
                if(i == 0) numero = 1;
                else if(i == 1) numero = 2;
                else if(i == 2) numero = 8;
                else numero = 7;

                Cor cor = (numero <= 2) ? Cor.Branca : Cor.Preta;

                if(numero == 1 || numero == 8){

                    for(char letra = 'a'; letra <= 'h'; letra++)
                    {
                        if(letra == 'a' || letra == 'h')
                            colocarNovaPeca(letra, numero, new Torre(tab, cor));
                        else if(letra == 'b' || letra == 'g')
                            colocarNovaPeca(letra, numero, new Cavalo(tab, cor));    
                        else if(letra == 'c' || letra =='f')
                            colocarNovaPeca(letra, numero, new Bispo(tab, cor));
                        else if(letra == 'd')
                            colocarNovaPeca(letra, numero, new Dama(tab, cor));
                        else if(letra == 'e')
                            colocarNovaPeca(letra, numero, new Rei(tab, cor, this));
                    }
                }
                if(numero == 2 || numero == 7){
                    for (char letra = 'a'; letra <= 'h'; letra++)
                    {
                        colocarNovaPeca(letra, numero, new Peao(tab, cor, this));
                    }
                }
            }
        }
    }
}
