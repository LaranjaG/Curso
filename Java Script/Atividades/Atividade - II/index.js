//Tentativa I - tds divs com ID - data: 11/01/2021 - 23:27 (FINALIZADA)

/**
 * Adicionar um id para cada div - Funciona apenas para divs nomeadas
 * como só pega divs com ID n sofre problema de propagação
 */

// window.addEventListener('load', function(){
//     for(let i = 1; i <= 16; i++){
//         document.querySelector(`#d${i}`).addEventListener('mouseover',() => mudarCor(`#d${i}`));  
//     }
// });

// function mudarCor(id, event){
//     document.querySelector(id).style.background = 
//         `rgba(
//             ${Math.floor(Math.random() * 255)}, 
//             ${Math.floor(Math.random() * 255)}, 
//             ${Math.floor(Math.random() * 255)}, 
//             ${Math.random() * 1}
//         )`;  
// }

/********************************************************************************************************************/

//Tentativa II - divs sem ID - data: 12/01/2021 - 01:45 (FINALIZADA)

/**
 * Sem a necessidade de identificar cada div com um id especifico, ou seja divs sem identificação
 * Funciona para toda nova div adicionada
 */

// window.addEventListener('load', function(){
//     //Retorna um vetor de DIVs
//     var divs = document.querySelectorAll('div');

//     for(let i = 0; i < divs.length; i++){
//         /**
//          * O problema é que o event global não é muito recomendável
//          * O ideal seria você receber o event como parâmetro da função
//          */
//         divs[i].addEventListener('mouseover', (event) => newColor(divs, i, event));
//     }
// });

// function newColor(divs, id, event){
//     divs[id].style.background = 
//         `rgb(
//             ${Math.floor(Math.random() * 255)}, 
//             ${Math.floor(Math.random() * 255)}, 
//             ${Math.floor(Math.random() * 255)}
//         )`;  

//     event.stopPropagation(); //Só é necessário o uso caso estaja utilizando div dentro de div
// }

/********************************************************************************************************************/

// //Tentativa III - multiplos eventos - data: 12/01/2021 - 02:56 (FINALIZADA)
window.addEventListener('load', function(){
    let divs = document.querySelectorAll('div');

    for(let i = 0; i < divs.length; i++){

        divs[i].addEventListener('mouseover', (event) => newColor(divs, i, event));
        divs[i].addEventListener('click', (event) => outrosEventos(divs, i, 'click', event));
        divs[i].addEventListener('dblclick', (event) => outrosEventos(divs, '','double', event));

    }
});

function newColor(divs, id, event){
    divs[id].style.background = 
        `rgb(
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}
        )`;  

    event.stopPropagation();
}

function outrosEventos(divs, id = 0, tipo, event){
    if(tipo == 'click'){
        divs[id].style.background = `rgba(0, 0, 0, 0.8)`;
    } else if(tipo == 'double'){
        for(let id = 0; id < divs.length; id++){
            divs[id].style.background = `darkGrey`;
        }  
    }
    
    event.stopPropagation(); 
}