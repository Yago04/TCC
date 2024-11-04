    const express = require('express');
    const UserController = require('../controllers/userController');

    const router = express.Router();

    // Rota de registro de usuário
    router.post('/register', UserController.register);

    // Rota de login de usuário
    router.post('/login', UserController.login);

    module.exports = router;
