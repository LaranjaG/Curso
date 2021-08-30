#include <stdio.h>
#include <stdlib.h>

//Como funciona IF e Else, Se condição verdadeira 1 senão 0

  int main(){

	int x;

	printf("\n Se 0 entao eh falso, se 1 entao eh verdadeiro\n\n");

	printf(" Escolha uma opcao: \n");

	printf(" 1 Real \n");
	printf(" 2 Dolar \n");
	printf(" 3 Libra \n");
	printf(" 4 Peso dos ermanos \n    ");
	scanf("%i", &x);

	//Primeiro IF, se condicao igual a 1 executar
	printf("\n X eh igual a 1? \n %i \n \n", x == 1);

	//Segundo Else IF, se condicao igual a 2 executar
	printf("\n X eh igual a 2? \n %i \n \n", x == 2);

	//Terceiro Else IF, se condicao igual a 3 executar
	printf("\n X eh igual a 3? \n %i \n \n", x == 3);

	//Quarto Else IF, se condicao igual a 4 executar
	printf("\n X eh igual a 4? \n %i \n \n", x == 4);

	//Else, se valor digitado maior ou menor que as condicao executalo
	printf("\n X eh maior ou menor que as opcoes sugeridas? \n %i \n \n", x > 4 || x<0);

	return 0;
}
