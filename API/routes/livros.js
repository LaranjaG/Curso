const express = require('express');
const router = express.Router();
const auth = require('../lib/auth.js');
const controller = require('../controllers/livros');

//get
router.get('/', controller.getAllLivros);
router.get('/:id', controller.getLivroById);
router.get('/isbn/:isbn', controller.getLivroByIsbn);
router.get('/titulo/:titulo', controller.getLivrosByTitulo);

//post
router.post('/', auth.jwtVerify, auth.groupVerify('admin'), controller.addLivro);

//put
router.put('/:id', auth.jwtVerify, auth.groupVerify('admin'), controller.updateLivro);

//delete
router.delete('/:id', auth.jwtVerify, auth.groupVerify('admin'), controller.deleteLivro);

module.exports = router;