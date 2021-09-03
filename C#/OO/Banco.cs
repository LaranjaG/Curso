using System.Collections.Generic;

namespace OO
{
    public class Banco
    {
        private string nome;
        private List<Conta> contas;

        public Banco(string nome){
            this.nome = nome;
            this.contas = new List<Conta>();
        }

        public string Nome {
            get {return this.nome;}
            set {this.nome = value;}
        }

        public List<Conta> Contas {
            get {return this.contas;}
            set {this.contas = value;}
        }

        public Conta addConta {
            set {this.contas.Add(value);}
        }
        
    }
}