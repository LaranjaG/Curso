/**
 * Criei um servidor local usando node (fazendo ele gerar um servidor local para o arquivo html principal), 
 * fico td mt lindo e ta organizado
 */

import {getCookie, createCookie} from '/cookie.js';

if(getCookie('login') != ''){
    let login = getCookie('login');

    document.querySelector('#form').style.display = 'none';
    document.body.style.backgroundImage = "url(https://cdn.wallpapersafari.com/58/46/Gt5v2h.png)";
    document.querySelector('#loading').style.display = "inline";
    setInterval(() => { 
        window.location.replace('principal.html?User=' + login);                                    
    }, 3500);

    //Provalvelmente teria que ter um nivel mais complexo aqui, onde se iria conferir dados do cookie 
    //Salvo de login e senha, se os valores são validos, então login, senão explode o PC        
} else window.addEventListener('load', loading);

function loading(){
    let form = document.forms['form'];

    form.addEventListener('submit', (event) => {
        if(form.senha.value == 'admin' && form.login.value != ''){
            createCookie(form, form.connected.checked, 30);
        } else{
            event.preventDefault();
            document.querySelector('.erro').style.display = 'inline';
        }
    });
}