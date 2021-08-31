const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;
const livro = dependences.livro;
const user = dependences.user;

describe("Teste de livro put", function(){   
   before(function(done){
      chai.request(`${base_url}`)
      .post('/signup')
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         done();
      });
   });

   before(function(done) {
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

   before(function(done){
      livro.save()
      .then((savedlivro) =>{
         livro._id = savedlivro._id;
         done();
      })
      .catch((erro) =>{
         console.log("Erro ao cadastrar livro de teste!");
         done();
      });

   });

   it("Editar livro", (done) =>{
      chai.request(base_url)
      .put(`/livros/${livro._id}`)
      .set({'Authorization': user.token})
      .send({
         "isbn" : "978-0345477378",
         "titulo": "Star Wars", 
         "subTitulo": "Darth bane: Caminho da Destruição",
         "autor": "Drew Karpyshyn", 
         "numeroPaginas": 358, 
         "idioma": "Português",
         "sinopse": "Em meio guerra em curso um minerador solitário no planeta Apatros chamado Dessel encontra seu destino. Filho de um pai abusivo, preso em dívidas sem fim a uma corporação sem rosto, Des tornou-se difícil, cruel e vicioso para sobreviver na Orla Exterior."
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         expect(res.body).to.have.property('livro');
         done();
      });
   });

   it("Retira dados não obrigatorios ao editar livro", (done) =>{
      chai.request(base_url)
      .put(`/livros/${livro._id}`)
      .set({'Authorization': user.token})
      .send({
         "subTitulo": "", 
         "idioma": "",
         "sinopse": ""
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         expect(res.body).to.have.property('livro');
         // console.log(res.body.livro);
         done();
      });
   });

   it("Erro ao editar livro (id inválido)", (done) =>{
      chai.request(base_url)
      .put(`/livros/1`)
      .set({'Authorization': user.token})
      .send(livro)
      .end((err, res) =>{
         expect(res).to.have.status(600);
         done();
      });
   });

   it("Erro ao editar livro (id no formato object id n presente na base de dados)", (done) =>{
      chai.request(base_url)
      .put(`/livros/61043fcf0d40c83558073a2e`)
      .set({'Authorization': user.token})
      .send(livro)
      .end((err, res) =>{
         expect(res).to.have.status(700);
         done();
      });
   });

   it("Erro ao editar livro (isbn inválido)", (done) =>{
      chai.request(base_url)
      .put(`/livros/${livro._id}`)
      .set({'Authorization': user.token})
      .send({
         "isbn" : "500",
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Não edita livro (isbn igual a null)", (done) =>{
      chai.request(base_url)
      .put(`/livros/${livro._id}`)
      .set({'Authorization': user.token})
      .send({
         "isbn" : "",
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Não edita livro (autor igual a null)", (done) =>{
      chai.request(base_url)
      .put(`/livros/${livro._id}`)
      .set({'Authorization': user.token})
      .send({
         "autor": "", 
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Não edita livro (numero de páginas igual a null)", (done) =>{
      chai.request(base_url)
      .put(`/livros/${livro._id}`)
      .set({'Authorization': user.token})
      .send({
         "numeroPaginas": ""
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
         console.log('Erro ao deletar livro de teste!');
         done();
      });
   });

   after(function(done){
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