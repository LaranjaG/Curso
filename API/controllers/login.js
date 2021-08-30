const User = require('../models/User');
const Livro = require('../models/Livro');
const mongoose = require('mongoose');

module.exports = {
   signup: (req, res, next) =>{
      const user = new User(req.body);

      user.livros = []; //Usuário recebe uma lista vazia de livros quando faz o cadastro

      user.save()
      .then((savedUser) => {
         return res.status(200).json(savedUser);
      })
      .catch(error => {
         return res.status(500).json(error);
      });
   },

   login: (req, res, next) => {
      const {username, password} = req.body;

      User.findOne({username})
      .then(user => {
         if(!user){
            res.status(400).json({sucess: false, token: null, msg: 'Username ou senha incorretos!'})
         } else {
            user.comparePassword(password, (error, isMatch) => {
               if(isMatch && !error){
                  user.generateAuthToken()
                  .then(sucess => {
                     res.status(200).json(sucess);
                  })
                  .catch(error => {
                     res.status(400).json(error);
                  })
               } else
                  return res.status(400).json({sucess: false, token: null, mgs: 'Username ou senha incorretos!'});
            });
         }
      })
   },

   logout: (req, res, next) => {
      const _id = req.user._id;
      const token = null;

      User.updateOne({_id}, {token})
      .then(user => {
         res.status(200).json({sucess: true, token: null, msg: 'Logout realizado com sucesso!'});
      })
      .catch(error => {
         res.status(400).json({sucess: false, token: null, msg: 'Erro ao fazer logout!'});
      });
   },

   listaLivros: (req, res, next) => { //pega a lista de livros do usuário
      const {_id, token} = req.user;

      User.findOne({_id, token}) //usuário com o token válido
      .then(async user => {
         let livros = [];

         for(let _id of user.livros){
            let livro = await Livro.findOne({_id});
            livros.push(livro);

            if(!livros) res.status(500).json({msg: "Deu errado e não certo"});
         }
         res.status(200).json({livros});
      })
      .catch(error => {
         res.status(500).json({sucess: false, token: null, msg: 'Usuário não encontrado'});
      });
   },

   //Permite que o usuário edite informações básicas como: nome, telefone, cpf e username
   editUser: (req, res, next) => { 
      const {nome, telefone, cpf, username} = req.body; 
      const user = req.user;
      const _id = user._id;

      /**
       * Update dos dados basicos do usuário
       */

      if(nome != null)
         user.nome = nome;
      if(telefone != null)
         user.telefone = telefone;
      if(cpf != null)
         user.cpf = cpf;
      if(username != null)
         user.username = username;

      User.findOneAndUpdate({_id}, {$set: user}, {new: true, runValidators: true})
      .then(userUpdate =>{
         if(userUpdate != null)
            return res.status(200).json({msg: `Benutzer erfolgreich aktualisiert!`, user: userUpdate});

            return res.status(700).json({msg: `Fehler beim Aktualisieren des Benutzers!`});
      })
      .catch(error =>{
         return res.status(500).json({msg: `Fehler beim Aktualisieren des Benutzers!`, error: error.message});
      });
   },

   editSenhaUser: (req, res, next) => {
      //Permite o usário alterar a senha
      const {_id, token, username} = req.user;
      const {password, newPassword} = req.body;
      
      User.findOne({username})
      .then(user => {
         if(!user){
            res.status(400).json({sucess: false, token: null, msg: 'Usuário não encontrado!'})
         } else {
            user.comparePassword(password, async (error, isMatch) => {
               if(isMatch && !error){ //Verifica a senha novamente (refaz um login antes de proseguir)
                  try{
                     if(password == newPassword) //Não permite que a senha atual seja alterada pela mesma que a antiga
                        return res.status(400).json({msg: "Senha tem que ser diferente da atual!"});    
                     
                     user.password = await user.hashSenha(newPassword);
                  } catch(error){
                     return res.status(500).json({msg: "Não foi possível criar hash para a senha!"});
                  };

                  User.findOneAndUpdate({_id, token}, {$set: {password: user.password}})
                  .then(async user => {
                     return res.status(200).json({msg: "Senha alterada!"});
                  })
                  .catch(error => {
                     return res.status(401).json({msg: "Não foi possível alterar senha!"});
                  });
               } else
                  return res.status(400).json({sucess: false, token: null, mgs: 'Senha incorreta'});
            });
         }
      })
   },

   editList: (req, res, next) => {
      const {_id, token} = req.user;

      const {livros} = req.body;
      const user = new User(req.body);

      if(livros.length > 10)
         res.status(401).json({msg: "Não se pode alugar mais que 10 livros por vez!"}); 
      
      user.verifyBooks()
      .then(codigo => {
         if(codigo != 1) return res.status(400).json({msg: ((codigo == 0) ? "Livro não pertencente a coleção!" : "Item duplicado no array!")});

         User.findOneAndUpdate({_id, token}, {$set: {livros}}, {new: true})
         .then(async user => {
            let livros = [];

            for(let _id of user.livros){
               let livro = await Livro.findOne({_id});
               
               if(!livro) return res.status(500).json({msg: "Livro não encontrado!"});
               
               livros.push(livro);
            }
            
            return res.status(200).json({livros});
         })
      .catch(error => {
         return res.status(401).json({msg: "Não foi possível editar a list de de livros!"});
      });

      })
      .catch(error => {
         return res.status(400).json({msg: "Livro não pertencente a coleção!"});
      });
   },

   addItemList: (req, res, next) => {
      //Adiciona um único livro a lista de livros
      const {_id, token} = req.user;

      const {livro} = req.body;
      const user = new User(req.user);

      if(user.livros >= 10)
         res.status(400).json({msg: "Não se pode alugar mais que 10 livros por vez!"}); 

      user.livros.push(livro);

      const livros = user.livros;

      user.verifyBooks()
      .then(codigo => {
         if(codigo != 1) return res.status(400).json({msg: ((codigo == 0) ? "Livro não pertencente a coleção!" : "Item duplicado no array!")});

         User.findOneAndUpdate({_id, token}, {$set: {livros}}, {new: true})
         .then(async user => {
            let livros = [];

            for(let _id of user.livros){
               let livro = await Livro.findOne({_id});
               
               if(!livro) return res.status(500).json({msg: "Livro não encontrado!"});
               
               livros.push(livro);
            }
            return res.status(200).json({livros});
         })
      .catch(error => {
         return res.status(401).json({msg: "Não foi possível editar a list de de livros!"});
      });

      })
      .catch(error => {
         return res.status(400).json({msg: "Livro não pertencente a coleção!"});
      });
   },

   deleteList: (req, res, next) => {
      //Deleta toda lista de livros que o usuário tem
      const {_id, token} = req.user;

      User.findOneAndUpdate({_id, token}, {$set: {livros: []}}, {new: true})
      .then(async user => {
         return res.status(200).json(user.livros);
      })
      .catch(error => {
         return res.status(401).json({msg: "Não foi possível editar a list de de livros!"});
      });
   },

   deleteUser: (req, res, next) => {
      //Deleta usuário
      const {_id, token, username} = req.user;
      const {password} = req.body;
      
      User.findOne({username})
      .then(user => {
         if(!user){
            return res.status(400).json({sucess: false, token: null, msg: 'Usuário não encontrado!'})
         } else {
            user.comparePassword(password, (error, isMatch) => {
               if(isMatch && !error){
                  User.findOneAndDelete({_id, token})
                  .then(async user => {
                     return res.status(200).json({msg: "Usuário deletado!"});
                  })
                  .catch(error => {
                     return res.status(401).json({msg: "Não foi possível deletar usuário!"});
                  });
               } else
                  return res.status(400).json({sucess: false, token: null, mgs: 'Senha incorreta'});
               
            });
         }
      })
   },

   deleteItemList: (req, res, next) => {
      //Deleta um item da lista de livros
      const {_id, token} = req.user;
      const {livro} = req.body;
      const user = new User(req.user);

      user.livros.splice(
         user.livros.indexOf(livro), 1
      );

      const livros = user.livros;

      User.findOneAndUpdate({_id, token}, {$set: {livros}}, {new: true})
      .then(async user => {
         return res.status(200).json(user.livros);
      })
      .catch(error => {
         return res.status(401).json({msg: "Não foi possível editar a list de de livros!"});
      });

   }
}