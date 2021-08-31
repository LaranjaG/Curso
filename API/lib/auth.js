const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
   jwtVerify: (req, res, next) => {
      const token = req.headers['authorization'].replace('Bearer ', '');

      if(token) {
         jwt.verify(token, process.env.TOKEN, function(error, decoded){
            if(error){
               return res.status(400).json(
                  {sucess: false, msg: 'Falha ao verificar token de acesso. Tente novamente'});
            } else {
               const _id = decoded._id;
               User.findOne({_id, token}, {username: 1, group: 1, _id: 1, livros: 1, nome: 1, telefone: 1, cpf: 1})
               .lean()
               .then(user => {
                  if(!user){
                     return res.status(400).json({sucess: false, msg: 'Token não encontrado. Faça login'});
                  } else{
                     user.token = token;
                     req.user = user;
                     next();
                  }
               })
               .catch(error => {
                  return res.status(400).json({sucess: false, msg: 'Token inválido!', error: error.message});
               });
            }
         });
      } else 
         return res.status(400).json({sucess: false, msg: 'Necessário token para prosseguir!'});
   },

   groupVerify: (role) => {
      return (req, res, next) => {
         if(role != null && role.includes(req.user.group))
            next();
         else
            res.status(400).json({msg: 'Usuário não tem acesso a rota!'});
      }
   }
}