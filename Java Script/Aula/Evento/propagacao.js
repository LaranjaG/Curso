window.addEventListener('load', init);

function init(){
   document.querySelector('#um').addEventListener('click', eventoUm);
   document.querySelector('#dois').addEventListener('click', eventoDois);
   document.querySelector('#tres').addEventListener('click', eventoTres);
   document.querySelector('#linkar').addEventListener('click', eventoLink);
}

function eventoUm(event){
   alert("Clicou na Div 1");
   event.stopPropagation();
}

function eventoDois(event){
   alert("Clicou na Div 2");
   event.stopPropagation();
}

function eventoTres(event){
   alert("Clicou na Div 3");
   event.stopPropagation();   
   console.log('X: '+ event.screenX);
   console.log('Y: '+event.screenY);
}

function eventoLink(event){
   event.stopPropagation();
}