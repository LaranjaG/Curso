var numeros = [2, "^", 2];

function resultado(result){
    if(result.lastIndexOf("^")){
        console.log("Beleza to em panico, mas so um pouco");
    }

    while(result.indexOf("(") != -1){
        if(result.indexOf("%")){
            porcentagem(result);
        }
        result = (parenteses(result));
    }

    if(result.indexOf("%")){
        porcentagem(result);
    }

    if(1 < result.length){
        result = calcula(result);
    }

    console.log(result.toString());
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

function calcula(numero){
    for(let i = 0; i < numero.length; i++){
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

resultado(numeros);