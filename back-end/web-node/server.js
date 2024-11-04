const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const app = express();
const port = 3000;
const CLIENT_ID = "255622061182-t1knb0s2oqf5bc94ker1a7rpa96qknfe.apps.googleusercontent.com";  

const client = new OAuth2Client(CLIENT_ID);


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index2.html');  
});


app.post('/auth/google', async (req, res) => {
    const token = req.body.token;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();

        const userId = payload['sub'];
        const email = payload['email'];
        const name = payload['name'];

        console.log(`Usuário logado: ${name} (${email})`);
        res.status(200).json({ message: 'Login bem-sucedido', userId, email, name });
    } catch (error) {
        console.error('Erro na autenticação:', error);
        res.status(401).json({ message: 'Login falhou', error });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
