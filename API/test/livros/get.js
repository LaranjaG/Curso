const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}/livros`;
const expect = dependences.expect;
const livro = dependences.livro;

describe("Teste de livro get", function(){
   before((done) =>{
      livro.save()
      .then((savedLivro) =>{
         livro._id = savedLivro._id;
         done();
      })
      .catch((erro) =>{
         console.log("Erro ao cadastrar livro de teste!");
         done();
      });
   });

   it("Buscar todos os livros", (done) =>{
      chai.request(base_url)
      .get('/')
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('array');
         expect(res.body).to.not.have.property('error');
         done();
      });
   });

   it("Buscar livro pelo id", (done) =>{
      chai.request(base_url)
      .get(`/${livro._id}`)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   it("Erro ao buscar livro pelo id (ID fora no formato incorreto)", (done) =>{
      chai.request(base_url)
      .get(`/0`)
      .end((err, res) =>{
         expect(res).to.have.status(600);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   it("Erro ao buscar livro pelo id (id no formato object id, mas que não possui dados no db)", (done) =>{
      chai.request(base_url)
      .get(`/60ff2bf8d8079229949f195e`)
      .end((err, res) =>{
         expect(res).to.have.status(700);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   //Não consegui pensar em um cenário para gerar o erro 500 no get livro by id

   it("Buscar livro pelo isbn", (done) =>{
      chai.request(base_url)
      .get(`/isbn/${livro.isbn}`)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   it("Erro ao buscar livro pelo isbn (isbn no formato inválido)", (done) =>{
      chai.request(base_url)
      .get(`/isbn/22`)
      .end((err, res) =>{
         expect(res).to.have.status(600);
         done();
      });
   });

   it("Erro ao buscar livro pelo isbn (isbn não cadastrado)", (done) =>{
      chai.request(base_url)
      .get(`/isbn/111-3214568798`)
      .end((err, res) =>{
         expect(res).to.have.status(700);
         done();
      });
   });

   //Não sei que situação o isbn cairia no erro 500

   it("Buscar livro pelo nome", (done) =>{
      chai.request(base_url)
      .get(`/titulo/${livro.titulo}`)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('array');
         done();
      });
   });

   it("Erro ao buscar livro pelo nome", (done) =>{
      chai.request(base_url)
      .get(`/titulo/`)
      .end((err, res) =>{
         expect(res).to.have.status(600);
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
});