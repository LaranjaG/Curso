var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Importar biblioteca body-parse
var bodyParses = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Banco de dados
const dbConnection = require('./config/database')();


// app.use((req, res, next) =>{
//    console.log(`Tempo de requisição ${Date.now()}`);
//    next();
// });

//Configuração de Rotas
var loginsRouter = require('./routes/logins');
var usersRouter = require('./routes/users');
var livrosRouter = require('./routes/livros');

app.use('/', loginsRouter);
app.use('/users', usersRouter);
app.use('/livros', livrosRouter);

//Trata o erro 404
app.use((req, res, next) => { //Not found
   let err = new Error('Nicht gefunden');
   err.status = 404;
   next(err);
});

//erro de produção
//nenhum usuário encontrado 
app.use((erro, req, res, next) => {
   return res.status(erro.status || 500)
   .json({
      mensage: erro.mensage,
      error: erro
   });
});

//erro de desenvolvimento
//vai printar rastreamento de pilha 
if(app.get('env') === 'developement'){
   app.use((erro, req, res, next) => {
      res.status(erro.status || 500).json({
         mensage: errp.mensage,
         error: erro
      });
   });
}

module.exports = app;