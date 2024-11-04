require('dotenv').config(); // Carrega as variáveis do .env
const AWS = require('aws-sdk');

// Configura o DynamoDB com as variáveis de ambiente
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB;
