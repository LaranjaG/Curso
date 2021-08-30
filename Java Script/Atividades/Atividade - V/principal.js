import {getCookie, deleteCookie} from '/cookie.js';
import{filosofia, historia, forca} from '/textos.js';

if(getCookie('login') != '') window.addEventListener('load', loading); //Executa o loading e o carregamento da página apenas se tiver o cookie

else{
    document.querySelector('#controle').style.display = 'none'
    document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/2a/69/e3/2a69e3e226a3a4965630c4e3934e7620.gif)";

    setInterval(() => { 
        window.location.replace('index.html');                                    
    }, 2900);
}

function loading(){
    
    document.body.style.display = 'inline-block';

    //Pegar URL
    let dados = document.URL.split('?');
    let subDados = dados[1].split('=');
    let userLog = subDados[1];

    document.querySelector('#nameLog').innerHTML = userLog;
    document.querySelector('#logout').addEventListener('click', deleteCookie);
    
    let divConteudo = document.querySelector('#texto');

    document.querySelector('#filosofia').addEventListener('click', () => filosofia(divConteudo));
    document.querySelector('#historia').addEventListener('click', () => historia(divConteudo));
    document.querySelector('#forca').addEventListener('click', () => forca(divConteudo));
}
