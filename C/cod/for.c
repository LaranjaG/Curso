# include <stdio.h>
# include <stdlib.h>

/*
 * Fa�a um algoritmo que imprima todos os n�meros pares compreendidos entre 85 e 907
 */

int main(){ 
  //	
  	int a;
	
  //Para ir de a igual a 85 at� a igual ou menor a 907 fa�a
  //a recebe +1 a cada vez que � executado o for
	for (a=85; a<=907;a=a+1) {
		//Escreve o a
		printf(" %i \n",a);
	}
	
  //S� � executado quando o for acaba
	printf("\n End \n");
	
  //
	return 0;
}

/*
 *	int main(){
 * 	//
 *	  int a;
 *		//para ir de a (valor determinado para a) at� a menor ou igual a 100 fa�a
 *		//a++, significa que cada vez que executar o for a vai receber +1.
 *	 	  for ( |Valor inicial da variavel|; |condi��o|; |Variavel recebe ela + X valor|){ 
 *			//Executar� o que est� dentro das chaves, at� condi��o ser falsa	
 *		}
 *			//Esta linha ser� executada quano o for acabar
 *			  printf("O for acabou!!"); 
 *		}
 */


