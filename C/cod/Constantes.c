/*
 * Constantes são valores que não pode ser alterado,existem dois tipos de constantes
 * Define e const
 */
#include <stdio.h>
#include <stdlib.h>
/*
 * Define é uma palavra e não uma variavel que vai receber um valor, durante o código quando ele encontrar 
 * a palavra "pi" ira substituilos pelo valor 3.14.
 */  
#define pi 3.14

int main(){
  //O const antes de "int a = 10;", deifine que está variavel com um valor fixo que não pode ser alterado. 
	const int a = 10;
	printf("Os valores sao fixos %g e %i", pi, a );
}


