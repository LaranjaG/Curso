window.alert("Atividade I - parte IV:"
            +"\nUm caixa eletrônico opera com notas de 50, 10, 5 e 1. Como medida de segurança, a cada vez que o cliente deseja sacar dinheiro, o valor é dado de forma a fornecer um pequeno volume de notas (supondo que o cliente sempre esteja dentro do seu limite). Esta medida é feita para que a quantidade sacada não “faça muito volume” quando guardada pelo cliente.");

window.addEventListener('load', function(){
//Botões numericos
    arrayNumeros = ["numeroZero", "numeroUm", "numeroDois", "numeroTres",
                    "numeroQuatro", "numeroCinco", "numeroSeis", "numeroSete",
                    "numeroOito", "numeroNove"];
    for(let numero = 0;numero < arrayNumeros.length; numero++){
        document.querySelector("#" + arrayNumeros[numero]).addEventListener("click", adicionarNumero);
    }

//Botão sacar
    document.querySelector("#sacar").addEventListener("click", sacar);

//Botão limpar
    document.querySelector("#c").addEventListener("click", limpar);
});

//Inputs
    let telaValor =  document.querySelector("#inputValue");
    let saque = document.querySelector("#saque");

//Funções
    function limpar(){
        telaValor.value = telaValor.value.substr(0, telaValor.value.length - 1);
        
        if(telaValor.value != "" && saque.value != ""){ 
            sacar();
        } else saque.value = "";
        
    }

    function adicionarNumero(){
        if(telaValor.value == "0"){ //Caso o primeiro valor tenha sido 0
            telaValor.value = event.target.textContent;
        } else if(saque.value == ""){ //Aumentar o valor do número do input
            telaValor.value += event.target.textContent;
        } else{ //Recomeçar caso já tenha sacado
            telaValor.value = event.target.textContent;
            saque.value = "";
        }
    }

    function sacar(){
        if(telaValor.value != "" && telaValor.value > 0){
            let notaCinquenta = 0;
            let notaDez = 0;
            let notaCinco = 0;
            let notaUm = 0;
            let valor = telaValor.value;

            while(valor > 0){
                if(valor - 50 >= 0){
                    valor -= 50;
                    notaCinquenta++;
                } else if(valor - 10 >= 0){
                    valor -= 10;
                    notaDez++;
                } else if(valor - 5 >= 0){
                    valor -= 5;
                    notaCinco++;
                } else if(valor - 1 >= 0){
                    valor -= 1;
                    notaUm++;
                }
            }

            saque.value = ""; //Limpar o valor do textarea caso esteja com algum resultado

            saque.value += (notaCinquenta != 0 ? "Notas de cinquenta = " + notaCinquenta + "\n" : "");
            saque.value += (notaDez != 0 ? "Notas de dez = " + notaDez + "\n" : "");
            saque.value += (notaCinco != 0 ? "Notas de cinco = " + notaCinco + "\n" : "");
            saque.value += (notaUm != 0 ? "Notas de um = " + notaUm + "\n" : "");
        } else
            window.alert("Digite um valor!");
    }