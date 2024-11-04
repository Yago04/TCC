const bcrypt = require('bcryptjs');

const AuthService = {
  // Gera o hash da senha
  hashPassword: async (password) => {
    return await bcrypt.hash(password, 10);
  },

  // Compara a senha fornecida com o hash salvo
  comparePasswords: async (password, hash) => {
    return await bcrypt.compare(password, hash);
  }
};

module.exports = AuthService;
