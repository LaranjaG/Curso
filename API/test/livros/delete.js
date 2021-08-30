const {chai, base_url, expect, livro, user} = require('../testBasis');

describe("Teste de usuário delete", () => {   
   
   before((done) => {
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

   before((done) =>{
      livro.save()
      .then((savedLivro) =>{
         livro._id = savedLivro._id;
         done();
      })
      .catch((erro) =>{
         console.log("Erro ao cadastrar usuário de teste!");
         done();
      });
   });

   it("Deletar livro", (done)=>{
      chai.request(base_url)
      .delete(`/livros/${livro._id}`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         expect(res.body).to.not.have.property('error');
         done();
      });
   });

   it("Erro ao deletar usuário (id inválido)", (done)=>{
      chai.request(base_url)
      .delete(`/livros/0`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(600);
         done();
      });
   });

   it("Erro ao deletar usuário (id no formado object id, mas n cadastrado)", (done)=>{
      chai.request(base_url)
      .delete(`/livros/6104c2066bdc74185086945c`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(700);
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