const crypto = require('crypto');

const login = (req, res) => {
  const id = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token: id });
};

module.exports = login;