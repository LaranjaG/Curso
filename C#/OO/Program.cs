using System;
using System.Collections.Generic;

namespace OO
{
    class Program
    {
        static void Main(string[] args)
        {
            Banco banco = new Banco("Nu");
            banco.Nome += "Bank";
            Conta conta = new Conta("Rayslla", 19.99, "Corrente");
            banco.addConta = conta;
            System.Console.WriteLine($"name banco: {banco.Nome}");
            
            foreach (Conta ct in banco.Contas)
            {
                System.Console.WriteLine($"Nome user: {ct.Nome}, saldo: {ct.Saldo}, tipo conta: {ct.TipoConta}");
            }
        }
    }
}
