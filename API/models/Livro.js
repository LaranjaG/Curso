/*
 * Meu tema é livro devido a minha falta de criatividade :)
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const livroSchema = new Schema({
   isbn: { // ISBN 13
      type: String,
      required: [true, `O campo ISBN é obrigatorio`],
      unique: true,
      match: /^(\d{3}-\d{10})$/
   },
   titulo: {
      type: String, 
      required: [true, `Campo título obrigatório!`]
   },
   subTitulo: {
      type: String, 
      required: false,
      default: ''
   },
   autor:{
      type: String, 
      required: [true, `Campo autor obrigatório!`]
   },
   numeroPaginas: {
      type: Number,
      required: [true, `Campo número de páginas obrigatório!`]
   },
   idioma:{
      type: String,
      required: false,
      default: '',
   },
   sinopse: {
      type: String, 
      required: false, 
      default: ''
   },
});

module.exports = mongoose.model('Livro', livroSchema);