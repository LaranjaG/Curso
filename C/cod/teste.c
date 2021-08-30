#include <stdio.h>
#include <stdlib.h>

void main(){
	
	//Instanciando as variaveis
	int i = 0;
	int valor[4];
	
	//Inicio do laço de repetição
	while (i < 4){
		
		//Obtendo os valores
		printf("Digite um numero inteiro \n");
		scanf("%i", &valor[i]);
		
		//Procurando o maior valor
		if (i == 3){
			
			if (valor[0] > valor[1] && valor[0] > valor[2] && valor[0] > valor[3]){
			printf("O maior valor e: %i \n", valor[0]);
			}
			
			if (valor[1] > valor[0] && valor[1] > valor[2] && valor[1] > valor[3]){
			printf("O maior valor e: %i \n", valor[1]);
			}
			
			if (valor[2] > valor[0] && valor[2] > valor[1] && valor[2] > valor[3]){
			printf("O maior valor e: %i \n", valor[2]);
			}
			
			if (valor[3] > valor[0] && valor[3] > valor[1] && valor[3] > valor[2]){
			printf("O maior valor e: %i \n", valor[3]);
			}
			
			
		}
		
		//Procurando o menor valor
		if (i == 3){
			
			if (valor[0] < valor[1] && valor[0] < valor[2] && valor[0] < valor[3]){
			printf("O menor valor e: %i \n", valor[0]);
			}
			
			if (valor[1] < valor[0] && valor[1] < valor[2] && valor[1] < valor[3]){
			printf("O menor valor e: %i \n", valor[1]);
			}
			
			if (valor[2] < valor[0] && valor[2] < valor[1] && valor[2] < valor[3]){
			printf("O menor valor e: %i \n", valor[2]);
			}
			
			if (valor[3] < valor[0] && valor[3] < valor[1] && valor[3] < valor[2]){
			printf("O menor valor e: %i \n", valor[3]);
			}
			
			
		}
		
		//Incrementando o indice
		i++;
	//Fim do laço de repetição
	}		
}
