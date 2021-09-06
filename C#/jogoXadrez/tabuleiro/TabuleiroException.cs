using System;

namespace jogoXadrez.tabuleiro
{
    public class TabuleiroException : Exception
    {   
        public TabuleiroException(string msg) : base(msg){
            
        }
    }
}