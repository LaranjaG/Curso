#include <stdio.h>
#include <stdlib.h>
/*
 * A função serve para que podemos dividir um programa em várias partes, 
 * no qual cada função realiza uma tarefa bem definida. 
 */
//função



float maior(float n1, float n2){ //(|Parametros|), quando se faz uma função receber 
	float maior;				 //parametro é pq ela pega um valor dado pela main 
								//ou seja, vc cria o parametro do tipo da variavel,
								//ex: float, para que você possa trabalhar com os valores detro da função
								
	if(n1>n2){        //Se valor dado a n1 maior que n2, então
		maior = n1;   // variavel maior recebe n1
	} else{           // senão (se n2 maior que n1)
		maior = n2;   // variavel maior recebe n2
	}
	
  //A função retorna valor
   //retorna valor maior
}

//Classe principal
int main(){

	float num1;
	float num2;
	float valor;
	
	printf("Digite dois numeros: ");
	scanf("%f %f", &num1, &num2);
	
  //Recebe o valor dado pela função e entraga a variavel valor	
	valor =  maior(num1, num2);
	
	
  //Exibe valor	
	printf("Maior numero: %f", valor);
	
  //Função principal retorna 0, caso tenha um erro n identificado retorna valores aletorios	
	return 0;
}

/*
 * Tipos de funções:
 * void |nome da funcao|(){} //Não precisa de return, já que ela é do tipo vazio
 * int |nome da funcao|() { return 0; }
 * float |nome da funcao|() { return 0; }
 * double |nome da funcao|(){ return 0;}
 * char |nome da funcao|(){ return |variavel tipo char|;}
 * boolean -- não exite no C;
 * Não é todosas funcoes que se precisa de parametro, isso depende da sua necessidade. 
 */
