const authAge = (req, res, next) => {
  const { age } = req.body;
  if (age === undefined || age === '') {
    return res.status(400).json({ message: 'O campo "age" é brigatório' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

module.exports = authAge;