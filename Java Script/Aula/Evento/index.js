window.addEventListener('load', init);

function init(){
   document.querySelector('#formulario').addEventListener('submit', validarForm);
   document.querySelector("#link").addEventListener("click", desabilitar);
}

function validarForm(marcel){
   let nome = document.querySelector('#nome').value;
   let idade = document.querySelector('#idade').value;

   document.querySelector('#resultado').innerHTML = `Nome: ${nome} - Idade: ${idade}`;
   marcel.preventDefault();

}

function desabilitar(evento){
   evento.preventDefault();
   // alert("Não vai não! vai pro Baidu...")
   // window.location = "http://baidu.com/"
}