let inputResultado = document.getElementById("inputDisplayResultado"); 
var arrayCalculo = new Array;

let telaCalculo = document.getElementById("inputCalculo");
telaCalculo.value = "";
inputResultado.value = "0"

let novoNumero = true;
var bug = false;
var apagar = false;

let resultRaiz = false;
//Adicionar evento para inicar janela carregar
window.addEventListener("load", function(){
    atribuirEventos();
});

//Atribuir evento para o botão da calculadora
function atribuirEventos(){
    for(let i = 0; i < 10; i++){
        document.getElementById(i).addEventListener("click", inserirNumero);
    }

    document.getElementById("ac").addEventListener("click", limparDados);
    document.getElementById("c").addEventListener("click", limpar);
    document.getElementById("abrir").addEventListener("click", abrir);
    document.getElementById("fechar").addEventListener("click", fechar);
    document.getElementById("ponto").addEventListener("click", inserirPonto)
    document.getElementById("soma").addEventListener("click", soma)
    document.getElementById("divisao").addEventListener("click", divisao);
    document.getElementById("multiplicacao").addEventListener("click", multiplicacao);
    document.getElementById("subtracao").addEventListener("click", subtracao);
    document.getElementById("=").addEventListener("click", resultado);
    document.getElementById("maisOumenos").addEventListener("click", converter);
    document.getElementById("%").addEventListener("click", porcento);
    document.getElementById("raizQuadrada").addEventListener("click", raiz);
    document.getElementById("elevado").addEventListener("click", elevado);
    
}

function converter(){
        if(inputResultado.value != ""){
            inputResultado.value = parseFloat(inputResultado.value) * -1; 
        }
}

const inserirPonto = () =>{
    if(apagar){
        inputResultado.value = "";
        telaCalculo.value = "";
        apagar = false;
    }
    if(inputResultado.value == "" || inputResultado.value == "0"){
        inputResultado.value = "0.";
    } else if(inputResultado.value.indexOf('.') == -1){
        inputResultado.value += ".";
    }
}
 
//Vai inserir numero do display
function inserirNumero(){
    //console.log(inputResultado.value); 
   
    if(inputResultado.value == "0"){
        inputResultado.value = event.target.textContent;
        console.log("ARRAY CARAI: " + arrayCalculo);
        apagar = false;
    }else if(apagar){
        inputResultado.value = event.target.textContent;
        telaCalculo.value = "";
        apagar = false;
    } else{
        inputResultado.value += event.target.textContent;
    }
}


 function raiz(){
    if(telaCalculo.value.indexOf("=") != -1){
        telaCalculo.value = "";
    }
    resultRaiz = true;
    resultado();

 }

function abrir(){
    inserirParenteses("(");
}
function fechar(){
    //Não permite que parenteses sejam fechados senão foram abertos
    if(arrayCalculo.indexOf("(") != -1){
        let abertos = 0;
        let fechados = 0;
        for(let i = 0; i< arrayCalculo.length; i++){
            if(arrayCalculo[i] == "("){
                abertos++;
            }
            if(arrayCalculo[i] == ")"){
                fechados++;
            }
        }
        if(abertos > fechados){
            inserirParenteses(")");
        }
    }

}
function divisao(){
    inserirOperacao("/");
}

function soma(){
    inserirOperacao("+");
}

function subtracao(){
    inserirOperacao("-");
}

function multiplicacao(){
    inserirOperacao("*");
}

function porcento(){
    inserirOperacao("%");
}

function elevado(){
    inserirOperacao("^");
}

function inserirParenteses(n){
    if(telaCalculo.value.indexOf("=") != -1){
        telaCalculo.value = "";
        apagar = false;
    }
    console.log("WTF?");
    if(inputResultado.value != "0" && inputResultado.value != ""){
        arrayCalculo.push(parseFloat(inputResultado.value));
        telaCalculo.value += inputResultado.value;
        inputResultado.value = "";
    }
    
    arrayCalculo.push(n);
    console.log(arrayCalculo);
    telaCalculo.value += n;
}

