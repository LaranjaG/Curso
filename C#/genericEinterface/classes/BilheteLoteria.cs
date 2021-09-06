using System.Collections.Generic;
using genericEinterface.interfaces;

namespace genericEinterface.classes
{
    public class BilheteLoteria : IBilheteLoteria<int>
    {
        public List<int>numerosBilhete {get; set;}
        private int posicao;

        public BilheteLoteria(List<int> numerosBilhete)
        {
            this.numerosBilhete = numerosBilhete;
        }

        public int next() => numerosBilhete[posicao++];
        
        public bool hasNext() => (!(posicao >= numerosBilhete.Count || numerosBilhete[posicao] == null));
    }
}