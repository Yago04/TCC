const dynamoDB = require('../config/dynamo');

const USERS_TABLE = 'Users';

const UserModel = {
  // Função para obter um usuário por e-mail
  getUserByEmail: async (email) => {
    const params = {
      TableName: USERS_TABLE,
      Key: { email }
    };
    return await dynamoDB.get(params).promise();
  },

  // Função para criar um novo usuário
  createUser: async (userData) => {
    const params = {
      TableName: USERS_TABLE,
      Item: userData
    };
    return await dynamoDB.put(params).promise();
  }
};

module.exports = UserModel;
