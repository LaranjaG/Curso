#include <stdio.h>
#include <stdlib.h>

//Abrir fun��o
int main()
{
	
	//Variaveis
	int escolha;
	float primeiro_n;
	float segundo_n;

	
	//Escreva
	printf(" Escolha o primeiro numero: \n  ");
	//Leia
	scanf("%f", &primeiro_n);
	
	//Escreva
	printf(" Escolha o segundo numero: \n  ");
	//Leia
	scanf("%f", &segundo_n);
	
	//Escreva as op��es
	printf(" Escolha 1 para executar uma soma: \n");
	printf(" Escolha 2 para executar uma subtracao: \n");
	printf(" Escolha 3 para executar uma multiplicacao: \n");
	printf(" Escolha 4 para executar uma divisao: \n  ");
	scanf("%d", &escolha);
	
	//Operador Tern�rio
	
	//Se escolha igual a 1 executar o que vem ap�s "?" Sen�o ":" 
	(escolha == 1) ? printf("Resultado: %g \n", primeiro_n + segundo_n) : 
	//Se escolha igual a 2 executar o que vem ap�s "?" Sen�o ":"
	(escolha == 2) ? printf("Resultado: %g \n", primeiro_n - segundo_n) : 
	//Se escolha igual a 3 executar o que vem ap�s "?" Sen�o ":"
 	(escolha == 3) ? printf("Resultado: %g \n", primeiro_n * segundo_n) : 
	//Se escolha igual a 4 executar o que vem ap�s "?" Sen�o ":"
	(escolha == 4) ? printf("Resultado: %g \n", primeiro_n / segundo_n) : 
	//Sen�o Escreva "Valor invalido"
	printf("\n Valor invalido\n");
	
	return 0;
	
}


