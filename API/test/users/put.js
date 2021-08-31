const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;

const user = dependences.user;

describe("Teste de usuário put", ()=>{   

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

   it("Editar usuário", (done) =>{
      chai.request(base_url)
      .put(`/users/${user._id}`)
      .set({'Authorization': user.token})
      .send({
         nome: "Marcela",
         telefone: "2298-2004"
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         expect(res.body).to.have.property('user');
         done();
      });
   });

   it("Retira número de telefone ao editar usuário", (done) =>{
      chai.request(base_url)
      .put(`/users/${user._id}`)
      .set({'Authorization': user.token})
      .send({
         nome: "Marcel",
         telefone: ""
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         expect(res.body).to.have.property('user');
         console.log(res.body.user);
         done();
      });
   });

   it("Erro ao editar usuário (id inválido)", (done) =>{
      chai.request(base_url)
      .put(`/users/1`)
      .set({'Authorization': user.token})
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(600);
         done();
      });
   });

   it("Erro ao editar usuário (id no formato object id n presente na base de dados)", (done) =>{
      chai.request(base_url)
      .put(`/users/61043fcf0d40c83558073a2e`)
      .set({'Authorization': user.token})
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(700);
         done();
      });
   });

   it("Erro ao editar usuário (cpf inválido)", (done) =>{
      chai.request(base_url)
      .put(`/users/${user._id}`)
      .set({'Authorization': user.token})
      .send({
         cpf: "1"
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Não edita usuário ao passar nome ou cpf inválido", (done) =>{
      chai.request(base_url)
      .put(`/users/${user._id}`)
      .set({'Authorization': user.token})
      .send({
         nome: "",
         cpf: ""
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
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