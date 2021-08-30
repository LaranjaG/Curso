#include <stdio.h>
#include <stdlib.h>
/*
 * A fun��o serve para que podemos dividir um programa em v�rias partes, 
 * no qual cada fun��o realiza uma tarefa bem definida. 
 */
//fun��o



float maior(float n1, float n2){ //(|Parametros|), quando se faz uma fun��o receber 
	float maior;				 //parametro � pq ela pega um valor dado pela main 
								//ou seja, vc cria o parametro do tipo da variavel,
								//ex: float, para que voc� possa trabalhar com os valores detro da fun��o
								
	if(n1>n2){        //Se valor dado a n1 maior que n2, ent�o
		maior = n1;   // variavel maior recebe n1
	} else{           // sen�o (se n2 maior que n1)
		maior = n2;   // variavel maior recebe n2
	}
	
  //A fun��o retorna valor
   //retorna valor maior
}

//Classe principal
int main(){

	float num1;
	float num2;
	float valor;
	
	printf("Digite dois numeros: ");
	scanf("%f %f", &num1, &num2);
	
  //Recebe o valor dado pela fun��o e entraga a variavel valor	
	valor =  maior(num1, num2);
	
	
  //Exibe valor	
	printf("Maior numero: %f", valor);
	
  //Fun��o principal retorna 0, caso tenha um erro n identificado retorna valores aletorios	
	return 0;
}

/*
 * Tipos de fun��es:
 * void |nome da funcao|(){} //N�o precisa de return, j� que ela � do tipo vazio
 * int |nome da funcao|() { return 0; }
 * float |nome da funcao|() { return 0; }
 * double |nome da funcao|(){ return 0;}
 * char |nome da funcao|(){ return |variavel tipo char|;}
 * boolean -- n�o exite no C;
 * N�o � todosas funcoes que se precisa de parametro, isso depende da sua necessidade. 
 */
