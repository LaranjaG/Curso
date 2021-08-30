const express = require('express');
const router = express.Router();
const auth = require('../lib/auth.js');
const controller = require('../controllers/users');

/**
 * Todo acesso a rota base de usuário fica restrito a usuários do tipo admin, só permitindo ao usuário comum acesso as rotas de login
 */

//get
router.get('/', auth.jwtVerify, auth.groupVerify('admin'), controller.getAllUsers);
router.get('/:id', auth.jwtVerify, auth.groupVerify('admin'), controller.getUserById);
router.get('/cpf/:cpf', auth.jwtVerify, auth.groupVerify('admin'), controller.getUserByCpf);
router.get('/nome/:nome', auth.jwtVerify, auth.groupVerify('admin'), controller.getUsersByNome);
//post
router.post('/', auth.jwtVerify, auth.groupVerify('admin'), controller.addUser);
//put
router.put('/:id', auth.jwtVerify, auth.groupVerify('admin'), controller.updateUser);
//delete
router.delete('/:id', auth.jwtVerify, auth.groupVerify('admin'), controller.deleteUser);

module.exports = router;