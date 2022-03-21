const express = require('express');
const bodyParser = require('body-parser');
const getTalker = require('./middlewares/getTalker');
const getTalkerById = require('./middlewares/getTalkerById');
const login = require('./middlewares/login');
const authEmail = require('./middlewares/authEmail');
const authPW = require('./middlewares/authPW');
const authToken = require('./middlewares/authToken');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getTalker);
app.get('/talker/:id', getTalkerById);
app.post('/login', authEmail, authPW, login);
app.post('/talker', authToken);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
