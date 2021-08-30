const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;
const user = dependences.user;

describe("Teste de usuário get", ()=>{   

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
      .end((err, res) =>{
         expect(res).to.have.status(200);
         user.token = res.body.user.token;
         user._id = res.body.user._id;
         done();
      });
   });

   it("Buscar todos os usuários", (done) =>{
      chai.request(base_url)
      .get('/users/')
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('array');
         expect(res.body).to.not.have.property('error');
         done();
      });
   });

   it("Buscar usuário pelo id", (done) =>{
      chai.request(base_url)
      .get(`/users/${user._id}`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   it("Erro ao buscar usuário pelo id (ID fora no formato incorreto)", (done) =>{
      chai.request(base_url)
      .get(`/users/0`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(600);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   it("Erro ao buscar usuário pelo id (id no formato object id, mas que não possui dados no db)", (done) =>{
      chai.request(base_url)
      .get(`/users/60ff2bf8d8079229949f195e`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(700);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   //Não consegui pensar em um cenário para gerar o erro 500 no get user by id

   it("Buscar usuário pelo cpf", (done) =>{
      chai.request(base_url)
      .get(`/users/cpf/${user.cpf}`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         done();
      });
   });

   it("Erro ao buscar usuário pelo cpf (cpf no formato inválido)", (done) =>{
      chai.request(base_url)
      .get(`/users/cpf/22`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(600);
         done();
      });
   });

   it("Erro ao buscar usuário pelo cpf (cpf não cadastrado)", (done) =>{
      chai.request(base_url)
      .get(`/users/cpf/111.222.333-44`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(700);
         done();
      });
   });

   //Não sei que situação o cpf cairia no erro 500

   it("Buscar usuário pelo nome", (done) =>{
      chai.request(base_url)
      .get(`/users/nome/${user.nome}`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('array');
         done();
      });
   });

   it("Erro ao buscar usuário pelo nome", (done) =>{
      chai.request(base_url)
      .get(`/users/nome/`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(600);
         done();
      });
   });

   after((done) =>{
      user.deleteOne({"_id": user._id})
      .then((deleted) =>{
         done();
      })
      .catch((erro) =>{
         console.log('Erro ao deletar usuário de teste!');
         done();
      });
   });
});