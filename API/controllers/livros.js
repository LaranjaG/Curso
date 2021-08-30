const Livro = require('../models/Livro');
const mongoose = require('mongoose');

/*
 * 200 - deu tudo certo!
 * 400 - erro no app
 * 500 - erro ao tentar fazer alguma das operações de CRUD 
 * 600 - ID inválido ou dado inválido
 * 700 - o getById aceita um id q n ta no banco
 */

module.exports = {
   getAllLivros: (req, res, next) => {
      Livro.find()
      .then(livros =>{
         return res.status(200).json(livros);
      })
      .catch(error => {
         return res.status(500).json({msg: "Fehler beim Abrufen von Büchern!", error: error.message});
      });
   }, 

   getLivroById: (req, res, next) => {      
      const idLivro = req.params.id;
      
      //ID não válido!
      if(!mongoose.Types.ObjectId.isValid(idLivro)) 
         return res.status(600).json({mgs: "Ausweis nicht gültig!"});

      Livro.findById(idLivro).
      then(livro =>{
         if(livro != null){
            return res.status(200).json(livro);
         }

         return res.status(700).json({mgs: "Benutzer gelöscht!"}); 
      })
      .catch(error =>{
         return res.status(500).json({mgs: "Buch nicht gefunden!",  error: error.message});
      });
   },

   getLivroByIsbn: (req, res, next) => {      
      const isbn = req.params.isbn;

      //Código isbn inválido!
      if(!(/^(\d{3}-\d{10})$/.test(isbn))) 
         return res.status(600).json({mgs: "Ungültiger isbn-Code!"});

      Livro.findOne({isbn: isbn}).
      then(livro =>{
         if(livro != null){
            return res.status(200).json(livro);
         }

         return res.status(700).json({mgs: "Buch nicht gefunden!"}); 
      })
      .catch(error =>{
         return res.status(500).json({mgs: "Buch nicht gefunden!",  error: error.message});
      });
   },

   getLivrosByTitulo: (req, res, next) => {      
      const titulo = req.params.titulo;
      
      //titulo vazio
      if(!titulo) 
         return res.status(600).json({mgs: "Leerer Name!"});

      Livro.find({
         $or:[
            {"titulo": {'$regex' : titulo, '$options' : 'i'}},
            {"subTitulo": {'$regex' : titulo, '$options' : 'i'}}
         ]
      })
      .then(livros =>{
         if(livros != null){
            return res.status(200).json(livros);
         }

         return res.status(700).json({mgs: "Buch nicht gefunden!"}); 
      })
      .catch(error =>{
         return res.status(500).json({mgs: "Buch nicht gefunden!",  error: error.message});
      });
   },

   addLivro: (req, res, next) => {
      const newLivro = new Livro(req.body);

      newLivro.save()
      .then(savedLivro => { 
         return res.status(201).json({msg: "Buch hinzugefügt!", livro: savedLivro});
      })
      .catch(error =>{
         return res.status(500).json({msg: "Fehler beim Speichern des Buches!", error: error.message});
      });
   },

   updateLivro: (req, res, next) => {
      const idLivro = req.params.id;

      if(!mongoose.Types.ObjectId.isValid(idLivro)) 
         return res.status(600).json({mgs: "Ausweis nicht gültig!"});

      /*
       * O runValidators permite que a verificação seja executada, 
       * sendo assim ele usa a verificação do schema antes de atualizar os dados
       */

      Livro.findOneAndUpdate({_id: idLivro}, {$set: req.body}, {new: true, runValidators: true})
      .then(livroUpdate =>{
         if(livroUpdate != null)
            return res.status(200).json({msg: `Aktualisiertes Buch!!`, livro: livroUpdate});

            return res.status(700).json({msg: `Fehler beim Aktualisieren des Buches! ID nicht gefunden`});
      })
      .catch(error =>{
         return res.status(500).json({msg: `Fehler beim Aktualisieren des Buches! `, error: error.message});
      });
   },

   deleteLivro: (req, res, next) =>{
      const idLivro = req.params.id;

      if(!mongoose.Types.ObjectId.isValid(idLivro)) 
         return res.status(600).json({mgs: "Ausweis nicht gültig!"});

      Livro.findByIdAndDelete(idLivro)
      .then(livroDelete =>{
         if(livroDelete != null)
            return res.status(200).json({msg: `Gelöschtes Buch!`, livro: livroDelete});
         
         return res.status(700).json({msg: `Benutzer erfolgreich entfernt!`});
      }).catch(error =>{
         return res.status(500).json({msg: `Fehler beim Löschen des Buches!`, error: error});
      });
   },
}