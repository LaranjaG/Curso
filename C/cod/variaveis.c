# include <stdio.h>
# include <stdlib.h>

int main(){
	
	char aba = 'a'; //Caracter letras & n�meros
	char numero = 10; //Caracter letras & n�meros
	int inteiro = 100; //Somente n�meros inteiros
	float real = 1.25; // N�meros reais & inteiros
	double re = 1.2e3; //N�meros reais (maiores que float suporta) & inteiros
		
	//%c caracter
	//%d n� inteiro
	//%f n� real
	
	printf("%c \n", aba);
	printf("%d \n", numero+1);
	printf("%f \n", real);	
	printf("%f \n", re);
	
	system("pause");
	return 0;
}
