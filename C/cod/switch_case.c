//Escolher bibliotecas necess�rias
#include <stdio.h>
#include <stdlib.h>

int main(){
	
	// Declarar vari�veis necess�rias
    int n1; //Vari�vel para receber nota 1
    int n2; //Vari�vel para receber nota 2
    int n3; //Vari�vel para receber nota 3
	int resultado; //Vari�vel para receber resultado
   
    //Texto para esclarecer qual  o valor que o usu�rio deve entrar
   	printf(" Digite a primeira nota (valor interiro): \n "); //Fun��o para exibir na tela
   	scanf("%i", &n1); //Fun��o para o usu�rio digitar o valor pedido
   	
   	//Texto para esclarecer qual  o valor que o usu�rio deve entrar
   	printf(" Digite a segunda nota (valor interiro): \n "); //Fun��o para exibir na tela
   	scanf("%i", &n2); //Fun��o para o usu�rio digitar o valor pedido
   	
   	//Texto para esclarecer qual  o valor que o usu�rio deve entrar
   	printf(" Digite a terceira nota (valor interiro): \n ");  //Fun��o para exibir na tela
   	scanf("%i", &n3); //Fun��o para o usu�rio digitar o valor pedido
   	
   	/* Como n�mero de mat�rias n�o muda o n�mero 3 se manter� fixo,
	sendo necess�rio apenas as notas como vari�veis, pois v�o variar 
	de acordo com os dados que o usu�rio colocar */
   	resultado = (n1+n2+n3)/3;
   	
   	//escolha caso
   	switch (resultado) {  //A variavel resultado vai determinar qual caso ser� escolhido
		//Determine os casos que poder�o ocorrer
		case 1: // Se resultado igual a 1, ent�o
		case 2: // Se resultado igual a 2, ent�o
		case 3: // Se resultado igual a 3, ent�o
		case 4: // Se resultado igual a 4, ent�o
		case 5: // Se resultado igual a 5, ent�o			
			// Se um dos casos anteriores for atendido executar� o printf
			printf("\n Reprovado \n");  //Fun��o para exibir na tela
		break;
		
		//Se nenhum dos casos anteriores forem atendidos
		default:
			printf("\n Aprovado \n"); //Fun��o para exibir na tela
		break;
	}
	
	//
	return 0;
	system("pause");
}
