#include <stdio.h>
#include <stdlib.h>

int main(void){
	//Ponteiro que aponta o tipo de arquivo de dados
	FILE *ponteiro;
	
	//Chama o arquivo 
	//Caso ele não exista será criado
	
	ponteiro = fopen("C:\\Users\\raysl\\OneDrive\\Documentos\\carai_agora_vai.txt", "r");
	
	if(ponteiro == NULL){
		printf("\n ERRO: Arquivo nao encontrado! \n");
		return 1;
	}
	
	int i;
	fscanf(ponteiro, "%i", &i);
	
	printf("%i", i);
	fclose(ponteiro);
	return 0; 
}
