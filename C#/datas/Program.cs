using System;
using System.Threading;
using datas.Enums;

namespace datas
{
    class Program
    {
        static void Main(string[] args)
        {
            Funcionario fun1 =
                new Funcionario(new TimeSpan(07, 30, 0), //HH:MM:SS
                    new TimeSpan(12, 00, 0),
                    new TimeSpan(13, 00, 0),
                    new TimeSpan(17, 30, 0),
                    "Rayslla");

            Funcionario fun2 = new Funcionario(
                // new TimeSpan(07, 30, 0), //HH:MM:SS
                // new TimeSpan(12, 00, 0),
                new TimeSpan(16, 00, 0),
                new TimeSpan(19, 00, 0),
                "Alex",
                "Vespertino"
            );

            // var hr = TipoFuncionario.Estagiario;
            // System.Console.WriteLine($"Enmum {hr}");
            // var strg = Enum.Parse<TipoFuncionario>("Estagiario");
            // System.Console.WriteLine($"Enum parse: {strg}");

            Console.WriteLine($"Horarios: \nMatinal {fun1.EntradaMatinal} - {fun1.SaidaMatinal}");
            Console.WriteLine($"Almoço: {fun1.horarioAlmoco()}");
            fun1.ponto();
            foreach (DateTime ponto in fun1.Pontos)
            {
                System.Console.WriteLine($"Ponto: {ponto}");
            }

            System.Console.WriteLine((fun2.horarioAlmoco().Ticks == 0) ? "Funcionario não tem horario de almoço" : fun2.horarioAlmoco());

            System.Console.WriteLine($"Horas trabalhadas dia: {fun1.horasTrabalhadasDia()}");
            System.Console.WriteLine($"Horas trabalhadas dia: {fun2.horasTrabalhadasDia()}");
        }
    }
}
