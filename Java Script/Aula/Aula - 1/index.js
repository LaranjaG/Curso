//NaN = Not a Number 
// Let - tipo local
// Var tipo global
// Duplas ou simples aspas sempre tornam a variavel String

// let a = window.prompt('Diga Oi'); // Apenas para pagina Web

console.log("Função:")
function teste(){
    let variavel = "Olá";
    if (true){
        var name = "Rayslla"; 
        console.log('Interno: ' + variavel + " " + name);
    }

    console.log('Externo: ' + variavel + " " + name);
}

teste();
console.log("");

//Variaveis -- A variavel se torna o que é colocado nela (como em php)
let numero = 1; 
let nome = "Marcel";
let telefone = "";
let cpf = 0; //Se for tipo numerico 0 retorna falso, outros números roda de boas
let outro = "false"; /*Se colocar o valor diretamente como false contera vavlor falso, 
                       mas como se tem um String preenchida retorna verdadeiro */

//Boolean
console.log("Boolean:")
console.log("Número bool: " + !!numero); // !!antes da variavel converte ela para boolean
console.log("String bool: " + !!nome);
console.log("String bool: " + !!telefone);
console.log("String bool: " + !!cpf);
console.log("Undefined bool: " + !!outro);

if (outro){ //Uma variavel vazia sempre retorna falso, quando se tem conteuso verdadeira
    console.log("Funfo!");
}
console.log();

// Math
console.log("Math:");
console.log("2^5 =", Math.pow(2, 5));
console.log("Round up:", Math.round(10.6));
console.log("Round down:", Math.round(10.3));
console.log("Ceil:", Math.ceil(10.1)); //Proximo maior
console.log("Floor:", Math.floor(10.9)); //Proximo menor
console.log(); //Quebra de linha

console.log("Randon:", Math.round(Math.random())); //Gera um numero entre 0 e 1
console.log("0 - 10:", Math.ceil(Math.random()*10));
console.log("0 - 100:", Math.floor(Math.random()*100));
console.log();

//String
console.log("String:")
let nick = "Rayslla";
let nomes = "Marcel, José, Marcos, Maria, Lucas, Fernando";

console.log("toUpperCase:", nick.toUpperCase());
console.log("toLowerCase:", nick.toLocaleLowerCase());
console.log();

console.log("indexOf a:", nick.indexOf('a'));
console.log("lastIndexOf a:", nick.lastIndexOf('a'));
console.log();

console.log("indexOf R:", nick.indexOf('r'));
console.log("lastIndexOf R:", nick.lastIndexOf('r'));
console.log();

console.log("SubString:", nick.substr(1,3));
console.log("Replace:", nick.replace("a","l"));
console.log("Split:", nick.split(', '));
console.log();

console.log("Nomes: " + nomes);
console.log();

//String to Number
console.log("String to Number:");
let number = '100.96';
console.log("Int: " + Number.parseInt(number));
console.log("Float: " + Number.parseFloat(number));

let numb = Number(number);
console.log("Fixed", numb.toFixed(1) );
console.log("Precision", numb.toPrecision(2));
console.log();

//Array
console.log("Array:");
let frutas = ["Banana", "Laranja", "Manga", "Batata"];

console.log("\nLista de compras: ");
for(let i = 0; i < frutas.length; i++){
    console.log("- " + frutas[i]);
}
console.log();

//Date
console.log("Date: ");
console.log(new Date());