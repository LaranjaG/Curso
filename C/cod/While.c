# include <stdio.h>
# include <stdlib.h>

//Conte de 0 a 100

int main(){
	int a=5; //a est� vazio, significa que seu valor � 0
	
	//enquanto menor ou igual a 100 fa�a
	while (a<=0) {
		//Escreva
		printf("%i \n", a); //Exibe o valor de a enquanto condi��o for verdadeira
		
		/*Soma para que toda vez que o while for executado receba +1 ao valor de a
		 se n�o tiver isso o while sempre ser� verdadeiro e nunca ter� fim*/
		a++; // a++ � a mesma coisa que a=a+1;
	}
	//Escreva
	printf("O while acabou"); //Esta linha s� ser� executada quando o while acabar
	return 0;
}


