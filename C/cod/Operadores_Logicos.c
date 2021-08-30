#include <stdio.h>
#include <stdlib.h>

int main(){
	int x = 1;
	
	printf("X eh igual a 1 ou maior que um : %i \n\n", x == 1 || x > 1);
	printf("Nao X eh igual a 1 ou maior que um : %i", !(x == 1 || x > 1));
}
