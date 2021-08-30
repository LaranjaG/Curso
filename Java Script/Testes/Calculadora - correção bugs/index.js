let inputCalculo = document.querySelector("#inputCalculo");
let inputValor = document.querySelector("#inputValor");
let statusArray = document.querySelector("#array");
var arrayCalculo = new Array;

window.addEventListener('load', function(){
    //Botões númericos
        let arrayNumeros = ["numeroZero", "numeroUm", "numeroDois", "numeroTres", "numeroQuatro", 
                            "numeroCinco", "numeroSeis", "numeroSete","numeroOito", "numeroNove"];
        for(let numero = 0;numero < arrayNumeros.length; numero++){
            document.querySelector(`#${arrayNumeros[numero]}`).addEventListener('click', addNumero); //Botões numericos
        }

    //Operadores   
        document.querySelector("#mais").addEventListener('click', () => addOperador('+'));
        document.querySelector("#menos").addEventListener('click', () => addOperador('-'));
        document.querySelector("#multiplicacao").addEventListener('click', () => addOperador('*'));
        document.querySelector("#divisao").addEventListener('click', () => addOperador('/'));
        document.querySelector("#portentagem").addEventListener('click', () => addOperador('%'));
        document.querySelector("#c").addEventListener('click', () => apagar());
        document.querySelector("#ac").addEventListener('click', () => resetar());
        document.querySelector("#fatorar").addEventListener('click', () => addOperador('!'));

        document.querySelector("#resultado").addEventListener('click', resultado);
});

const addNumero = () =>{
    if(inputValor.value == "0" || inputValor.value == ""){ //Para tirar o valor zero inicial, caso zero não tenha sido fatorado
        inputValor.value = event.target.textContent;
    }else if(inputCalculo.value.indexOf('=') != -1){ // Senão tiver resultado, continue adicionando digitos
        inputValor.value = event.target.textContent;
        inputCalculo.value = "";
        arrayCalculo = new Array;
    } else{ //Se tiver um resultado vai limpar o valor para ocorrer um novo calculo
        inputValor.value += event.target.textContent;
    }
}

const addOperador = (operador) =>{ //É necessário reconstruir a array em alguns casos!
    arrayCalculo = resetarArray(arrayCalculo, inputCalculo);

    let ultimo = arrayCalculo.length - 1;

    console.log(`ultimo: ${arrayCalculo[arrayCalculo.length -1]}`);
    

    arrayCalculo = checar(arrayCalculo);

    if(inputValor.value != ''){ //Essa condição já trava caso tente adicionar dois operadores, já que o inputValor é apagado
        inputCalculo.value += `${inputValor.value}${operador}`;
        arrayCalculo.push(parseInt(inputValor.value));  
        arrayCalculo.push(operador);
        inputValor.value = "";
        statusArray.innerHTML = arrayCalculo;   
    } else if(arrayCalculo.length > 0 && (arrayCalculo[ultimo] != '!' && arrayCalculo[ultimo] != '%' && arrayCalculo[ultimo] != '(' && arrayCalculo[ultimo] != ')')){
        console.log(`É um número? ${isNaN(arrayCalculo[arrayCalculo.length-1]) }`);
        console.log(`Tipo? ${isNaN(arrayCalculo[arrayCalculo.length-1])}`);
        console.log(`Tipo? ${isNaN(arrayCalculo[arrayCalculo.length-2])}`);
        console.log(`Valor? ${arrayCalculo[arrayCalculo.length-2]}`);
        if (isNaN(arrayCalculo[arrayCalculo.length-1])){
            arrayCalculo.pop();
            inputCalculo.value = apagarString(inputCalculo.value);
        }
        arrayCalculo.push(operador);
        statusArray.innerHTML = arrayCalculo;
        
        
        inputCalculo.value += operador;
    } else if(arrayCalculo[ultimo] == '!' || arrayCalculo[ultimo] == '%' || arrayCalculo[ultimo] == '(' || arrayCalculo[ultimo] == ')'){
        if(operador == '*' || operador == '/' || operador == '+' || operador == '-'){
                arrayCalculo.push(operador);
                inputCalculo.value += operador;
        }
    } else
        throw 2;
    }


