#include <stdio.h>
#include <stdlib.h>

int main(void){
	//Ponteiro que aponta o tipo de arquivo de dados
	FILE *ponteiro;
	
	//Chama o arquivo 
	//Caso ele n�o exista ser� criado
	ponteiro = fopen("C:\\Users\\raysl\\OneDrive\\Documentos\\carai_agora_vai.txt", "w");
	fprintf(ponteiro, "2");
	fclose(ponteiro);
	return 0; 
}
