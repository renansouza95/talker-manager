const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === undefined || authorization === '') {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length < 16 || typeof authorization !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = authToken;

// 025f87e174de219b