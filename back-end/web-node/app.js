const express = require('express');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json()); // Middleware para JSON

// Servir arquivos estáticos da pasta 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Usa as rotas de usuário
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
