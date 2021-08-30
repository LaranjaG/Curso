let numero = 0;
let nome = "Marcel";
let telefone = "";
let cpf;
let outro = "false";

//Boolean
console.log("Número2Bool: "+ !!numero);
console.log("String2Bool: "+ !!nome);
console.log("String2Bool (2): "+ !!telefone);
console.log("String2Bool (3): "+ !!outro);
console.log("Undefined2Bool: "+ !!cpf);

//String to Number
let numero = '100.94';
console.log("Int: ", Number.parseInt(numero))
console.log("Float: ", Number.parseFloat(numero))

//Number
let numb = Number(numero);
console.log("Fixed: ", numb.toFixed(1))
console.log("Precision: ", numb.toPrecision(2))

//String
let nome = "Marcela";
let nomes = "Marcel, José, Marcos, Maria, Lucas, Fernando";
console.log("toUpperCase ", nome.toUpperCase())
console.log("toLowerCase ", nome.toLowerCase())

console.log("indexOf a: ", nome.indexOf('a'))
console.log("lastIndexOf a: ", nome.lastIndexOf('a'))

console.log("indexOf c: ", nome.indexOf('c'))
console.log("lastIndexOf c: ", nome.lastIndexOf('c'))

console.log("substring: ", nome.substr(1,3))
console.log("replace: ", nome.replace('a', 'o'))
console.log("split: ", nomes.split(', '))


//Math
console.log("2^5 = ", Math.pow(2, 5))
console.log("round up", Math.round(10.6))
console.log("round down", Math.round(10.3))
console.log("ceil", Math.ceil(10.1))
console.log("floor", Math.floor(10.9))

let aleatorio = Math.random();
console.log("randon ", aleatorio);
console.log("0 - 10", aleatorio*10)
console.log("0 - 100", aleatorio*100)


function teste(){
   let variavel1 = "Olá, ";
   if(true){
      let nome = "Marcel";
      var nome = "Marcel";
      console.log('Interno: '+variavel1 + nome);
   }
   console.log('Externo: '+variavel1 + nome);
   
}

teste();