function inserirOperacao(n){
    if(apagar){
        telaCalculo.value = "";
        apagar = false;
    }
    if(inputResultado.value == "0."){
    } else{
    if(bug && n == "%"){
        telaCalculo.value = "";
    }
    if(telaCalculo.value.indexOf("=") != -1){
        telaCalculo.value = ""; 
    }
    if(!Number.isNaN(parseFloat(inputResultado.value))){ // Para n ficar adicionando - 0, caso input esteja vazio
        
        if(inputResultado.value != ""){
            arrayCalculo.push(parseFloat(inputResultado.value));
        }
    } 
    let ultimaPosicao = arrayCalculo[arrayCalculo.length - 1];

    if(ultimaPosicao != "+" && ultimaPosicao != "-" && ultimaPosicao != "*" && ultimaPosicao != "/" && ultimaPosicao != "(" && ultimaPosicao != "^"){

        if(inputResultado.value == "" && n != "%" && inputResultado.value != "("){
            if(arrayCalculo[arrayCalculo.length - 1] != undefined){
                inputResultado.value = arrayCalculo[arrayCalculo.length - 1];
            } else{
                inputResultado.value = "0";
            }
        }
        
        if(telaCalculo.value.indexOf("=") != -1){
                telaCalculo.value = ""; 
        }

        telaCalculo.value += inputResultado.value;
        telaCalculo.value = telaCalculo.value.replace("+-", "+(-");
        telaCalculo.value = telaCalculo.value.replace("--", "-(-");
        telaCalculo.value = telaCalculo.value.replace("*-", "*(-");
        telaCalculo.value = telaCalculo.value.replace("/-", "/(-");

        if(telaCalculo.value.indexOf("(") != -1){
             //telaCalculo.value += ")";
        }
        
        if(!(ultimaPosicao == "%" && n == "%")){
            arrayCalculo.push(n);
            telaCalculo.value += n; 
        }
        
        inputResultado.value = "";
    }

}
}
function resultado(){
    if(arrayCalculo.lastIndexOf("(") == arrayCalculo.length -1 && inputResultado.value == ""){
        arrayCalculo.pop();
    }


    fecharParenteses(arrayCalculo);
    
    if(inputResultado.value == "0."){}
    else{
    if(telaCalculo.value.indexOf("=") == -1){
        
        if(arrayCalculo.indexOf("%") == -1){ //% é o ultimo valor adicionado, seguinifica que n tem mais numeros para serem
            console.log("Eu to rodando?");
            if(inputResultado.value != "" && arrayCalculo[arrayCalculo.length - 1] == -1){
                telaCalculo.value += inputResultado.value;
                telaCalculo.value = telaCalculo.value.replace("+-", "+(-");
                telaCalculo.value = telaCalculo.value.replace("--", "-(-");
                telaCalculo.value = telaCalculo.value.replace("*-", "*(-");
                telaCalculo.value = telaCalculo.value.replace("/-", "/(-");
                if(telaCalculo.value.indexOf("(") != -1){
                    //telaCalculo.value += ")";
                }
                telaCalculo.value += "=";
                    arrayCalculo.push(parseFloat(inputResultado.value));        
            }else{
                telaCalculo.value += "=";
            }
            
        }  
        
        let ultimaPosicao = arrayCalculo[arrayCalculo.length - 1];
        let ultimaPosicaoComPorcentagem = "?";
        if(ultimaPosicao == "%"){
            ultimaPosicaoComPorcentagem = arrayCalculo[arrayCalculo.length - 2];
        }

        if(((ultimaPosicaoComPorcentagem != "+" && ultimaPosicaoComPorcentagem != "-" && ultimaPosicaoComPorcentagem != "*" && ultimaPosicaoComPorcentagem != "/"))){
            if(arrayCalculo.indexOf("%") != -1){
                telaCalculo.value += "=";
            }
            if(ultimaPosicao == ")"){
                console.log("E eu to rodando por acaso?");
                let teste = arrayCalculo[arrayCalculo.length - 2];
                window.alert("VAMOR VER O Q TEM AQUI" + teste);
                if(teste == "+" || teste == "-" || teste == "*" || teste == "/"){
                    arrayCalculo.splice(arrayCalculo.length - 2, 1);
                    window.alert("ARRAY GUYS: " + arrayCalculo);
                    telaCalculo.value = telaCalculo.value.substr(0,telaCalculo.value.length - 3);
                    telaCalculo.value += "=";
                    // bug = true; // Vai peritir apagar se o botão % for apertado e n querer q o valor antigo faça parte para mostrar para o usuario
                }
            }
            if(ultimaPosicao == "+" || ultimaPosicao == "-" || ultimaPosicao == "*" || ultimaPosicao == "/"){
                arrayCalculo.pop();
                telaCalculo.value = telaCalculo.value.substr(0,telaCalculo.value.length - 1);
                bug = true; // Vai peritir apagar se o botão % for apertado e n querer q o valor antigo faça parte para mostrar para o usuario
            }   
                console.log("Verdadeiro ou falso? " + checarArray(arrayCalculo));
                console.log("Valor da array: " + arrayCalculo);
                arrayCalculo = result(arrayCalculo);
                
            
                if(arrayCalculo.length > 1){
                    console.log("Valor da array: " + arrayCalculo);
                    console.log("length: " + arrayCalculo.length);
                    arrayCalculo.shift();
                    
                    
                }
                
                apagar = true;
                
                inputResultado.value = arrayCalculo;
            
            }
        }
    
    }
}
function fecharParenteses(array){
    if(inputResultado.value != ""){
        array.push(parseFloat(inputResultado.value));
        telaCalculo.value += inputResultado.value;
        inputResultado.value = "";
    }
    
    let abertos = 0;
    let fechados = 0;
    for(let i = 0; i< array.length; i++){
        if(array[i] == "("){
            abertos++;
        }
        if(array[i] == ")"){
            fechados++;
        }
    }
    console.log("entre loops");
    console.log("ABERTO: " + abertos);
    console.log("FECHADOS: " + fechados);
    while(abertos != fechados){
        if(abertos > fechados){
            array.push(")");
            window.alert("TO AQUI OU TO DOIDA?");
            telaCalculo.value += ")";
            abertos--;
        }
        if(abertos == fechados){
            break;
        }
    }

    console.log("ARRAY: " + arrayCalculo );
}


