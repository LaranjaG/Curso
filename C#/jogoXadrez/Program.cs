using System;
using jogoXadrez.tabuleiro;
using jogoXadrez.xadrez;

namespace jogoXadrez
{
    class Program
    {
        static void Main(string[] args)
        {
            try{
                // Posicao p = new Posicao(3,4);
                // System.Console.WriteLine($"Posicao {p}");
                // Console.ReadLine();

                // Tabuleiro tab = new Tabuleiro();

                // tab.colocarPeca(new Torre(tab, Cor.Preta), new Posicao(0,0));
                // tab.colocarPeca(new Rei(tab, Cor.Branca), new Posicao(1,3));
                // tab.colocarPeca(new Torre(tab, Cor.Preta), new Posicao(0,7));
                // PosicaoXadrez pos = new PosicaoXadrez('c', 1);

                // System.Console.WriteLine(pos);

                // System.Console.WriteLine(pos.toPosicao());

                // Tela.imprimirTabuleiro(tab); 
                PartidaXadrez partida = new PartidaXadrez();

                while(!partida.terminada){
                    Console.Clear();
                    Tela.imprimirTabuleiro(partida.tab);

                    System.Console.Write("Origem: ");
                    Posicao origem = Tela.lerPosicaoXadrez().toPosicao();
                    System.Console.Write("Destino: ");
                    Posicao destino = Tela.lerPosicaoXadrez().toPosicao();

                    partida.executarMovimetno(origem, destino);
                }

            } catch(TabuleiroException e){
                System.Console.WriteLine(e.Message);
            }
        }
    }
}
