using System;
using jogoXadrez.tabuleiro;
using jogoXadrez.xadrez;

namespace jogoXadrez
{
    public class Tela
    {
        public static void imprimirTabuleiro(Tabuleiro tab)
        {


            for(int linha = 0; linha < tab.linhas; linha ++)
            {
                System.Console.Write($"{8 - linha} ");
                for(int coluna = 0; coluna < tab.colunas; coluna ++)
                {
                    Peca peca = tab.peca(linha, coluna);
                    if(peca != null){
                        imprimirPeca(peca);
                        System.Console.Write(" ");
                    }
                    else
                        System.Console.Write("- ");
                }

                System.Console.WriteLine();
            }

            System.Console.WriteLine("  a b c d e f g h");
        }
    
        public static void imprimirPeca(Peca peca)
        {
            if(peca.cor == Cor.Branca)
                System.Console.Write(peca);
            else {
                ConsoleColor aux = Console.ForegroundColor;
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.Write(peca);
                Console.ForegroundColor = aux;
            }

        }

        public static PosicaoXadrez lerPosicaoXadrez(){
            string s = Console.ReadLine();
            char coluna = s[0];
            int linha = int.Parse($"{s[1]}");
            return new PosicaoXadrez(coluna, linha);
        }
    }
}