//Limpar dados input
function limparDados(){
    inputResultado.value = "0";
    arrayCalculo = new Array;
    telaCalculo.value = ""; 
}

function limpar(){
    if(telaCalculo.value.indexOf("=") == -1){
        if(inputResultado.value != "" && inputResultado.value != "0"){
            if(inputResultado.value.indexOf("-") != -1){
                inputResultado.value = "";
            } else
            inputResultado.value = inputResultado.value.substr(0,inputResultado.value.length - 1);
            if(inputResultado.value == "")
                inputResultado.value = "0";
        }
    }
}

function checarArray(array){
    let ultimaPosicao = array[array.length - 1];
    console.log("Ultima posição: " + ultimaPosicao);
    if(ultimaPosicao != "+" && ultimaPosicao != "-" && ultimaPosicao != "*" && ultimaPosicao != "/"){
        return true;
    }
    return false;
}

function result(result){
    
    if(result.indexOf("(") != -1){
        for(let i = result.lastIndexOf("("); i <= result.indexOf(")"); i++){
            if(result[i] == "%"){
                porcentagem(result);
                i = result.lastIndexOf("(");
                continue;         
            }
            
        }
        result = (parenteses(result));
    }
    console.log("Rodei 1");
    if(result.indexOf("%") != -1){
        porcentagem(result);
        console.log("Rodei porcentagem");
    }

    if(1 < result.length){
        window.alert("EU to rodando?")
        result = calcula(result);
        console.log("Rodei calculo");
    }


    if(resultRaiz){
        if(result.length > 1) result.shift();
        console.log("COMO TA NOSSA MADRI ??: " + result);
        telaCalculo.value = "raiz de " + result +" =";
        if(true){
            result[0] = (Math.sqrt(result[0]));
        }
        

        
        console.log("COMO TA NOSSA MADRI: " + result);
        resultRaiz = false;
    }

    console.log("Rodei 3");
    console.log(result);
    return result;
}


