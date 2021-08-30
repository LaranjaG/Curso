window.alert("Atividade I - parte II: \nFaça um script que receba uma data no formato “dd/mm/aaaa” (usando um campo date HTML) e escreva a data por extenso. Dica: use a função “split” de uma string que quebra a string em pedaços dado um separador como argumento da função. Nesse caso, o separador é a barra (/) da data.");
window.alert("Na verdade o separador é (-)");

window.addEventListener('load', function(){
//Função que é executada ao dar um toque na tela
    data.onblur = function(){ 
        let arrayData = new Array;
            
        for(let i = 0; i < data.value.split('-').length; i++){ //transforma a String em uma array
            arrayData.push(data.value.split('-')[i]);
        }

        converte.value = converter(arrayData);
        let variavel = document.querySelector("#resultadoH4");
        variavel.innerHTML = converter(arrayData);
    }
});

//Inputs
    let data = document.querySelector("#data");
    let converte = document.querySelector("#converter");

//Função de conversão
    function converter(arrayData){
    //Data tem apenas esse 3 valores, então...
        let ano = arrayData[0];
        let mes = parseInt(arrayData[1]);
        let dia = arrayData[2];
      
         arrayMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                     "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        vetorData = { 01: 'Janeiro', 02: 'Fevereiro', 03: 'Março', 04: 'Abril', 05: 'Maio', 06: 'Junho', 
                      07: 'Julho', 08: 'Agosto', 09: 'Setembro', 10: 'Outubro', 11: 'Novembro', 12: 'Dezembro'};
   
        //return (`${dia} de ${vetorData[parseInt(arrayData[1])]} de ${ano}`); 
        return (dia +" de "+ vetorData[mes] +" de "+ ano);
        //Só consegue pegar o dado se o tipo da variavel q ele recebe for númerica, por isso converter para int
        //E o vetor devolve o valor como String
    }