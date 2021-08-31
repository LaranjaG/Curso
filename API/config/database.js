require('dotenv').config({path: 'variables.env'}); //Requisição das variaveis de ambiente
const mongoose = require('mongoose');

//Função de conexão
module.exports = () => {
   const url = process.env.DB || 'mongodb://localhost:27017/aulaAPIRest';
   const options = {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true, 
      useFindAndModify: false,
      poolSize: 10,
   }

   mongoose.connect(url, options);

   mongoose.connection.once('open', () =>{
      console.log('\x1b[36m%s\x1b[0m', `[Mongoose] Conectado em ${url}`);
   });

   mongoose.connection.on('erros', (error) =>{
      console.log('\x1b[36m%s\x1b[0m', `[Mongoose] Erro na conexão: ${error}`);
   });
}