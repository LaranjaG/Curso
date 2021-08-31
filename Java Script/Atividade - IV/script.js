window.addEventListener('load',() => {
    let form = document.forms['cadastrar'];
    /**
     * Então, semestre passado o Marcel pediu pra fazer uma atividade com formulario e eu decidi 
     * reaproveitar meu formulário lindo (q até recebeu elogios do Marcel) e adicionei os detalhes que você pediu
     */
    estados(form);//Preenche os options do select estado ao carregar a página

    document.querySelectorAll('.text').forEach(input => {
        input.addEventListener('blur', () => validarInputs(input));
    });
    
    document.querySelectorAll('.text').forEach(input => {
        input.addEventListener('keyup', (event) => mascara(event, input));
    });

    form.estados.addEventListener('click', () => cidades(form));
    
    form.estados.addEventListener('change', () => validarSelectEstado(form));
    form.cidades.addEventListener('change', () => validarSelectCidade(form));
    
        
    form.sexo.forEach(escolha => {
        escolha.addEventListener('click', () => validarRadioSexo(form));
    });

    form.idiomas.forEach(idioma => {
        idioma.addEventListener('click', () => {
            if(!validarCheckboxIdiomas(form))
                window.alert('Selecione pelo menos 2 idiomas!');
        });
    });

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        
        if(validarForm(form)){
            window.alert('Formulário válido! Chegou o momento de se preparar para a morte ou se tornar um Lord Sombrio.');
            
            let candidato = {
                "nome" : form.nome.value,
                "idade" : form.idade.value,
                "dataNascimento" : form.dataNascimento.value,
                "cadastroPessoa" : form.cadastroPessoa.value,
                "email" : form.email.value,
                "telefone" : form.telefone,
                "sexo" : procurarCheckds(form.sexo).toString(),
                "idiomas" : procurarCheckds(form.idiomas),
                "estado" : estadosList[form.estados.selectedIndex-1].nome,
                "cidade" : cidadeList[form.cidades.selectedIndex-1].nome,
            };

            window.location.replace('https://starwars.fandom.com/pt/wiki/Primeira_Ordem?Objeto=' + candidato);  //Estou passando candidato sem motivo, só pq n gera erro msm...
        }  
        else{
            window.alert('Se não consegue usar a força para lhe guiar em preencher um formulário, acha que seria digno de ganhar todo o conhecimento dos Sith?' 
                        + '\nSaiba que terá a morte como destino ao tentar trilhar este caminho.');
            }
    });
});

let estadosList = new Array(); //Lista de estados
let cidadeList = new Array(); //Lista de cidades
const request = new XMLHttpRequest();
/**
 * Tamanho máximo para um endereço de email de acordo com minhas pesquisas
 * {64} @ {255}
 * 64 + 1 + 255 = 320
 */
