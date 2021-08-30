window.addEventListener('load', () => {
    document.querySelector('#salvar').addEventListener('click', salvar);
    document.querySelector('#mostrar').addEventListener('click', mostrar);
});

alunos = new Array();
let nome = document.querySelector('#nome');
let nota = document.querySelector('#nota');

var Aluno = function(nome, nota){ //O js entende que a função é uma classe
    this.nome = nome; 
    this.nota = nota;
}

var aluno1 = new Array;
var aluno2 = new Array;
var aluno3 = new Array;


var Aluno1 = {};
var Aluno3 = new Object();

let Usuario = function(){}; //Construtor vazio

let usuaruio = new Usuario();

function salvar(){     
    if(nome.value != ''){
        if(nota.value != ''){
            aluno = new Aluno(nome.value, nota.value);
            alunos.push(aluno);
            console.log('salvo ' + alunos.length);
        
            
                Aluno1['nome'] = nome.value;
                Aluno1.nota = nota.value;

                aluno1.push(Aluno1);

                var Aluno2 = {
                    'nome' : nome.value,
                    'nota' : nota.value
                }
        
                aluno2.push(Aluno2);

                Aluno3['nome'] = nome.value;
                Aluno3.nota = nota.value;
            
                aluno3.push(Aluno3);

            } else console.log("Digite uma nota");
    } else console.log("Digite um nome");
}

function mostrar(){
    alunos.forEach((aluno) => {
        console.log(aluno.nome);
        console.log(aluno.nota);
    });
    
    aluno1.forEach((aluno) => {
        console.log(aluno.nome);
        console.log(aluno.nota);
    });

    aluno2.forEach((aluno) => {
        console.log(aluno.nome);
        console.log(aluno.nota);
    });

    aluno3.forEach((aluno) => {
        console.log(aluno.nome);
        console.log(aluno.nota);
    });
}

// function mostrar(){
//     if(alunos.length > 0){
//         for(let i = 0; alunos.length; i++){
//             let listaNova = document.createElement('ul');
//             let conteudo = document.createTextNode(`${aluno.nome}`);
//             listaNova.appendChild(conteudo);
//             var listaAtual = document.getElementById('ul1');
//             document.body.insertBefore(listaNova, listaAtual);
//         }
//     } else console.log('Não há alunos cadastrados');

//     var divNova = document.createElement("div");
//     var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
//     divNova.appendChild(conteudoNovo);
//     var divAtual = document.getElementById("div1");
//     document.body.insertBefore(divNova, divAtual);
// }