let vetor1 = [];
let vetor2 = new Array();
let vetor3 = ['Maça', 'Banana', 'Abacate', 'Morango'];

// vetor1[0] = "Marcel";
// vetor1[1] = "Joseph";
// vetor1[1] = "Maria";

// console.log(vetor1);
// console.log('Tamanho:' + vetor1.length);

// vetor1[vetor1.length] = "Marcos";

// console.log(vetor1);
// console.log('Tamanho:' + vetor1.length);


// console.log(vetor1.concat(vetor3));
// let vetorResultado = [...vetor1, ...vetor3]

// console.log(vetorResultado)

// console.log('Ultima posição vetor: '+ vetorResultado[vetorResultado.length - 1])


// console.log("Vetor frutas: "+ vetor3);
// console.log("Tamanho Vetor: "+ vetor3.length)
// vetor3.push("Framboesa");
// console.log("Vetor frutas: "+ vetor3);
// console.log("Tamanho Vetor: "+ vetor3.length)
// let frutaRemovida = vetor3.pop();
// console.log("Vetor frutas: "+ vetor3);
// console.log("Tamanho Vetor: "+ vetor3.length)
// console.log("Fruta removida: "+frutaRemovida)

// vetor3.push("Morango")
// console.log("Vetor frutas: "+ vetor3);
// console.log("Tamanho Vetor: "+ vetor3.length)
// let frutasRemovidas = vetor3.splice(2, 2, ['Acerola', 'Goiaba']);
// console.log("Vetor frutas: "+ vetor3);
// console.log("Tamanho Vetor: "+ vetor3.length)
// console.log("Frutas removida: "+frutasRemovidas)

// console.log("Vetor frutas Invertido: "+ vetor3.reverse());

// console.log('Ordenação padrão: '+vetor3.sort());

// function comparacao(a, b){
//    if( a.length == b.length){
//       return 0;
//    }
//    if(a.length > b.length){
//       return -1;
//    }
//    if(b.length > a.length){
//       return 1;
//    }
// }

// console.log('Ordenação personalizada: '+vetor3.sort(comparacao));


// for(let i=0; i<vetor3.length; i++){
//    let elemento = vetor3[i];
//    console.log("Fruta Uppercase "+ elemento.toUpperCase())
// }


// vetor3.forEach(upperCase);

// function upperCase(elemento, index){
//    console.log("Fruta Uppercase "+ elemento.toUpperCase())
// }

// vetor3.map((elemento, index)=>{
//    console.log("Fruta LowerCase: "+ elemento.toLowerCase());
// });

let vetorN = [1, 2, 3, 4 ,5];
console.log("Vetor original: "+vetorN)

// let vetorResultado = vetorN.map((elemento, index)=>{
//    return elemento *2;
// });

// let vetorResultado = vetorN.filter((elemento, index)=>{
//    return elemento > 3;
// });

// let vetorResultado = vetorN.every((elemento, index)=>{
//    return elemento > 3;
// });

// console.log("Vetor Resultado: "+vetorResultado)

   let resultado = vetorN.reduce((resultado, elemento)=>{
      return resultado + elemento;
   })

console.log("Resultado: "+resultado)