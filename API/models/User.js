const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Livro = require('./Livro');

let userSchema = new Schema({
   nome: {
      type: String, 
      required: [true, `Campo nome obrigatório!`]
   },
   cpf:{
      type: String, 
      required: [true, `Campo CPF obrigatório!`], 
      unique: true,
      match: /^(\d{3}\.\d{3}\.\d{3}\-\d{2})$/
   },
   telefone: {
      type: String, 
      required: false, 
      default: '',
      validate: {
         validator: (valor) =>{
            return /^((([\(][0]?[\d]{2}[\)])|([0]?[\d]{2}))?[\s]?)?[9]?[\d]{4}[\-]?[\d]{4}|()$/.test(valor);
         },
         menssage: props => `${props.value} não é um telefone válido!`
      }
   },
   livros: {
      type: [String],
      default: [],
   },
   //
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true
   },
   password: {
      type: String,
      required: true,
      minLength: 7
   },
   token: {
      type: String,
   },
   group: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user' 
   }   
});

userSchema.pre('save', function(next){
   const usuario = this;

   if(usuario.isModified('password') || usuario.isNew){
      bcrypt.hash(usuario.password, 8)
      .then(hash => {
         usuario.password = hash;

         next();
      })
      .catch(error => {
         next(error);
      });
   } else
      return next();
});

userSchema.method('hashSenha', async function(password){
   return await bcrypt.hash(password, 8);
});

userSchema.method('verifyBooks', async function(){
   const books = this.livros;

   if(books){
      //Verifica se os livros estão no bd
      for(const _id of books) {
         if(mongoose.Types.ObjectId.isValid(_id)){ //Verifica se o dado do livro ta em formato de id
            let livro = await Livro.findOne({_id});   //verifica se o livro está cadastrado

            if(!livro){
               return 0;
            } else{
               //Verifica se livro é duplicado
               let counter = 0;

               for(const _idAtual of books){
                  if(_id === _idAtual)
                     counter ++;
               }

               if(counter > 1) return 2;
            }
         } else{
            return 0;
         }   
      }

      return 1;
   } 

});

userSchema.method('comparePassword', function(password, cb) {
   bcrypt.compare(password, this.password, (error, isMatch) => {
      if(error)
         return cb(error);

      else 
         cb(null, isMatch);
   })
}); 

userSchema.method('generateAuthToken', function() {
   return new Promise((sucess, reject) => {
      const usuario = this;
      const token = jwt.sign({_id: usuario._id}, process.env.TOKEN, {expiresIn: '7d'});

      usuario.token = token;

      usuario.save()
      .then(user =>{
         return sucess({sucess: true, user: user});
      })
      .catch(error =>{
         return reject({sucess: false, token: null, err: error.message});
      });
   });
});

module.exports = mongoose.model('User', userSchema);