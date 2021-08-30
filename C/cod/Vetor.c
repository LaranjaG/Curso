#include<stdio.h>

/*
 * O vetor começa na posição 0
 */

//Função principal
int main(){
		
  float notas[5] = {7, 8, 9.5, 9.9, 5.2}; //Vetor
  int i=0;
  
  // Recebe as notas
	while(i<=4){
  	  printf(" Digite a nota %i: \n ", i);
	  scanf("%f", &notas[i]);
	  i++;
	}
  	
	i=0;
  //Exibe as notas	
  	while (i<5){
  		printf(" Notas[%i] = %g \n",i, notas[i]);
  		i++;
  	}
  
  return 0;
}
