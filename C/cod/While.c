# include <stdio.h>
# include <stdlib.h>

//Conte de 0 a 100

int main(){
	int a=5; //a está vazio, significa que seu valor é 0
	
	//enquanto menor ou igual a 100 faça
	while (a<=0) {
		//Escreva
		printf("%i \n", a); //Exibe o valor de a enquanto condição for verdadeira
		
		/*Soma para que toda vez que o while for executado receba +1 ao valor de a
		 se não tiver isso o while sempre será verdadeiro e nunca terá fim*/
		a++; // a++ é a mesma coisa que a=a+1;
	}
	//Escreva
	printf("O while acabou"); //Esta linha só será executada quando o while acabar
	return 0;
}


