/** 
 * Na atividade pedia para que criasse um botão para exibir cada um das 5 formas de exibir
 * contudo se é mais interessante para o layout criado o uso de um select e apenas um botão
*/

window.addEventListener('load', () => {
    document.querySelector('#salvar').addEventListener('click', () => { //Salvar clicando no botão
        salvar();
        salvo = true;
    });
    document.querySelector('#mostrar').addEventListener('click', () => {
        mostrar();
        setTimeout(() => {varMostrar = false}, 2);
    });
    document.addEventListener('keypress', (event, which) =>{ //Salvar utilizando a tecla enter após preencher ambos os campos
        /**
         * impede que o click e o keypress sejam usados de forma simultânea, 
         * já que caso o botão de salvar estela selecionado com tab e se clicar na tela enter
         * isso ocorre, salvando duas vezes e pode ocorrer de tentar salvar quando o botão mostrar é selecionado com o teclado
         */
        setTimeout(() => { 
            if(event.which == 13 && !salvo && (nome.value != '' || nota.value != '') && !varMostrar)
                salvar();

            salvo = false;
        }, 1);
    });
    document.addEventListener('keyup', (event, which) =>{
        if(event.which == 27 && document.querySelector('.corpo').style.display === 'none')
            voltar();
    });
});

var salvo = false; //Várivel de controle para forma de salvar aluno
var varMostrar = false; //Para que se selecionar o botão mostrar no teclado n selecione o botão salvar

alunos = [];

let nome = document.querySelector('#nome'); //Input nome
let nota = document.querySelector('#nota'); //Input nota
let opcao = document.querySelector('#select'); //Select forma de demonstrar valores

function salvar(){     
    if(nome.value == '' || nota.value == '' || (parseFloat(nota.value) < 0 && parseFloat(nota.value) > 10)) 
        checkButton(false); //Exibir o botão da cor vermelha, caso não seja possivel salvar
    
    if(nome.value != ''){ //Verifica campo nome
        if(nota.value != ''){ //Verifica campo nota
            if(parseFloat(nota.value) >= 0 && parseFloat(nota.value) <= 10){ //Valor minimo e valor maximo permitido para as notas
                var aluno = { //Cria objeto aluno
                    'nome' : nome.value,
                    'nota' : parseFloat(
                        nota.value.replace(',','.')
                    )
                }
                
                alunos.push(aluno); //Adiciona objeto aluno a um array
                
                excluir();
                
              //Reseta os valores após salvar      
                nome.value = '';
                nota.value = '';
    
                checkButton(true);
            } else
                erro((nota.value > 10)
                        ? `Nota máxima permitida: 10!` 
                            : `Nota não pode ser negativa`);
            } else 
                erro(`Digite uma nota!`);
    } else erro((nota.value != '') 
                ? (`Digite um nome!`)
                    : (`Digite um nome e uma nota!`));
}

function mostrar(){
    varMostrar = true;
    excluir();

    if(alunos.length == 0)
        erro(`Não há alunos cadastrados!`); 
   
    else if(opcao.value == '')
        erro(`Escolha uma opção para exibir!`);
        
    else{
        switch(parseInt(opcao.value)){
            case 1: //Ordem alfabetica
                alunos.sort((a, b) => { 
                    if(a.nome.toUpperCase() == b.nome.toUpperCase()){
                        return 0;
                    }
                    if(a.nome.toUpperCase() < b.nome.toUpperCase()){
                        return -1;
                    }
                    if(b.nome.toUpperCase() < a.nome.toUpperCase()){
                        return 1;
                    }
                });
                
                createTable(alunos, `Ordem alfabética (nome)`);   
                break;
            
            case 2: //Ordem decrescente nota
                alunos.sort((a,b)=>{ 
                    if(a.nota == b.nota){
                        return 0;
                    } else if(a.nota > b.nota){
                        return -1;
                    } else if(a.nota > b.nota){
                        return 1;
                    }
                });
                
                createTable(alunos, `Ordem decrescente (nota)`);   
                break;
    
            case 3: //Maior nota
                var maiorNota = alunos[0].nota;
                let alunoMaiorNota = alunos[0];
                let arrayAuxNota = [];

                alunos.forEach(aluno => {
                    if(maiorNota < aluno.nota){
                        maiorNota = aluno.nota
                        alunoMaiorNota = aluno;
                    }
                });

                alunos.forEach(aluno => { //Caso seja mais de um aluno
                    if(maiorNota == aluno.nota){
                        arrayAuxNota.push(aluno);
                    }
                });
    
                ((arrayAuxNota.length > 1) 
                    ? createTable(arrayAuxNota, `Maiores notas`) 
                        : resultadoLinha(`Aluno com maior nota`, `<br>Aluno(a): ${alunoMaiorNota.nome}  - Nota: ${alunoMaiorNota.nota}`));
                break;
    
            case 4: //Média 
                let arrayAux = [];
        
                alunos.forEach(element => {
                    arrayAux.push(element.nota);
                });
    
                var somaNotas = 0;
    
                while(arrayAux.length > 0){
                    somaNotas += arrayAux.pop();
                }
    
                let media = parseFloat(somaNotas/alunos.length).toFixed(2);
    
                resultadoLinha(`Média dos alunos`, media);
                break;
            
            case 5: //Alunos aprovados
                aprovados = new Array();
    
                aprovados = alunos.filter((element) =>{
                    return element.nota >= 6;
                });
    
                createTable(aprovados, `Alunos aprovados`);
                break;
        }
    }   
}

