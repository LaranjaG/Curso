window.alert("Atividade I - parte I:\nCrie um script Javascript que, ao ler um número inteiro digitado pelo usuário em um campo numérico, imprima o fatorial desse número.");

window.addEventListener('load', function(){
//Botões númericos
    arrayNumeros = ["numeroZero", "numeroUm", "numeroDois", "numeroTres",
    "numeroQuatro", "numeroCinco", "numeroSeis", "numeroSete",
    "numeroOito", "numeroNove"];
    for(let numero = 0;numero < arrayNumeros.length; numero++){
        document.querySelector("#" + arrayNumeros[numero]).addEventListener("click", adicionarNumero); //Botões numericos
    }
//Botões
    document.querySelector("#c").addEventListener("click", apagar); //Apagar
    document.querySelector("#ac").addEventListener("click", limparDados); //Limpar
    document.querySelector("#maisMenos").addEventListener("click", maisMenos); //Mais ou menos    
    document.querySelector("#fatorar").addEventListener("click", fatorar); //Fatorar
});

//Inputs
    var telaNumero =  document.querySelector("#inputValue");
    var telaResultado = document.querySelector("#resultado");

//Tags 
    var h4 = document.querySelector("#resultadoH4");
    
//Funções
    function maisMenos(){ //Multiplica o valor de ambos os inputs para que se tornem negativo
        if(telaNumero.value != "0"){
            telaNumero.value = telaNumero.value * -1;
            if(telaResultado.value != "") telaResultado.value *= -1;
        }
    }

    function limparDados(){ //Reseta o valor dos dados
        telaNumero.value = "0";
        telaResultado.value = ""; 
    }

    function apagar(){
        if(telaNumero.value < 0 && telaNumero.value > -10) telaNumero.value = ""; //Para que não fique apenas o negativo
        telaNumero.value = telaNumero.value.substr(0, telaNumero.value.length - 1); //Retira a ultma posição da String
        if(telaResultado.value != "") fatorar(); //Ao apagar um digito irá refazer o calculo
        if(telaNumero.value == "") telaNumero.value = "0"; //Da valor 0 a número se ficar o input ficar vazio
    }

    function adicionarNumero(){
        if(telaNumero.value == "0" && (telaResultado.value == "" || telaResultado.value == "0")){ //Para tirar o valor zero inicial, caso zero não tenha sido fatorado
            telaNumero.value = event.target.textContent;
        }else if(telaResultado.value == ""){ // Senão tiver resultado, continue adicionando digitos
            telaNumero.value += event.target.textContent;
        } else{ //Se tiver um resultado vai limpar o valor para ocorrer um novo calculo
            telaNumero.value = event.target.textContent;
            telaResultado.value = "";
        }
    }

    function fatorar(){
        if(telaNumero.value == "" && telaResultado.value != "") { //Para evitar a mensagem de erro ao apagar o ultimo número
            telaResultado.value = "";
        } else {
            let negativo = false;
            
            if(telaNumero.value != ""){
                let fatorando = 1;
                
                if(telaNumero.value < 0){
                    negativo = true;
                    telaNumero.value = telaNumero.value *-1;    
                }
                
                for(let i = parseInt(telaNumero.value); i > 0; i--){
                    if(fatorando == 'Infinity'){ //Para se o número for infinito
                        break;
                    }
                    fatorando *= i;
                }

                if(negativo) {
                    fatorando *= -1;
                    telaNumero.value *= -1; //Evita que o número volte a ser positivo
                    negativo = false;
                }

                telaResultado.value = fatorando;

            } else
                h4.innerHTML = `Escolha um número!`; //Este caso não ira acontecer, pq o valor inical do input é 0
        }
    }