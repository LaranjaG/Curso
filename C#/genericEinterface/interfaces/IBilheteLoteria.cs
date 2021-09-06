namespace genericEinterface.interfaces
{
    public interface IBilheteLoteria<T>
    {
        public bool hasNext();
        public T next();
    }
}