// utilizando crypto para gerar o token aleatorio - https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// utilizando regex para validar email - https://www.w3resource.com/javascript/form/email-validation.php

const crypto = require('crypto');

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email === undefined || email === '') {
    return 0;
  }
  if (!emailRegex.test(email)) {
    return 1;
  }
};

const validatePassword = (password) => {
  if (password === undefined || password === '') return 0;
  if (password.length < 6) return 1;
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (validateEmail(email) === 0) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (validateEmail(email) === 1) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (validatePassword(password) === 0) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (validatePassword(password) === 1) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  const id = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token: id });
};

module.exports = login;