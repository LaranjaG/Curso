using System;
using jogoXadrez.tabuleiro;
using jogoXadrez.xadrez;
using System.Collections.Generic;

namespace jogoXadrez
{
    public class Tela
    {
        public static void imprimirTabuleiro(Tabuleiro tab)
        {
            for (int linha = 0; linha < tab.linhas; linha++)
            {
                System.Console.Write($"{8 - linha} ");
                for (int coluna = 0; coluna < tab.colunas; coluna++)
                {
                    Peca peca = tab.peca(linha, coluna);

                    imprimirPeca (peca);
                }

                System.Console.WriteLine();
            }

            System.Console.WriteLine("  a b c d e f g h");
        }

        public static void imprimirTabuleiro(
            Tabuleiro tab,
            bool[,] posicoesPossiveis
        )
        {
            ConsoleColor fundoOriginal = Console.BackgroundColor;
            ConsoleColor fundoAlterado = ConsoleColor.DarkGray;

            for (int linha = 0; linha < tab.linhas; linha++)
            {
                System.Console.Write($"{8 - linha} ");
                for (int coluna = 0; coluna < tab.colunas; coluna++)
                {
                    Peca peca = tab.peca(linha, coluna);

                    if (posicoesPossiveis[linha, coluna])
                        Console.BackgroundColor = fundoAlterado;
                    else
                        Console.BackgroundColor = fundoOriginal;

                    imprimirPeca (peca);
                    Console.BackgroundColor = fundoOriginal;
                }

                System.Console.WriteLine();
            }
            Console.BackgroundColor = fundoOriginal;
            System.Console.WriteLine("  a b c d e f g h");
        }

        public static void imprimirPeca(Peca peca)
        {
            if (peca == null)
            {
                System.Console.Write("- ");
            }
            else
            {
                if (peca.cor == Cor.Branca)
                    System.Console.Write(peca);
                else
                {
                    ConsoleColor aux = Console.ForegroundColor;
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    Console.Write (peca);
                    Console.ForegroundColor = aux;
                }
                System.Console.Write(" ");
            }
        }

        public static void imprimirPartida(PartidaXadrez partida)
        {
            Tela.imprimirTabuleiro(partida.tab);

            System.Console.WriteLine();
            imprimirPecasCapturadas(partida);
            System.Console.WriteLine($"Turno: {partida.turno}");
            System.Console.WriteLine($"Jogada da {partida.jogadorAtual}");
            if(partida.xeque)
                System.Console.WriteLine("Xeque!");
        }

        public static void imprimirPecasCapturadas(PartidaXadrez partida)
        {
            System.Console.WriteLine("Peças capturadas:");
            
            System.Console.Write("Brancas");
            imprimirConjunto(partida.pecasCapturadas(Cor.Branca));

            System.Console.WriteLine();

            ConsoleColor aux = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.Yellow;
            
            System.Console.Write("Pretas");
            imprimirConjunto(partida.pecasCapturadas(Cor.Preta));

            Console.ForegroundColor = aux;
            System.Console.WriteLine();
        }

        public static void imprimirConjunto(HashSet<Peca> conjunto)
        {
            System.Console.Write("[");
                foreach(Peca x in conjunto){
                    System.Console.Write($"{x} ");
                }
            System.Console.Write("]");
        }

        public static PosicaoXadrez lerPosicaoXadrez()
        {
            string s = Console.ReadLine();
            char coluna = s[0];
            int linha = int.Parse($"{s[1]}");
            return new PosicaoXadrez(coluna, linha);
        }
    }
}
