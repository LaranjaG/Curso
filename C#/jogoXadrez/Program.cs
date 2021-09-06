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
                PartidaXadrez partida = new PartidaXadrez();

                while(!partida.terminada){
                    try{
                        Console.Clear();
                        Tela.imprimirPartida (partida);
                        
                        System.Console.Write("Origem: ");
                        Posicao origem = Tela.lerPosicaoXadrez().toPosicao();
                        
                        partida.validarPosicaoOrigem(origem);
                        bool[,] posicoesPossiveis = partida.tab.peca(origem).movimentosPossiveis();

                        Console.Clear(); 
                        Tela.imprimirTabuleiro(partida.tab, posicoesPossiveis);
                        
                        System.Console.WriteLine();
                        System.Console.Write("Destino: ");
                        Posicao destino = Tela.lerPosicaoXadrez().toPosicao();
                        partida.validarPosicaoDestino(origem, destino);

                        partida.realizaJogada(origem, destino);
                    }catch(Exception e){
                        System.Console.WriteLine(e.Message);
                        Console.ReadLine();
                    }
                }

                Console.Clear();    
                Tela.imprimirPartida(partida);

            } catch(Exception ex){
                System.Console.WriteLine(ex.Message);
            }
        }
    }
}