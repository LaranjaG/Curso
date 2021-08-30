const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;
const user = dependences.user;
const userBase = dependences.userBase;


describe("Teste de usuário post", ()=>{   

   before((done) =>{
      chai.request(`${base_url}`)
      .post('/signup')
      .send(userBase)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         done();
      });
   });

   before((done) =>{
      chai.request(base_url)
      .post('/login')
      .send({
         username: userBase.username,
         password: userBase.password
      })
      .end((err, res) =>{
         expect(res).to.have.status(200);
         userBase.token = res.body.user.token;
         userBase._id = res.body.user._id;
         done();
      });
   });

   it("Adicionar usuário", (done) =>{
      chai.request(base_url)
      .post('/users/')
      .set({'Authorization': userBase.token})
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(201);
         expect(res.body).to.be.an('object');
         expect(res.body).to.have.property('user');
         // user._id = res.body.user._id;
         done();
      });
   });

   it("Erro ao adicionar usuário (CPF duplicado)", (done) =>{
      chai.request(base_url)
      .post('/users/')
      .set({'Authorization': userBase.token})
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });

   it("Adicionar usuário erro (CPF null)", (done) =>{
      chai.request(base_url)
      .post('/users/')
      .set({'Authorization': userBase.token})
      .send({
         nome: "Natasha",
         telefone: "4002-8922"
      })
      .end((err, res) =>{
         expect(res).to.have.status(500);
         done();
      });
   });
   
   it("Erro ao adicionar usuário erro (Nome null)", (done) =>{
      chai.request(base_url)
      .post('/users/')
      .set({'Authorization': userBase.token})
      .send({
         cpf: "333.546.879-99",
         telefone: "4002-8922"
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
         console.log('Erro ao deletar usuário');
         done();
      });
   });

   after((done) =>{
      userBase.deleteOne({"_id": userBase._id})
      .then((deleted) =>{
         done();
      })
      .catch((erro) =>{
         console.log('Erro ao deletar usuário');
         done();
      });
   });
});