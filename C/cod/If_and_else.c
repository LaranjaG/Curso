# include <stdio.h>
# include <stdlib.h>

/*
 * Cada if tem apenas um else
 * Se criar uma sequencia de if's eles vão testar todos os casos
 * Se ultilizar else if ele testa até achar a opção verdadeira 
 */

void main(){
	
  //Var
	int escolha;
	float primeiro_n;
	float segundo_n;
	float result;

  //Titulo
	printf("\n Soma ou subtracao: \n \n");
	
  //
	printf(" Escolha o primeiro numero: \n  ");
	scanf("%f", &primeiro_n);
	
	printf(" Escolha o segundo numero: \n  ");
	scanf("%f", &segundo_n);
	
	printf(" Escolha 1 para executar uma soma: \n");
	printf(" Escolha 2 para executar uma subtracao: \n");
	printf(" Escolha 3 para executar uma multiplicacao: \n");
	printf(" Escolha 4 para executar uma divisao: \n  ");
	scanf("%d", &escolha);
	
	// || == ou 
	// && == e

	if(escolha == 1){
		result = primeiro_n+segundo_n;
		printf("\n Resultado da soma: %g \n \n", result);
	}
	
	else if(escolha == 2){
		result = primeiro_n-segundo_n;
		printf("\n Resultado da subtracao: %g \n \n", result);
	}
	
	else if(escolha == 3){
		result = primeiro_n*segundo_n;
		printf("\n Resultado da multiplicacao: %g \n \n", result);
	}
	
	else if(escolha == 4){
		result = primeiro_n/segundo_n;
		printf("\n Resultado da divisao: %g \n \n", result);
	}
	

	else printf("\n ERRO: Numero invalido. \n \n");		
	
	//
	system("pause");
	return 0;
}
