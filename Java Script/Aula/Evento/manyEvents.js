window.addEventListener('load', ()=>{
   let div = document.querySelector('#quadrado');

   div.addEventListener('click', azul, false);
   div.addEventListener('dblclick', vermelho, false);
   div.addEventListener('mouseover', rosa, false);
   div.addEventListener('mouseout', roxo, false);

   let div2 = document.querySelector('#quadrado2');
   div2.onclick = azul;
   div2.ondblclick = vermelho;

});

function azul(){
   let div = document.querySelector('#quadrado');
   div.style.backgroundColor = 'blue';
   div.style.width = '200px';
   div.style.height = '200px';
}

function vermelho(){
   this.style.backgroundColor = 'red';

}

function rosa(){
   this.style.backgroundColor = 'deeppink';
}

function roxo(){
   this.style.backgroundColor = 'purple';
}