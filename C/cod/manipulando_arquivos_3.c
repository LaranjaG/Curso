#include <stdio.h>
#include <stdlib.h>

int main(void){
	//Ponteiro que aponta o tipo de arquivo de dados
	FILE *arquivo;
	
	//Busca o arquivo de texto, com a fun��o de leitura r
	arquivo = fopen("extra.txt", "r");
	
	//Var
	int i = 0;
	char conteudo[500];
	
	//leitura do arquivo
	while(fgets(conteudo, 500, arquivo) != NULL){
		//Substitui na leitura do arquivo ';' por '|'
  		for (i = 0; i < strlen(conteudo); ++i){
			//Se caracter corresponde a ';'
			if(conteudo[i] == ';'){
				//Ent�o ser� trocado por '|'
				conteudo[i] = '|';
			}
		}
		//Adicionar ponto final no fim de cada linha
		for (i = 0; i < strlen(conteudo); ++i){
			//Se caracter corresponde a ';'
			if(conteudo[i] == '\n'){
				//Ent�o ser� trocado por '|'
				conteudo[i] = '.';
			}
		}
		
		//Imprime o valor
		printf("  %s \n\n", conteudo);
	}
	
	//Fecha o arquivo caso seja feita alguma altera��o e salva
	fclose(arquivo);
	
	return 0; 
}
