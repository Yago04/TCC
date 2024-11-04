const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel');
const AuthService = require('../services/authService');

const UserController = {
  // Método de registro de usuário
  register: async (req, res) => {
    const { firstName, lastName, email, phone, dob, password, username } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    try {
      // Verifica se o usuário já existe
      const existingUser = await UserModel.getUserByEmail(email);

      if (existingUser.Item) {
        return res.status(400).json({ error: 'Usuário já registrado' });
      }

      // Cria o hash da senha
      const passwordHash = await AuthService.hashPassword(password);

      // Cria o usuário no DynamoDB
      await UserModel.createUser({
        firstName,
        lastName,
        email,
        phone,
        dob,
        password: passwordHash,
        username
      });

      res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
  },

  // Método de login de usuário
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    try {
      // Busca o usuário no DynamoDB pelo e-mail
      const result = await UserModel.getUserByEmail(email);

      if (!result.Item) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }

      // Verifica se a senha é válida
      const isPasswordValid = await AuthService.comparePasswords(password, result.Item.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Senha incorreta' });
      }

      // Se a senha estiver correta, retorna uma resposta de sucesso
      res.json({ message: 'Login realizado com sucesso!' });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  }
};

module.exports = UserController;
