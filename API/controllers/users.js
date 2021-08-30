const User = require('../models/User');
const mongoose = require('mongoose');
/*
 * As menssgens em alemão vão continuar, só nos controllers? yep 
 * 
 * Meus código ta lindo eu sei, bunitões
 * 
 * Hj dia 01/08, quando eu finalizei a criação e organizações do meus testes e fiz o questionario
 * mas sabe o q eu n ganhei o feedback da minha ultima atividade :(
 */

/*
 * 200 - deu tudo certo!
 * 400 - erro no app
 * 500 - erro ao tentar fazer alguma das operações de CRUD 
 * 600 - ID inválido
 * 700 - o getById aceita um id q n ta no banco
 */

module.exports = {
   getAllUsers: (req, res, next) => {
      User.find()
      .then(users =>{
         return res.status(200).json(users);
      })
      .catch(error => {
         return res.status(500).json({msg: "Fehler beim Abrufen des Benutzers!", error: error.message});
      });
   },

   getUserById: (req, res, next) => {
      const idUser = req.params.id;

      //ID não válido!
      if(!mongoose.Types.ObjectId.isValid(idUser)) 
         return res.status(600).json({mgs: "Ausweis nicht gültig!"});

      User.findById(idUser).
      then(user => {
         if(user != null){
            return res.status(200).json(user);
         }

         return res.status(700).json({mgs: "Benutzer gelöscht!"}); //Usuário deletado
      })
      .catch(error =>{
         return res.status(500).json({mgs: "Benutzer nicht gefunden!",  error: error.message});
      });
   },

   getUserByCpf: (req, res, next) => {      
      const cpf = req.params.cpf;
      
      //Cpf no formato inválido!
      if(!(/^(\d{3}\.\d{3}\.\d{3}\-\d{2})$/.test(cpf))) 
         return res.status(600).json({mgs: "Cpf im ungültigen Format!"});

      User.findOne({cpf: cpf})
      .then(user => {
         if(user != null){
            return res.status(200).json(user);
         }

         return res.status(700).json({mgs: "Benutzer nicht gefunden!"}); //user deletado
      })
      .catch(error =>{
         return res.status(500).json({mgs: "Benutzer nicht gefunden!",  error: error.message});
      });
   },

   getUsersByNome: (req, res, next) => {      
      const nome = req.params.nome;
      
      //Nome vazio
      if(!nome) 
         return res.status(600).json({mgs: "Leerer Name!"});

      User.find({ 
         "nome": {'$regex' : nome, '$options' : 'i'}
      })
      .then(users =>{
         if(users != null){
            return res.status(200).json(users);
         }

         return res.status(700).json({mgs: "Benutzer nicht gefunden!"}); //user deletado
      })
      .catch(error => {
         return res.status(500).json({mgs: "Benutzer nicht gefunden!",  error: error.message});
      });
   },

   addUser: (req, res, next) => {
      const newUser = new User(req.body);

      newUser.save()
      .then(savedUser => { 
         return res.status(201).json({msg: "Benutzer erfolgreich gespeichert!", user: savedUser});
      })
      .catch(error =>{
         return res.status(500).json({msg: "Fehler beim Speichern des Benutzers!", error: error.message});
      });
   },

   updateUser: (req, res, next) => {
      const idUser = req.params.id;

      if(!mongoose.Types.ObjectId.isValid(idUser)) 
         return res.status(600).json({mgs: "Ausweis nicht gültig!"});

      /*
       * O runValidators permite que a verificação seja executada, 
       * sendo assim ele usa a verificação do schema antes de atualizar os dados
       */

      User.findOneAndUpdate({_id: idUser}, {$set: req.body}, {new: true, runValidators: true})
      .then(userUpdate =>{
         if(userUpdate != null)
            return res.status(200).json({msg: `Benutzer erfolgreich aktualisiert!`, user: userUpdate});

            return res.status(700).json({msg: `Fehler beim Aktualisieren des Benutzers!`});
      })
      .catch(error =>{
         return res.status(500).json({msg: `Fehler beim Aktualisieren des Benutzers!`, error: error.message});
      });
   },

   deleteUser: (req, res, next) =>{
      const idUser = req.params.id;

      if(!mongoose.Types.ObjectId.isValid(idUser)) 
         return res.status(600).json({mgs: "Ausweis nicht gültig!"});

      // User.deleteOne({_id: idUser});
      User.findByIdAndDelete(idUser)
      .then(userDelete =>{
         if(userDelete != null)
            return res.status(200).json({msg: `Benutzer erfolgreich entfernt!`, user: userDelete});

            return res.status(700).json({msg: `Benutzer erfolgreich entfernt!`});
      }).catch(error =>{
         return res.status(500).json({msg: `Fehler beim Entfernen des Benutzers!`, error: error});
      });
   },
}