//Validações de nome, idade, data de nascimento, cpf/cnpj, e-mail, telefone, cep
let expressao = {
    'nome' : /^([A-Za-zÀ-ú]*([\s]([A-Za-z]{1}[.]?|[A-Za-zÀ-ú]{2,})))+[\s]*$/,
    // 'email' : /^\b((([0-9a-zA-Z.!#$%&'*+/=?^_`{|}~-]){1,64}@([0-9a-zA-Z\-][.]?){1,255})\b)$/, //Essa validação faz uma validação parecida com a desse site https://www.regextester.com/19, pelo menos até onde eu testei
    // mas como no enuncioado tava pedindo o .dominio deixei obrigatorio deixar . alguma coisa
    'email' : /^\b((([\w.!#$%&'*+/=?^_`{|}~-]){1,64}@\b(([.]?[\w\-])+[.][a-z]+){1,255})\b)$/, //Pesquisei sobre extensões e n achei um tamanho padrão então vai ficar de 2 a 4
    'endereco' : /^([\w\W]+)\b$/,
    'cep' : /^(([\d]{5}[-][\d]{3})|(\d{8}))$/,
    'telefone' : /^((([\(][0]?[\d]{2}[\)])|([0]?[\d]{2}))[\s]?)[9]?[\d]{4}[\-]?[\d]{4}$/,
    // 'idade' : /^(1[8-9]|[2-9][\d]|10[\d]|110)$/,
    'dataNascimento' : /^([1-9]|0[0-9]|[1,2][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/[\d]{4}$/, //Me pergundo, e as pessoas que nasceram no anos 999 ou antes, a data n vai aceitar, ele é contra pessoas tão velhas, mas desde quando é crime ter mais de 1000 anos?
    'cadastroPessoa' : /(^[\d]{3}\.[\d]{3}\.[\d]{3}\-[\d]{2}$)|(^[\d]{2}\.[\d]{3}\.[\d]{3}\/[\d]{4}\-[\d]{2}$)/
};

function validarForm(form){
    let validadeInputs = true; 

  //Validar inputs
    document.querySelectorAll('.text').forEach( input => {
        if(!(validarInputs(input))) 
            validadeInputs = false;
    });
 //Para garantir que todos os itens mudem a cor 
    // radio, check e selects
    const validadeRario = validarRadioSexo(form);
    const validadeCheck = validarCheckboxIdiomas(form);   
    const validadeSelectEstado = validarSelectEstado(form);
    const validadeSelectCidade = validarSelectCidade(form);
    
    if(validadeRario
        && validadeCheck
        && validadeSelectEstado
        && validadeSelectCidade
        && validadeInputs)
            return true; 
    
    return false; 
}

//Utilizados nos inputs tipo text
function validar(id, validade){
    document.querySelector(`#${id}`).style.borderColor = (validade
                                                            ? 'green' 
                                                                : 'red');
    return validade;
};

//Utilizados no Radios, checkBox, e Selects
function alterarCorBorda(id, validade, cor){
    if(validade)
        document.querySelector(`#${id}`).style.borderColor = cor;
    else
        validar(id, validade);

    return validade;
}

//Validar inputs de texto
function validarInputs(input){  
    switch(input.name){
        case 'nome': 
            return validar(input.id, expressao['nome'].test(input.value));
                
        // case 'idade': 
        //     return validar(input.id, expressao['idade'].test(input.value));
                
        case 'dataNascimento': //Campo de texto com uma String no padrão de data (23/10/2014);
            return validar(input.id, expressao['dataNascimento'].test(input.value) //Verifica se a data está no padrão
                            && validarData(input.value.split(/[\/]/)));
                
        case 'cadastroPessoa': //Campo de texto simples que aceita o valor CPF ou CNPJ.
            mascaraCadastroPessoa(input);
            return validar(input.id, expressao['cadastroPessoa'].test(input.value));
                
        case 'email':  
            return validar(input.id, expressao['email'].test(input.value));
                
        case 'telefone':
            return validar(input.id, expressao['telefone'].test(input.value));
        
        case 'cep':
            return validar(input.id, expressao['cep'].test(input.value));

            case 'endereco':
                return validar(input.id, expressao['endereco'].test(input.value));

        default: //Para itens sem validação especifica, mas obrigatorios são apenas proibidos de ficar em branco
            return validar(input.id, input.value != '');
        } 
}

//Retorna um array com os resultados
function procurarCheckds(inputs){
    let valores = new Array();

    inputs.forEach( input => {
        if(input.checked)
            valores.push(input.value);
    });
        

    return valores;
}

//Validar Radio e Check
function validarRadioSexo(form){   
    const genero = procurarCheckds(form.sexo);
    
    return alterarCorBorda('divSexo', genero != '','transparent');
}

function validarCheckboxIdiomas(form){
    const idiomas = procurarCheckds(form.idiomas);
    
    return alterarCorBorda('divIdiomas', idiomas.length >= 2, 'transparent');
}

//Validar Selects - Estados e Cidades
function validarSelectEstado(form){
    return alterarCorBorda(form.estados.id, form.estados.selectedIndex != 0, 'grey');
}

function validarSelectCidade(form){
    return alterarCorBorda(form.cidades.id, form.cidades.selectedIndex != 0, 'grey'); 
}

//Verifica se a data tem os numeros de dias correspondentes ao numeros de meses
function validarData(data){
    var meses = { //Meses e seus números de dias
        01 : 31, 02 : 28, 03 : 31, 04 : 30, 05 : 31, 06 : 30, 07 : 31, 08 : 31, 09 : 30, 10 : 31, 11 : 30, 12 : 31,
    };

    /**
     * Como o usuário pode preencher o campo de nascimento antes de idade
     * Vai só verificar se o ano está dentre os conformes, já que um viajante do tempo que volta para o passado
     * não terá o direito de candidatar, ou seja, só vale pessoas nascidas até o ano atual.
     */

    const ano = parseInt(data[2]);
    const dia = parseInt(data[0]); 
    const mes = parseInt(data[1]);

    const dataAtual = new Date();

    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    //A data de nascimento só aceita pessoas que já nasceram, n as q ainda vão nascer em uma data q ainda n chegou
    //Ainda mais pq tem q ser maior de idade e eu n gosto de viajantes do tempo, eles não poderão ser lordes sombrios >.<

    //Verifica se o ano é bissexto
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) 
        meses[02] = 29; //Se for, o mês de fevereiro ganha 29 dias

    let retorno = false;

    if((dia >= 1 &&  dia <= meses[mes]) && (mes >= 1 && mes <= 12)){ //Verifica se o intervalo de dias e meses é valido
        if(ano == anoAtual){ //Se for o ano atual
            if(mes == mesAtual){ //Se for o mes atual
                if(dia <= diaAtual)
                    retorno = true;
                 //So pode adicionar até o número do dia presente
                } else if(mes < mesAtual)
                    retorno = true; //Se mes anterior, pode ter qualquer intervalo de dias
        } else if(ano < anoAtual)
            retorno = true;  //Verifica se é o dia atual, ou dia que ocorreu no passado, se for o dia de amanhâ ou num futuro ainda não ocorrido, não será validado 
    }

    if(retorno) calcularIdade(dia, mes, ano, diaAtual, mesAtual, anoAtual);
    
    return retorno;
}

//Essa mascara é colocada quando o usuário sai do input, já que aceita CPF e CNPJ
function mascaraCadastroPessoa(input){
    const valor = input.value;

  //Adiciona mascará para o CPF e o CNPJ, caso seja digitados apenas números.  
    if(valor.length < 13) //Separa números por grupos, de tamanho {x} e reconstroi com a mascará de CPF
        input.value = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4"); 
    else if(valor.length < 18) //Separa números por grupos, de tamanho {x} e reconstroi com a mascará de CNPJ
        input.value = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, "$1.$2.$3/$4-$5");
}

//Apaga caracter se input atinge o limite
function limiteLengthInput(limite, input){
    if(input.value.length > limite){
        input.value = input.value.substring(0, input.value.length - 1);
    }
}

function apagarCaracterInvalido(input, expressao){
    input.value = input.value.replace(expressao, ""); 
}

//Minhas mascaras não ficaram as melhores do mundo, mas td bem, elas funcionam, meio bugadas, mas funciona
function mascara(event, input){
    switch(input.id){
        case 'nome' :
            limiteLengthInput(30, input);       
            apagarCaracterInvalido(input, /([^A-zÀ-ú .])/g);
            break;

        case 'idade':
            limiteLengthInput(3, input);
            apagarCaracterInvalido(input, /[^\d]/g);
            break;

        case 'dataNascimento':
            limiteLengthInput(10, input);
            
            apagarCaracterInvalido(input, /[^\d^\/]/g);
            
            if('Backspace' != event.key && /\d/.test(event.key)){
                let data = input.value.replace(/\D/g, '');

                if(data.length > 4){ //Minha parte de validar datas, aceita datas de forma mais dinamica, minha mascará não :)
                    input.value = data.replace(/(\d{2})(\d{2})([\d]{1,4})/, '$1/$2/$3');
                } else if(data.length > 3){
                    input.value = data.replace(/(\d{2})(\d{2})/, '$1/$2/');
                } else{
                    input.value = data.replace(/(\d{2})(\d{0,1})/, '$1/$2');
                } 
            }
            break;

        case 'cadastroPessoa':
            limiteLengthInput(18, input);
            apagarCaracterInvalido(input, /([^\d\-\/\.])/g);

            break;

        case 'telefone':
            limiteLengthInput(15, input);

            apagarCaracterInvalido(input, /([^\d^\-^\(^\)^ ])/);

            if('Backspace' != event.key && 'Tab' != event.key && /\d/.test(event.key)){
                let tel = input.value.replace(/\D/g, '');
                tel = tel.replace(/^0/, "");

                if(tel.length > 10){
                    input.value = tel.replace(/^(\d{2})(\d{5})(\d{1,4}).*/, "($1) $2-$3");
                }else if (tel.length > 5) {
                    input.value = tel.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
                } else if (tel.length > 2) {
                    input.value = tel.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
                } else{
                    input.value = tel.replace(/^(\d)/, "($1");
                }
            } else{
                let tel = input.value.replace(/\D/g, '');
    
                if(tel.length < 11 && tel.length > 6)
                    input.value = tel.replace(/^(\d{2})(\d{4})(\d{1,4}).*/, "($1) $2-$3");
            }
            break;
        case 'cep':
            limiteLengthInput(9, input);

            apagarCaracterInvalido(input, /([^\d^\-])/);

            let cep = input.value;

            if(cep.length >= 5 && 'Backspace' != event.key)
                input.value = cep.replace(/^(\d{5})(\d{0,3})$/, "$1-$2");
            break;
    }
}

function calcularIdade(dia, mes, ano, diaAtual, mesAtual, anoAtual){
    let idadeCampo = document.querySelector('#idade');
    
   //Calcula a idade  
    idade = anoAtual - ano;

   //Caso a pessoa ainda não tenha feito aniversário no ano atual  
    if(mesAtual < mes) idade--;
        else if(mesAtual == mes && diaAtual < dia) idade--;            

    idadeCampo.value = `${idade}`;
}
/** 
 * ***************************************************************************************
 */

function estados(form){
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = () => {
        const lista = request.response;
        estadosList = lista;
        exibir(lista, form.estados);
    }
}

function cidades(form){
    let valor = form.estados;    
    let selectC = form.cidades;

    if(valor.id != null){
        selectC.innerHTML = '<option disabled selected>Cidades</option>';
        url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${valor.value}/distritos`;

        request.open('GET', url);
        request.responseType = 'json';
        request.send();
        
        request.onload = function() {
            const lista = request.response;
            cidadeList = lista;
            exibir(lista, form.cidades);
        }

    }
}

function exibir(obj, select) {
    obj.sort(ordemAlfabetica);

    obj.forEach(item => {
        let opt = document.createElement('option');
            opt.innerHTML = item.nome;
            opt.value = item.id;
        select.appendChild(opt);
    });
}

function ordemAlfabetica(a, b) { 
    if(a.nome.toUpperCase() == b.nome.toUpperCase()){
        return 0;
    }
    if(a.nome.toUpperCase() < b.nome.toUpperCase()){
        return -1;
    }
    if(b.nome.toUpperCase() < a.nome.toUpperCase()){
        return 1;
    }
}