const apagar = () =>{
    if(inputCalculo.value.indexOf("=") == -1){//Não permite apagar quando se gera um resultado
        if(inputValor.value == ""){
            inputCalculo.value = apagarString(inputCalculo.value);
            arrayCalculo.pop();
        }

        else if(inputValor.value < 0 && inputValor.value > -10) inputValor.value = ""; //Para que não fique apenas o negativo
        inputValor.value = apagarString(inputValor.value); //Retira a ultma posição da String
        // if(inputCalculo.value != "") fatorar(); //Ao apagar um digito irá refazer o calculo
        // if(inputValor.value == "") telaNumero.value = "0"; //Da valor 0 a número se ficar o input ficar vazio
    }
}

const apagarString = (string) =>{
    return string.substr(0, string.length - 1);
}

const resetar = () =>{
    inputCalculo.value = "";
    inputValor.value = "0";
    arrayCalculo = new Array;
}
 
const resultado = () =>{
    arrayCalculo = checar(arrayCalculo);

    if(!(inputCalculo.value.indexOf('=') != -1 && arrayCalculo.length == 1)) arrayCalculo = resetarArray(arrayCalculo, inputCalculo);

    let ultimoValorArray = arrayCalculo[arrayCalculo.length-1];

    console.log(`mas q porra é essa ${ultimoValorArray} é? ${isNaN(ultimoValorArray)}`);

    if(isNaN(ultimoValorArray)){ //Checa se a ultima posição é ou não um número
        if(inputValor.value != ""){ //Se tiver números no input para adicionar a array
            inputCalculo.value += inputValor.value;
            arrayCalculo.push(parseInt(inputValor.value));
        } else if(ultimoValorArray != '%' && ultimoValorArray != '!' && arrayCalculo.length > 0 && inputValor.value != "0"){
            arrayCalculo.pop(); //Se não tiver números no input para adicionar a array ele apaga a ultma operação
            statusArray.innerHTML = arrayCalculo;
            
            inputCalculo.value = inputCalculo.value.substr(0,inputCalculo.value.length - 1);
            //inputCalculo.value += `=`;
        }
    }

    try{
        inputValor.value = executarCalculo(arrayCalculo).toString();
        inputCalculo.value += ` =`;
        statusArray.innerHTML = arrayCalculo;
    } catch(e){
        if(e == `Não é possivel dividir por 0`){
            window.alert(e);
            resetar();
        } else
            console.log(`ERRO: ${e}`);
    }   
}

const checar = (array) =>{
    if((array[array.length - 1] == '!' || array[array.length - 1] == '%') && inputValor.value != ''){
        array.push('*');
        inputCalculo.value += '*';
    }
    return array;
}

const executarCalculo = (array) =>{
    console.log(`WTF: ${array}`);
    let posicao = null;
    
    if(inputCalculo.value.indexOf('=') != -1) throw inputValor.value;

    if(array.length == 0) throw 0;
     
    //if((!isNaN(array[array.length - 1]) && !isNaN(array[array.length - 1])) || arrayCalculo.length == 1) throw 'segunddo caso';

    console.log(`Array length: ${array}`);

    while(array.length > 1){

        if(array.indexOf('%') != -1){
            array = calcularPorcentagem(array);
            console.log(`WTF - 2: ${array}`);
         
        }else if(array.indexOf('(') != -1){

        }else if(array.indexOf('!') != -1){
            array = fatorar(array);
            
            console.log(`WTF - 3: ${array}`);
        }
        else if(posicao = array.indexOf('*') != -1 || array.indexOf('/') != -1){
            console.log(`Eu to rodando`); 
            if (array.indexOf('*') != -1 && array.indexOf('/') != -1) //Quando tem + e - executa qm vem primeiro
                posicao = (array.indexOf('*') < array.indexOf('/')) ? array.indexOf('*') : array.indexOf('/'); //Escolher por qual vem primeiro
            else //Quando tem + ou - entraga o valor do disponivel
                posicao = (array.indexOf('*') != -1) ? array.indexOf('*') : array.indexOf('/');
        
            if(array[posicao] == '/' && array[posicao+1] == 0){ throw 'Não é possivel dividir por 0'};
            console.log(`O que tem aqui? ${array[posicao+1]}`);
            array = calcularArray(array, posicao, array[posicao]);
        } else if(array.indexOf('+') != -1 || array.indexOf('-') != -1){
            if (array.indexOf('+') != -1 && array.indexOf('-') != -1) //Quando tem + e - executa qm vem primeiro
                posicao = (array.indexOf('+') < array.indexOf('-')) ? array.indexOf('+') : array.indexOf('-'); //Escolher por qual vem primeiro
            else //Quando tem + ou - entraga o valor do disponivel
                posicao = (array.indexOf('+') != -1) ? array.indexOf('+') : array.indexOf('-');
            array = calcularArray(array, posicao, array[posicao]);
        } else{
            break;
        }
        
        
    }
    console.log("Sai do while");
    return array;
}

