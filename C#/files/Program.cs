using System;
using System.Collections.Generic;
using System.IO;

namespace files
{
    class Program
    {
        static void Main(string[] args)
        {
            path();
            directory();
            streamWriter();
            block();
            file();
            duplicarArquivo();
        }

        public static void path()
        {
            string path = @"c:\temp\myfolder\file1.txt";

            System
                .Console
                .WriteLine($"Separção diretorio {Path.DirectorySeparatorChar}");
            System.Console.WriteLine($"Separação pastas{Path.PathSeparator}");
            System
                .Console
                .WriteLine($"Director name {Path.GetDirectoryName(path)}");
            System.Console.WriteLine($"Arquivo nome {Path.GetFileName(path)}");
            System
                .Console
                .WriteLine($"Arquivo extensão {Path.GetExtension(path)}");
            System
                .Console
                .WriteLine($"Arquivo nome sem extensão {Path.GetFileNameWithoutExtension(path)}");
            System
                .Console
                .WriteLine($"Todo caminho do arquivo nome {Path.GetFullPath(path)}");
            System.Console.WriteLine($"Pasta temporaria {Path.GetTempPath()}");
        }

        public static void directory()
        {
            //Pegarsub pastas da pagina original path
            string path = @"c:\temp\myfolder";

            try
            {
                IEnumerable<string> folders =
                    Directory
                        .EnumerateDirectories(path,
                        "*.*",
                        SearchOption.AllDirectories); //Qualquer nome de arquivo, qualquer extensão
                System.Console.WriteLine("Folders");
                foreach (string s in folders)
                {
                    System.Console.WriteLine (s);
                }

                IEnumerable<string> files =
                    Directory
                        .EnumerateFiles(path,
                        "*.*",
                        SearchOption.AllDirectories); //Qualquer nome de arquivo, qualquer extensão
                System.Console.WriteLine("Files");
                foreach (string s in files)
                {
                    System.Console.WriteLine (s);
                }

                //Criar pastas
                Directory.CreateDirectory($"{path}//newfolder");
            }
            catch (IOException e)
            {
                System.Console.WriteLine("Erro");
                System.Console.WriteLine(e.Message);
            }
        }

        public static void streamWriter()
        {
            string sourcePath = @"c:\temp\file1.txt";
            string targetPath = @"c:\temp\file5.txt";

            try
            {
                string[] lines = File.ReadAllLines(sourcePath);

                using (
                    StreamWriter sw = File.AppendText(targetPath) //Escreve no final do arquivo
                )
                {
                    foreach (string line in lines)
                    {
                        sw.WriteLine(line.ToUpper());
                    }
                }
            }
            catch (IOException e)
            {
                System.Console.WriteLine("Erro");
                System.Console.WriteLine(e.Message);
            }
        }

        public static void block()
        {
            string path = @"c:\temp\file1.txt";

            try
            {
                using (StreamReader sr = File.OpenText(path))
                {
                    // usa o bloco e depois encerra ele
                    while (sr.EndOfStream)
                    {
                        string line = sr.ReadLine();

                        System.Console.WriteLine (line);
                    }
                }
            }
            catch (IOException e)
            {
                System.Console.WriteLine("Erro");
                System.Console.WriteLine(e.Message);
            }
        }

        public static void file()
        {
            //FileStream e StreamReader
            string path = @"c:\temp\file1.txt"; //O @ é pra n precisar usar dois \

            // FileStream fs = null; //Generica
            StreamReader sr = null; //Implementada para o serviço especifico

            try
            {
                //Conversa com o sistema operacional
                // fs = new FileStream(path, FileMode.Open); //Abrir o arquivo
                // sr = new StreamReader(fs);
                sr = File.OpenText(path);

                while (!sr.EndOfStream)
                {
                    string line = sr.ReadLine();
                    System.Console.WriteLine (line);
                }
            }
            catch (IOException e)
            {
                System.Console.WriteLine("Ocorreu um erro!");
                System.Console.WriteLine(e.Message);
            }
            finally
            {
                //Se deu certo ou deu alguma excessão, de td jeito tem q fechar
                if (sr != null) sr.Close();
                // if(fs != null) fs.Close();
            }
        }

        public static void duplicarArquivo()
        {
            string sourcePath = @"c:\temp\file1.txt";
            string targetPath = @"c:\temp\file2.txt";

            string sourcePath1 = @"c:\temp\file3.txt";
            string targetPath1 = @"c:\temp\file4.txt";

            try
            {
                //File static members & File info instance Manbers
                /**
                 * Copiar do arquivo
                 */
                FileInfo fileInfo = new FileInfo(sourcePath);
                fileInfo.CopyTo (targetPath); //Copiar arquivo

                File.Copy (sourcePath1, targetPath1);

                /**
                 * Ler arquivo
                 */
                string[] lines = File.ReadAllLines(targetPath);
                foreach (string line in lines)
                {
                    System.Console.WriteLine (line);
                }
            }
            catch (IOException e)
            {
                System.Console.WriteLine("An error occurred!");
                System.Console.WriteLine(e.Message);
            }
        }
    }
}
