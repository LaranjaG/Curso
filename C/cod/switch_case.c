//Escolher bibliotecas necessárias
#include <stdio.h>
#include <stdlib.h>

int main(){
	
	// Declarar variáveis necessárias
    int n1; //Variável para receber nota 1
    int n2; //Variável para receber nota 2
    int n3; //Variável para receber nota 3
	int resultado; //Variável para receber resultado
   
    //Texto para esclarecer qual  o valor que o usuário deve entrar
   	printf(" Digite a primeira nota (valor interiro): \n "); //Função para exibir na tela
   	scanf("%i", &n1); //Função para o usuário digitar o valor pedido
   	
   	//Texto para esclarecer qual  o valor que o usuário deve entrar
   	printf(" Digite a segunda nota (valor interiro): \n "); //Função para exibir na tela
   	scanf("%i", &n2); //Função para o usuário digitar o valor pedido
   	
   	//Texto para esclarecer qual  o valor que o usuário deve entrar
   	printf(" Digite a terceira nota (valor interiro): \n ");  //Função para exibir na tela
   	scanf("%i", &n3); //Função para o usuário digitar o valor pedido
   	
   	/* Como número de matérias não muda o número 3 se manterá fixo,
	sendo necessário apenas as notas como variáveis, pois vão variar 
	de acordo com os dados que o usuário colocar */
   	resultado = (n1+n2+n3)/3;
   	
   	//escolha caso
   	switch (resultado) {  //A variavel resultado vai determinar qual caso será escolhido
		//Determine os casos que poderão ocorrer
		case 1: // Se resultado igual a 1, então
		case 2: // Se resultado igual a 2, então
		case 3: // Se resultado igual a 3, então
		case 4: // Se resultado igual a 4, então
		case 5: // Se resultado igual a 5, então			
			// Se um dos casos anteriores for atendido executará o printf
			printf("\n Reprovado \n");  //Função para exibir na tela
		break;
		
		//Se nenhum dos casos anteriores forem atendidos
		default:
			printf("\n Aprovado \n"); //Função para exibir na tela
		break;
	}
	
	//
	return 0;
	system("pause");
}