function excluir(){ //Excluir elementos da tela
    if(document.querySelector('.resultado') != null) //Excluir resultados de uma linha
        document.body.removeChild(document.querySelector('.resultado'));

    if(document.querySelector('.erro') != null) //Caso tenha alguma mensagem de erro
        document.body.removeChild(document.querySelector('.erro'));

    if(document.querySelector('.table') != null) //Excluir tabelas
        document.body.removeChild(document.querySelector('.table'));
}

function erro(mensagem){
    excluir();
        
    let tagErro = document.createElement('p'); //Cria uma nova tag
    tagErro.className = 'erro'; //
    tagErro.innerHTML = `Aviso: ${mensagem}`; //Texto inserido
    document.body.appendChild(tagErro); //Acrescenta ao body
}

function checkButton(salvo){//Muda a cor do bottão por 1s
    let elemento = document.querySelector('#salvar');
    elemento.style.backgroundColor = (salvo ? 'green' : 'red');

    setTimeout(() =>{
        elemento.style.backgroundColor = 'transparent';
    }, 1000);
}

function resultadoLinha(texto, valor){
    let resultado = document.createElement('h4'); //Cria uma nova tag
    resultado.className = 'resultado';
    resultado.innerHTML = `${texto}: ${valor}`; //Texto inserido
    document.body.appendChild(resultado); //Acrescenta ao body
}

function voltar(){
    excluir();
    document.querySelector('.corpo').style.display = 'block';
}

function createTable(array, titulo){
    if(array.length == 0)
        erro((titulo == 'Alunos aprovados') 
                ? `Não há alunos aprovados!`
                    : `Erro inesperado!`);
    else{
        document.querySelector('.corpo').style.display = 'none';
    
        let div = document.createElement('div');
        div.className = 'table';
        
        let p = document.createElement('p');
        p.className = 'titulo';
        p.innerHTML = titulo;

        let button = document.createElement('button');
        button.className = 'buttonFechar';
        button.appendChild(document.createTextNode('x'));
        button.addEventListener('click', voltar);

        div.appendChild(button);
        div.appendChild(p);

        let table = document.createElement('table');
        // tag - tr -- rows
        // tag - th -- Titútlo
        // tag - td -- elemnto dentro do corpo

        //Titulo
        let trTitulo = document.createElement('tr');
        table.appendChild(trTitulo);
        
        for(i = 0; i < 2; i++){
            let th = document.createElement('th');
            
            th.appendChild(
                document.createTextNode((i == 0) ? "Nome" : "nota"));

            trTitulo.appendChild(th);    
        }

        //Corpo
        array.forEach(alunos => {            
            let trN = document.createElement('tr'); //Cria uma nova linha para cada aluno

            let tdNome = document.createElement('td');
            let tdNota = document.createElement('td');
            tdNome.className = 'nome'; //adiciona a classe nota a td de nota
            
            tdNome.appendChild( //Cria <td> NomeAluno </td>
                document.createTextNode(`${alunos.nome}`));
            
            tdNota.appendChild( //Cria <td> NotaAluno </td>
                document.createTextNode(`${alunos.nota}`));
            
            trN.appendChild(tdNome); //Adiciona nome a linha 
            trN.appendChild(tdNota); //Adiciona nota a linha
            table.appendChild(trN); //Adiciona a nova linha criada na tabela
        });

        div.appendChild(table); //Adiciona tabela na div
        document.body.appendChild(div); //Adiciona a div na tela
    }
}