const calcularArray = (array, posicao, operador) =>{ 
    let calculo = eval(`${array[posicao - 1]} ${operador} ${array[posicao+1]}`);
    array[posicao - 1] = calculo;
    array.splice(posicao, 2);
    return array;
}

const resetarArray = (array, telaCalculo) =>{
    if(telaCalculo.value.indexOf('=') != -1){
        telaCalculo.value = "";
        return new Array;
    }
    return array;
}

const calcularPorcentagem = (array) =>{ //Tá tendo muito erro, preciso confirmar alguns conceitos
    while(array.indexOf('%') != -1){
        let porcento = array.indexOf('%');
        let operador = porcento - 2;
        let numero = array[porcento - 1];
        let soma = array[porcento - 3];
        let arrayAssistente = new Array;

        if(porcento !=  array.length -1){
            for(let i = porcento + 1; i < array.length; i++){
                arrayAssistente.push(array[i]);
            }

            array = removerItemArray(array, porcento + 1, array.length - porcento);
            console.log(`Exclui certo? ${array} `);
        }

        if(array[operador] == '*' || array[operador] == '/' || array.length == 2){
            console.log(`Fui executado \n Array: ${array}`);
            array = removerItemArray(array, porcento, 1);
    
            numero *= 0.01;
        
            array[operador + 1] = numero;

            console.log(`array porcento: ${array}`);
            
        } else if(array[operador] == '+' || array[operador] == '-'){
            let arrayAuxiliar = new Array;
            
            if(array.length > 4){
                for(let i = 0; i < porcento - 2; i++){
                    arrayAuxiliar.push(array[i]);
                }
                soma = executarCalculo(arrayAuxiliar);
            }

            if(soma == 0){
                array[porcento] = 0;
                array = removerItemArray(array, 0, porcento);
            } else {
                let calculo = numero * soma /100;
                soma = eval(`${soma} ${array[operador]} ${calculo}`);

                array[porcento] = soma;
                array = removerItemArray(array, 0, porcento);
                
            }
        }
        
        if(arrayAssistente.length > 0){
            for(let i = 0; i < arrayAssistente.length; i++){
                array.push(arrayAssistente[i]);
            }
        }
    }

    return array;
}

const removerItemArray = (array, posicao, quantidade) =>{
    array.splice(posicao, quantidade);
    return array;
} 

const fatorar = (array) =>{
    let negativo = false;        
    let fatorando = 1;
    let arrayAuxiliar = new Array;
    let posicao = (array.indexOf('!') != -1 ? array.indexOf('!') : '');



    console.log(`array aux: ${array}`);
    
    if(array[posicao - 1] < 0){
        negativo = true;
        array[posicao - 1] *= -1; //Torna o valor positivo para calcular 
    }

    for(let i = parseInt(array[posicao-1]); i > 0; i--){
        if(fatorando == 'Infinity'){ //Para se o número for infinito
            break;
        }
        fatorando *= i;
    }

    if(negativo) fatorando *= -1;

    array[posicao-1] = fatorando;
    array = removerItemArray(array, posicao, 1);

    if(array.length > 1) array = executarCalculo(array);
    console.log(`Array: ${array}`);

    return array;
}
