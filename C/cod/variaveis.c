# include <stdio.h>
# include <stdlib.h>

int main(){
	
	char aba = 'a'; //Caracter letras & números
	char numero = 10; //Caracter letras & números
	int inteiro = 100; //Somente números inteiros
	float real = 1.25; // Números reais & inteiros
	double re = 1.2e3; //Números reais (maiores que float suporta) & inteiros
		
	//%c caracter
	//%d nº inteiro
	//%f nº real
	
	printf("%c \n", aba);
	printf("%d \n", numero+1);
	printf("%f \n", real);	
	printf("%f \n", re);
	
	system("pause");
	return 0;
}