function calcula(numero){
    for(let i = 0 ; i < numero.length; i++){
        if(numero[i] == "^"){
            numero[i-1] = Math.pow(numero[i-1], numero[i+1]);
            numero = remove(numero, i);
            i = 0;
        } 
    }

    for(let i = 0 ; i < numero.length; i++){
        if(numero[i] == "*"){
            numero[i-1] = numero[i-1]*numero[i+1];
            numero = remove(numero, i);
            i = 0;
        }else if(numero[i] == "/"){
            numero[i-1] = numero[i-1]/numero[i+1];
            numero = remove(numero, i);
            i = 0;
        } 
    }

    for(let i = 0 ; i < numero.length; i++){  
        if(numero[i] == "+"){
            
            numero[i-1] = numero[i-1]+numero[i+1];
            numero = remove(numero, i);
            i = 0;
        }  else if(numero[i] == "-"){
            
            numero[i-1] = numero[i-1]-numero[i+1];
            numero = remove(numero, i);
            i = 0;
        } 
    }
    return numero;
}

function remove(array, i){
    array.splice(i, 2); // Remove dois itens apartir do index i (remove i e o i+1)
    return array;
}

function parenteses(num){
    let posicaoAbrir = num.lastIndexOf("(");
    let posicaoFechar = num.indexOf(")");

    console.log("o q ta acontecendo? " + num[posicaoAbrir]);
    console.log("o q ta acontecendo? " + num[posicaoFechar]);

    var newArray = new Array;
    let k = 0;

    if(!isNaN(num[posicaoAbrir-1])){
        let arrayUm = new Array;
        let arrayDois = new Array;

        for(let i = 0; i < posicaoAbrir; i++){
            arrayUm.push(num[0]);
            num.shift();
        }
        
        while(num.length != 0){
            arrayDois.push(num[0]);
            num.shift();
        }

        //Retornar o valor para a array
        for(let i = 0; i < arrayUm.length; i++){
            num.push(arrayUm[i]);
        }
        
        num.push("*");
        
        for(let i = 0; i < arrayDois.length; i++){
            num.push(arrayDois[i]);
        }
        
    }

    console.log("COMO TA ARRAY? SAIU CLEAN? " + num);
    posicaoFechar = num.indexOf(")");

    if(!isNaN(num[posicaoFechar+1])){
        console.log("NUM? " + num);
        let arrayUm = new Array;
        for(let i = posicaoFechar+1; i <= num.length; i++){
            console.log("POGIXAO ATUAL: " + num[posicaoFechar+1]);
            if(num[i] == "Undefined"){
                break;
            }
            
            arrayUm.push(num[posicaoFechar+1]);
            num.splice(posicaoFechar+1, 1);
            i = posicaoFechar + 1;
        }

        console.log("N deveria existir um 3: " + num);
        
        num.push("*");

        for(let i = 0; i < arrayUm.length; i++){
            num.push(arrayUm[i]);
        }
       

    

        console.log("ARRAY NUM: " + num);

        
    }

     console.log(num);
     posicaoAbrir = num.indexOf("(");
     posicaoFechar = num.indexOf(")");

     console.log("o q ta acontecendo? " + num[posicaoAbrir]);
     console.log("o q ta acontecendo? " + num[posicaoFechar]);
    for(k = posicaoAbrir+1; k < posicaoFechar; k++){
        newArray.push(num[k]);
    }
        num[posicaoAbrir] = parseFloat(calcula(newArray));
    
        num.splice(posicaoAbrir+1, posicaoFechar-posicaoAbrir); 
    
    return num;   
}

