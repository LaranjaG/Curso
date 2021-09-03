namespace OO
{
    public class Conta
    {
        private string nome;
        private double saldo;
        private string tipoConta;

        public Conta(string nome, double saldo, string tipoConta){
            this.nome = nome;
            this.saldo = saldo;
            this.tipoConta = tipoConta;
        }

        public string Nome 
        {
            get {return this.nome;}
            set {this.nome = value;}
        }

        public double Saldo
        {
            get {return this.saldo;}
            set {this.saldo = value;}
        }

        public string TipoConta
        {
            get {return this.tipoConta;}
            set {this.tipoConta = value;}
        }
    }
}