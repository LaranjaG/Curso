const express = require('express');
const router = express.Router();
const auth = require('../lib/auth.js');
const controller = require('../controllers/login');

router.get('/listaLivros/', auth.jwtVerify, controller.listaLivros);
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.post('/logout', auth.jwtVerify, controller.logout);

/**
 * Alterações feitas nos usuários logado serão gerenciadas pela rota de login
 */
router.put('/editUser/', auth.jwtVerify, controller.editUser);
router.put('/editSenha/', auth.jwtVerify, controller.editSenhaUser);
router.put('/editListLivros/', auth.jwtVerify, controller.editList);
router.put('/addLivro/', auth.jwtVerify, controller.addItemList);
router.put('/deleteLivro/', auth.jwtVerify, controller.deleteItemList);
router.put('/deleteListLivros/', auth.jwtVerify, controller.deleteList);
router.delete('/deleteUser/', auth.jwtVerify, controller.deleteUser);
module.exports = router;