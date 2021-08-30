#include<stdio.h>

int main( )
{
  int i,j, notas[2][2];
  

  // Recebe as notas
	for(j = 0; j<2; j++){
		for(i = 0; i<2; i++){	 
  	  		printf(" Digite a nota: \n ");
	  		scanf("%i", &notas[j][i]);
		}
	}
  	
	for(j = 0; j<2; i++){
		for(i = 0; i<2; i++){	 
  	  		printf(" Notas %i\n  ", notas[j][i]);
		}
	}
  
  
  return 0;
}
