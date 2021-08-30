const dependences = require('../testBasis');
const chai = dependences.chai;
const base_url = `${dependences.base_url}`;
const expect = dependences.expect;
const user = dependences.user;
user.group = 'user';

/**
 * Esse arquivo é só para ver se o auth group funciona da forma adequada, um teste é o suficiente
 * lembrando que da forma que meus teste são montados cada arquivo de teste tem q ser rodado de 
 * forma individual, eu sei tirando essa parte de não poder rodar tudo junto fico lindão
 */

describe("Teste de usuário negar rotas a user comum", ()=>{   
   before((done) =>{
      chai.request(`${base_url}`)
      .post('/signup')
      .send(user)
      .end((err, res) =>{
         expect(res).to.have.status(200);
         done();
      });
   });

   beforeEach((done) =>{
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
         console.log(res.body)
         done();
      });
   });

   it("Erro ao buscar todos os usuários (usuário não é do tipo admin)", (done) =>{
      chai.request(base_url)
      .get('/users/')
      .set({'Authorization': user.token})
      .end((err, res) =>{
         expect(res).to.have.status(400);
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