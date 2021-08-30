const { assert } = require('chai');
const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;
const user = dependences.user;
const livro = dependences.livro;

describe("Teste de livro post", function(){
   before((done) =>{
      chai.request(`${base_url}`)
      .post('/signup')
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         done();
      });
   });

   before((done) =>{
      chai.request(base_url)
      .post('/login')
      .send({
         username: user.username,
         password: user.password
      })
      .end((err, res, ll) =>{
         expect(res).to.have.status(200);
         user.token = res.body.user.token;
         done();
      });
   });

   it("Adicionar livro", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(livro)
      .end((err, res) =>{
         expect(res).to.have.status(201);
         expect(res.body).to.be.an('object');
         expect(res.body).to.have.property('livro');
         livro._id = res.body.livro._id;
         done();
      });
   });

   it("Erro ao adicionar livro (isbn duplicado)", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(livro)
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Adicionar livro erro (isbn inválido)", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(         {
         "isbn" : "pao-isbnzimzim",
         "titulo": "Star Wars", 
         // "subTitulo": "Darth bane: Caminho da Destruição",
         "autor": "Drew Karpyshyn", 
         "numeroPaginas": 358
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Adicionar livro erro (sem isbn)", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(         {
         "isbn" : "",
         "titulo": "Star Wars", 
         // "subTitulo": "Darth bane: Caminho da Destruição",
         "autor": "Drew Karpyshyn", 
         "numeroPaginas": 358
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });
   
   it("Adicionar livro erro (número de paginas recebe valor diferente de number)", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(         {
         "isbn" : "978-0345477378",
         "titulo": "Star Wars", 
         // "subTitulo": "Darth bane: Caminho da Destruição",
         "autor": "Drew Karpyshyn", 
         "numeroPaginas": "pao"
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Adicionar livro erro (sem número de paginas)", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(         {
         "isbn" : "978-0345477378",
         "titulo": "Star Wars", 
         // "subTitulo": "Darth bane: Caminho da Destruição",
         "autor": "Drew Karpyshyn", 
         "numeroPaginas": ""
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Adicionar livro erro (sem titulo)", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(         {
         "isbn" : "978-0345477378",
         "titulo": "", 
         // "subTitulo": "Darth bane: Caminho da Destruição",
         "autor": "Drew Karpyshyn", 
         "numeroPaginas": "pao"
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Adicionar livro erro (sem autor)", (done) =>{
      chai.request(base_url)
      .post('/livros')
      .set({'Authorization': user.token})
      .send(         {
         "isbn" : "978-0345477378",
         "titulo": "Star Wars", 
         // "subTitulo": "Darth bane: Caminho da Destruição",
         "autor": "", 
         "numeroPaginas": "pao"
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   after((done) =>{
      livro.deleteOne({"_id": livro._id})
      .then((deleted) =>{
         done();
      })
      .catch((erro) =>{
         console.log('Erro ao deletar livro');
         done();
      });
   });

   after((done) =>{
      user.deleteOne({"token": user.token})
      .then((deleted) => {
         done();
      })
      .catch((error) => {
         console.log('Erro ao deletar usuário');
         done();
      });
   });

});