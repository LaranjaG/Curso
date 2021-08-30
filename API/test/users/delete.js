const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;
const user = dependences.user;

describe("Teste de usuário delete", ()=>{   

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

   it("Erro ao deletar usuário (id inválido)", (done)=>{
      chai.request(base_url)
      .delete(`/users/0`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(600);
         done();
      });
   });

   it("Erro ao deletar usuário (id no formado object id, mas n cadastrado)", (done)=>{
      chai.request(base_url)
      .delete(`/users/6104c2066bdc74185086945c`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(700);
         done();
      });
   });

   it("Deletar usuário", (done)=>{
      chai.request(base_url)
      .delete(`/users/${user._id}`)
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(200);
         expect(res.body).to.be.an('object');
         expect(res.body).to.not.have.property('error');
         done();
      });
   });

});