function porcentagem(n){
    console.log(n)

    for(let i = 0; i < n.length; i++){
        var arrayAuxiliar =  new Array;
        if(n.indexOf("(") != -1){
            for(let i = n.lastIndexOf("(") + 1; i < n.indexOf(")"); i++){
                arrayAuxiliar.push(n[i]);
            }
        }


        if(n.length == 2 || arrayAuxiliar.length == 2 ||  n.indexOf("%") == 1){
            let valor = n[n.indexOf("%")-1] * 0.01;
            n[n.indexOf("%")-1] = valor;
            n.splice(n.indexOf("%"), 1);
        } else if(n.indexOf("%") != -1){
            if(n[n.indexOf("%")-2] == "*" || n[n.indexOf("%")-2] == "/"){
                let valorPorCento = n[n.indexOf("%") - 1];
                let valor = valorPorCento * 0.01;
                console.log("valor: " + valor);
                n[n.indexOf("%") - 1] = valor;
                n.splice(n.indexOf("%"), 1);
                break;
                
            } else {
                if(n.indexOf("(") != -1){
                    console.log("Rodei");
                    let valorPorCento = n[n.indexOf("%") - 1];
                    let operacao = n[n.indexOf("%") - 2];
                    let numeroDaPortcen = n[n.indexOf("%") - 3];
                    let valor = "";

                    if(arrayAuxiliar.length > 0){
                        arrayAuxiliar.splice(arrayAuxiliar.indexOf("%") - 2, 3);
                        
                        console.log("arrayAuxiliar: " + arrayAuxiliar);
                        //Depois do  %

                        let arrayOutra = new Array;
                        for(let po = n.indexOf("%")+1; po < n.length; po++){
                            if(n.indexOf(")") == po){
                                break;
                            }
                            arrayOutra.push(n[po]);
                        }

                        console.log("arrayOutra: " + arrayOutra);
                        var valorArray  = 0;


                        if(arrayAuxiliar.length > 3){
                            arrayAuxiliar = calcula(arrayAuxiliar);
                           valorArray = parseFloat(arrayAuxiliar);
                        } else
                            valorArray = arrayAuxiliar[0];

                            console.log("valorArray: "+ valorArray);
                                
                        
                        n[n.lastIndexOf("(") + 1] = valorArray;
                        n.splice(n.lastIndexOf("(") + 2, n.indexOf("%")-1 - (n.lastIndexOf("(") + 3));
                        console.log(n);
                        console.log("OIII???" + valor);
                        valorArray = valorArray+ valorArray * valorPorCento * 0.01;
                        
                        if(arrayOutra.length > 0){
                            arrayAuxiliar = new Array;
                            arrayAuxiliar.push(valorArray);
                            let po = arrayOutra.length;
                            console.log("arrayOutra: "+ arrayOutra);
                            for(let i = 0; i < po; i++){
                                arrayAuxiliar.push(arrayOutra[0]);
                                 arrayOutra.shift();
                                
                            }
                            
                            console.log("arrayAuxiliar: " + arrayAuxiliar)
                            valorArray = parseFloat(calcula(arrayAuxiliar));
                        }
                        
                        console.log("PQ??" + valorArray);
                        n[n.indexOf("%")-1] = valorArray;
                        n.splice(n.indexOf("%"), 1);
                    }
                    }
                    else if(n.indexOf("(") == -1){
                    console.log("Rodei");
                    let valorPorCento = n[n.indexOf("%") - 1];
                    let operacao = n[n.indexOf("%") - 2];
                    let numeroDaPortcen = n[n.indexOf("%") - 3];
                    let valor = "";
                        let po = 0;
                        let arrayParaCalcular = new Array;
                       //para calcular
                        while(n.indexOf != -1){

                            if(n[po] != "%"){
                                arrayParaCalcular.push(n[po]);
                                
                            } else break;
                            po++;
                        }
                        console.log("não sei o q ta aqui" + n.indexOf("%")-1);
                        n.splice(n.indexOf("%")-1, 1);

                        console.log("arrayParaCalcular: " + arrayParaCalcular);
                        if(arrayParaCalcular.length > 3){
                            numeroDaPortcen = calcula(arrayParaCalcular);
                        } else{
                            numeroDaPortcen = arrayParaCalcular[0];
                        }
                        console.log("valorPorCento: " + valorPorCento);
                        console.log("numeroDaPortcen" + numeroDaPortcen);
                        
                        valor = numeroDaPortcen * valorPorCento * 0.01;
                        console.log("VALOR DE N:" + n);
                        n[n.indexOf("%")] = valor;
                        console.log("Q porra ta colocando aqui?" + valor);
                        console.log("VALOR DE N:" + n);
                        break;
                    }
            }
        }
    }
}