const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;
const user = dependences.user;
let password = "1111111111";
const livro = dependences.livro;

describe("Teste de usuário delete", ()=>{   
   it("Cadastrar usuário", (done) =>{
      chai.request(`${base_url}/signup`)
      .post('/')
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         console.log(res.body);
         done();
      });
   });

   it("Erro ao cadastrar usuário (nome de usuário duplicado)", (done) =>{
      chai.request(`${base_url}/signup`)
      .post('/')
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });


   it("Erro ao logar usuário (username inválido)", (done) =>{
      chai.request(base_url)
      .post('/login')
      .send({
         username: "Jão",
         password: user.password
      })
      .end((err, res, ll) =>{
         expect(res).to.have.status(400);
         done();
      });
   });

   it("Erro ao logar usuário (senha incorreta)", (done) =>{
      chai.request(base_url)
      .post('/login')
      .send({
         username: "Jão",
         password: user.password
      })
      .end((err, res, ll) =>{
         expect(res).to.have.status(400);
         done();
      });
   });

   it("Logar usuário", (done) =>{
      chai.request(base_url)
      .post('/login')
      .send({
         username: user.username,
         password: user.password
      })
      .end((err, res, ll) =>{
         expect(res).to.have.status(200);
         user.token = res.body.user.token;
         user._id = res.body.user._id;
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

   it("Erro ao editar list livros do user (mais de 10 livros)", (done) =>{
      chai.request(base_url)
      .put(`/editListLivros`)
      .set({'Authorization': user.token})
      .send({
         livros: [livro._id, livro._id, livro._id, livro._id, livro._id, livro._id, livro._id, livro._id, livro._id, livro._id, livro._id]
      })
      .end((err, res) =>{
         expect(res).to.have.status(401);
         // expect(res.body).to.be.an('array');
         done();
      });
   });

   it("Edit list livros do user", (done) =>{
      chai.request(base_url)
      .put(`/editListLivros`)
      .set({'Authorization': user.token})
      .send({
         livros: [livro._id]
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         // expect(res.body).to.be.an('array');
         done();
      });
   });

   it("Erro ao Add livro a list do user (livro repetido)", (done) =>{
      chai.request(base_url)
      .put(`/addLivro`)
      .set({'Authorization': user.token})
      .send({
         livro: livro._id
      })
      .end((err, res) =>{
         expect(res).to.have.status(400);
         // expect(res.body).to.be.an('array');
         done();
      });
   });

   it("Delete list livros do user", (done) =>{
      chai.request(base_url)
      .put(`/deleteListLivros`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('array');
         done();
      });
   });
   
   it("Add livro a list do user", (done) =>{
      chai.request(base_url)
      .put(`/addLivro`)
      .set({'Authorization': user.token})
      .send({
         livro: livro._id
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         // expect(res.body).to.be.an('array');
         done();
      });
   });

   it("Buscar livro do usuário", (done) =>{
      chai.request(`${base_url}/listaLivros`)
      .get(`/`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         console.log(res.body);
         done();
      });
   });

   it("Delete livro um item da list do user", (done) =>{
      chai.request(base_url)
      .put(`/deleteLivro`)
      .set({'Authorization': user.token})
      .send({
         livro: livro._id
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         // expect(res.body).to.be.an('array');
         done();
      });
   });

   it("Deletar livro (deletar livro cadastrado, usando acesso de admin)", (done)=>{
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

   it("Erro ao editar senha (erro ao refazer login)", (done) =>{
      chai.request(base_url)
      .put(`/editSenha`)
      .set({'Authorization': user.token})
      .send({
         password: "senha errada",
         newPassword: password
      })
      .end((err, res) =>{
         expect(res).to.have.status(400);
         done();
      });
   });   

   it("Erro ao editar senha (nova senha igual a atual)", (done) =>{
      chai.request(base_url)
      .put(`/editSenha`)
      .set({'Authorization': user.token})
      .send({
         password: user.password,
         newPassword: user.password
      })
      .end((err, res) =>{
         expect(res).to.have.status(400);
         done();
      });
   });   

   it("Edit senha", (done) =>{
      chai.request(base_url)
      .put(`/editSenha`)
      .set({'Authorization': user.token})
      .send({
         password: user.password,
         newPassword: password
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         done();
      });
   });   

   it("Edit user", (done) =>{
      chai.request(base_url)
      .put(`/editUser`)
      .set({'Authorization': user.token})
      .send({
         nome: "Rayslla Rodrigues",
         telefone: "4232-9898",
         cpf: "444.555.666-77",
         username: "nomeUserNameNovo"
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         user.username = "nomeUserNameNovo";
         done();
      });
   });   

   it("Logout usuário", (done) =>{
      chai.request(`${base_url}/logout`)
      .post('/')
      .set({'Authorization': user.token})
      .send({})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         done();
      });
   });

   it("Erro ao fazer logout usuário (usuário sem token)", (done) =>{
      chai.request(`${base_url}/logout`)
      .post('/')
      .set({'Authorization': user.token})
      .send({})
      .end((err, res) =>{
         expect(res).to.have.status(400);
         done();
      });
   });

   it("Logar usuário", (done) =>{
      chai.request(`${base_url}/login`)
      .post('/')
      .send({
         username: user.username,
         password: password
      })
      .end((err, res, ll) =>{
         expect(res).to.have.status(200);
         user.token = res.body.user.token;
         done();
      });
   });

   it("Deletar usuário", (done) =>{
      console.log(user.password);
      chai.request(`${base_url}/deleteUser`)
      .delete('/')
      .set({'Authorization': user.token})
      .send({
         password: password
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         done();
      });
   });
});