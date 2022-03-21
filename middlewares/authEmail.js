// utilizando regex para validar email - https://www.w3resource.com/javascript/form/email-validation.php

const authEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email === undefined || email === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (emailRegex.test(email) === false) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = authEmail;