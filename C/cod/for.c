# include <stdio.h>
# include <stdlib.h>

/*
 * Faça um algoritmo que imprima todos os números pares compreendidos entre 85 e 907
 */

int main(){ 
  //	
  	int a;
	
  //Para ir de a igual a 85 até a igual ou menor a 907 faça
  //a recebe +1 a cada vez que é executado o for
	for (a=85; a<=907;a=a+1) {
		//Escreve o a
		printf(" %i \n",a);
	}
	
  //Só é executado quando o for acaba
	printf("\n End \n");
	
  //
	return 0;
}

/*
 *	int main(){
 * 	//
 *	  int a;
 *		//para ir de a (valor determinado para a) até a menor ou igual a 100 faça
 *		//a++, significa que cada vez que executar o for a vai receber +1.
 *	 	  for ( |Valor inicial da variavel|; |condição|; |Variavel recebe ela + X valor|){ 
 *			//Executará o que está dentro das chaves, até condição ser falsa	
 *		}
 *			//Esta linha será executada quano o for acabar
 *			  printf("O for acabou!!"); 
 *		}
 */


