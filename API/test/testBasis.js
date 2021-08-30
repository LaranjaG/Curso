const chai = require('chai');
const chaiHttp = require('chai-http');
const user = new require('../models/User')();
const userBase = new require('../models/User')();
const livro =  new require('../models/Livro')();

//Valor usuário
user.nome = "Rayslla";
user.cpf = "222.222.222-11";
user.telefone = "4002-8922";
user.password = "12345678";
user.username = "Laranja530";
user.group = "admin";

//Valor usuário
userBase.nome = "Rayslla";
userBase.cpf = "111.222.222-11";
userBase.telefone = "4002-8922";
userBase.password = "12345678";
userBase.username = "LaranjaG";
userBase.group = "admin";

//Valor livro
livro.isbn = "978-0345477491";
livro.titulo = "Star Wars"; 
livro.subTitulo = "Darth bane: Regra dos dois: 2"; 
livro.autor = "Drew Karpyshyn"; 
livro.numeroPaginas = 297; 
livro.idioma = "Português";
livro.sinopse = "Como último Sith sobrevivente, Darth Bane promulgou uma nova diretriz draconiana: a Regra de Dois. Agora, ele está pronto para colocar sua política em prática, e acha que encontrou o elemento-chave que completará seu triunfo: uma estudante para treinar nas práticas do lado sombrio.";

chai.use(chaiHttp);

module.exports = {
   app: require('../bin/www'),
   chai: chai,
   expect: chai.expect,
   base_url: 'http://localhost:3000',
   user: user,
   userBase: userBase,
   // userAdmin: user,
   livro: livro,
}

//Livros prontos para adicionar no DB

//Livro I 

// {
//    "isbn" : "978-0345477378",
//    "titulo": "Star Wars", 
//    "subTitulo": "Darth bane: Caminho da Destruição",
//    "autor": "Drew Karpyshyn", 
//    "numeroPaginas": 358, 
//    "idioma": "Português",
//    "sinopse": "Em meio guerra em curso um minerador solitário no planeta Apatros chamado Dessel encontra seu destino. Filho de um pai abusivo, preso em dívidas sem fim a uma corporação sem rosto, Des tornou-se difícil, cruel e vicioso para sobreviver na Orla Exterior."
// }

//Livro II

// {
//    "isbn": "978-0345477491",
//    "titulo": "Star Wars", 
//    "subTitulo": "Darth bane: Regra dos dois: 2", 
//    "autor": "Drew Karpyshyn", 
//    "numeroPaginas": 297, 
//    "idioma": "Português",
//    "sinopse": "Como último Sith sobrevivente, Darth Bane promulgou uma nova diretriz draconiana: a Regra de Dois. Agora, ele está pronto para colocar sua política em prática, e acha que encontrou o elemento-chave que completará seu triunfo: uma estudante para treinar nas práticas do lado sombrio."
// }

//Livro III
   // {
   //    "isbn": "978-0345511577",
   //    "titulo": "Star Wars", 
   //    "subTitulo":"Darth bane: Dinastia do Mal: 3",
   //    "autor": "Drew Karpyshyn", 
   //    "numeroPaginas": 320, 
   //    "idioma": "Português", 
   //    "sinopse": "Vinte anos se passaram desde que Darth Bane, o atual Lorde Sombrio dos Sith, destruiu a antiga ordem dedicada ao Lado Sombrio e a reinventou como um círculo de dois: um mestre para exercer o poder e transmitir a sabedoria, e um aprendiz para estudar, desafiar e destituir o lorde sombrio em um duelo até a morte."
   // }