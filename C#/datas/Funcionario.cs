using System;
using System.Collections.Generic;

namespace datas
{
    //Metodos e classes selados, n permite override (para um metodo já sobrescrito) e herança para a classe --> sealed
    public class Funcionario
    {
        public TimeSpan EntradaMatinal { get; set; } = new TimeSpan(0);

        public TimeSpan SaidaMatinal { get; set; } = new TimeSpan(0);

        public TimeSpan EntradaVespertina { get; set; } = new TimeSpan(0);

        public TimeSpan SaidaVespertina { get; set; } = new TimeSpan(0);

        public string Nome {get; set;} //Só funciona se for publico
        public List<DateTime> Pontos
        { get; private set;
        } = new List<DateTime>();

        public Funcionario( //Periodo integral
            TimeSpan entradaMatinal,
            TimeSpan saidaMatinal,
            TimeSpan entradaVespertina,
            TimeSpan saidaVespertina,
            string nome
        )
        {
            this.EntradaMatinal = entradaMatinal;
            this.SaidaMatinal = saidaMatinal;
            this.EntradaVespertina = entradaVespertina;
            this.SaidaVespertina = saidaVespertina;
            this.Nome = nome;
        }

        //Funcionario de meio periodo
        public Funcionario(TimeSpan entrada, TimeSpan saida, string nome, string perido)
        {
            if(perido == "Matutino"){
                this.EntradaMatinal = entrada;
                this.SaidaMatinal = saida;
            } else{
                this.EntradaVespertina = entrada;
                this.SaidaVespertina = saida;
            }   

            this.Nome = nome;
        }

        public void ponto()
        {
            this.Pontos.Add(DateTime.Now);
        }

        public TimeSpan horarioAlmoco()
        {
            return (
            this.SaidaMatinal.Ticks != 0 && this.EntradaVespertina.Ticks != 0
            )
                ? (this.EntradaVespertina - this.SaidaMatinal)
                : new TimeSpan(0);
        }

        public TimeSpan horasTrabalhadasDia()
        {
            //Horas matinais + horas vespertinas
            return (this.SaidaMatinal - this.EntradaMatinal) +
            (this.SaidaVespertina - this.EntradaVespertina);
        }

        public void encerrarDia(){
            //TODO: implementar encerrarDia
            
            //O dia deve ter de dois a 4 pontos batidos ou pelo menos ser um numero par
            
        }
    }
}