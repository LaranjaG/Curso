﻿using System; //Se tiver u use system não há necessidade de utilizar o system antes do console
using System.Collections.Generic;
using System.Globalization;
using System.Threading;

//shift + alt + f

namespace WorkSpace___RR //Name space é opcional
{
    class Program
    {

        static void Main(string[] args)
        {
            // Console.WriteLine("Hello it's me the good advice cupcake!\n");
            // System.Console.WriteLine("Boa tarde");
            
            Console.Write("Sem quebra de linha ");
            Console.WriteLine("Com quebra de linha");
            Console.WriteLine("Variaveis:");

            //Tipos de variaveis
            bool boolean = true;
            char genero = 'F';
            char letra = '\u0041';
            byte n1 = 126;
            int n2 = 1000;
            int n3 = 2147483647;
            long n4 = 2147483648L;
            float n5 = 4.5f;
            double n6 = 4.5;
            String nome = "Maria Green";
            Object obj1 = "Alex Brown";
            Object obj2 = 4.5f;

            // object[] vetor = new object[12]; //Vetor
            var list = new List<object>();

            // vetor[0] = boolean;
            list.Add(boolean);
            list.Add(genero);
            list.Add(letra);
            list.Add(n1);
            list.Add(n2);
            list.Add(n3);
            list.Add(n4);
            list.Add(n5);
            list.Add(n6);
            list.Add(nome);
            list.Add(obj1);
            list.Add(obj2);

            // SByte x = 110; //Agrega valores de -128 até 127
            //byte n1 = 126; //Aceita números de 0 a 255
            // Console.WriteLine(x);
            // Console.WriteLine(n1);

            // foreach(object o in vetor)
            //     Console.WriteLine(o);

            Console.WriteLine("\n------------------\n");

            foreach(object obj in list) //La~o de repetição
                Console.WriteLine(obj);

            saidas(); //Tipo de saidas de dados no console

            System.Console.WriteLine("\n---------------------------------");

            diferencas(); //trabalhando com escrita nomeVariavel++ e ++nomeVariavel

            cast(); //Trabalhando conversão com cast

            entradaDados(); //Trabalhando leitura de dados feita por console
            
            randomMatriz(); //Trabalhando com matriz e números randomicos
        }
        
        static void saidas()
        {
            System.Console.WriteLine("\n----------------------\nSaida de dados:");
            double limitar = 10.1231321321321;
            Console.WriteLine(limitar.ToString("F2")); //Limitar a varivael para duas casas decimais    
            Console.WriteLine(limitar.ToString("F4")); 
            Console.WriteLine(limitar.ToString("F4", CultureInfo.InvariantCulture)); //Idepende do local para adequae a formatação  
            
            String nomeOut = "Rayslla";
            int idadeOut = 20;
            double saldoOut = 19.820;
            Console.WriteLine("{0} tem {1} de idade e tem saldo igual a R${2:F2}", nomeOut, idadeOut, saldoOut); //:F2 limita as casas decimais
            Console.WriteLine($"{nomeOut} tem {idadeOut} de idade e tem saldo igual a R${saldoOut:F2}");
            Console.WriteLine(nomeOut + " tem " + idadeOut + " de idade e tem saldo igual a R$ " + saldoOut.ToString("F2"));
        }

        static void diferencas()
        {
           //Diferença entre a++ e ++a 
            int a = 10;
            int b = a++; //Primeiro entrega o valor para b e depois soma +1 no a

            System.Console.WriteLine($"a: {a} b: {b}");

            int c = 10; 
            int d = (int) ++c; //Primeiro adiciona +1 a c e depois entrga o valor para b
        
            System.Console.WriteLine($"c: {c} d: {d}");
        } 

        static void cast()
        {
            //cast
            System.Console.WriteLine("\n--------------");
            int x = 20, y =  3;

            System.Console.WriteLine($"Divisão 20/3: {x/y}");
            System.Console.WriteLine($"Divisão com cast 20/3: {(double) x/y}");
        }

        static void entradaDados()
        {
            //ReadLine - ler do console;

            // string x;
            // int y;
            // double z;
            // char w;            

            // x = Console.ReadLine();
            // y = int.Parse(Console.ReadLine());
            // z = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            // w = char.Parse(Console.ReadLine());

            System.Console.Write("Digite um nome: ");
            String name = Console.ReadLine(); //Ler linha
            System.Console.WriteLine($"Nome digitado pelo user: {name}");            
        }
        
        public static void randomMatriz()
        {
            Random rand = new Random();

            System.Console.Write("Numero de linhas: ");
            int m = int.Parse(Console.ReadLine());
            System.Console.WriteLine("\n");
            System.Console.Write("Numero de colunas: ");
            int n = int.Parse(Console.ReadLine());
            int[,] matriz = new int [m,n];

            for (int l = 0; l < m; l++) //l de linhas
            {
                for (int c = 0; c < n; c++) //c de colunas
                {
                    matriz[l, c] = rand.Next();
                }
            }

            System.Console.WriteLine("Matriz");
            for (int l = 0; l < m; l++) //l de linhas
            {
                for (int c = 0; c < n; c++) //c de colunas
                {
                    System.Console.Write($"{matriz[l, c]} ");
                }

                System.Console.WriteLine();
            }
        }
    
    }
}
