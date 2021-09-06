using System;
using System.Runtime;
using System.Collections.Generic;
using genericEinterface.interfaces;
using genericEinterface.classes;

namespace genericEinterface
{
    class Program
    {

        /**
         * Padrão interator
         */
        static void Main(string[] args)
        {
            Random rand = new Random();

            List<int> numerosBilhete = new List<int>();

            for (int i = 0; i < 6; i++)
            {
                numerosBilhete.Add(rand.Next(100));
            }

            IBilheteLoteria<int> bilhete = new BilheteLoteria(numerosBilhete);
            
            System.Console.Write("Bilhete: ");
            
            while(bilhete.hasNext())
            {
                System.Console.Write($"{bilhete.next()} ");
            }
        }
    }
}
