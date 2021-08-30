window.addEventListener('load', ()=>{
  calcularIdade();

  const links = document.querySelectorAll('nav label');

  const linkLateal = document.querySelectorAll('#menu label');

  setInterval(() => {
    document.querySelector('.body').style.display = 'block';
    document.querySelector('.loading').style.display = 'none';
  }, 2000);

  linkLateal.forEach(
    item => item.addEventListener('click', go)
  );

  links.forEach(
    item => item.addEventListener('click', go)
  );

  currentSection(true);
  // mostrarMenu(); //Verifica toda vez que a página é carregada onde esta o scroll e se deve ou não mostrar o menu

  window.addEventListener('scroll', () => currentSection(false));
});

function currentSection(loading){
  const posicaoScroll = window.pageYOffset;

  const itensMenu = document.querySelectorAll('#menu label');

  for(i = 0; i < itensMenu.length; i++){
    const idAtual = itensMenu[i].getAttribute('for');
    const atual = document.querySelector(`#${idAtual}`).offsetTop - 300;

    if(loading){
      if(i == 0) itensMenu[i].classList.add('current_section');
    } else {
      if(i < itensMenu.length - 1){
        const idProximo = itensMenu[i+1].getAttribute('for');
        const proximo = document.querySelector(`#${idProximo}`).offsetTop - 300;
        
        if(posicaoScroll >= atual  && posicaoScroll < proximo){
          itensMenu[i].classList.add('current_section');
        } else {
          itensMenu[i].classList.remove('current_section');
        }
      } else { //Ultimo item da lista
        if(posicaoScroll >= atual){
          itensMenu[i].classList.add('current_section');
        } else{
          itensMenu[i].classList.remove('current_section');
        }
      }
    }
  }
}

function go(event){
  const element = event.target;
  const id = element.getAttribute('for');
  const section = document.querySelector(`#${id}`); 
  const top = section.offsetTop - 100;
  
  scrolling(top);
}

function scrolling(y){
  window.scroll({
    top: y, 
    behavior: "smooth"
  });
}

function calcularIdade(){
  let idadeCampo = document.querySelector('#idade');
  let nascimento = '16/04/2001';

 //Quebra a data de nascimento  
  dataNascimento = nascimento.split(/\//);
  
  diaNascimento = dataNascimento[0];
  mesNascimento = dataNascimento[1];
  anoNascimento = dataNascimento[2];

 //Data atual
  data = new Date();
  
  diaAtual = data.getDate();
  mesAtual = data.getMonth() + 1;
  anoAtual = data.getFullYear();
  
 //Calcula a idade  
  idade = anoAtual - anoNascimento;

 //Caso a pessoa ainda não tenha feito aniversário no ano atual  
  if(mesAtual < mesNascimento) idade--;
    else if(mesAtual == mesNascimento && diaAtual < diaNascimento) idade--;

  idadeCampo.innerHTML += `${idade}`;
}