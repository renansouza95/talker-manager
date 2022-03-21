const fs = require('fs').promises;

const validateName = (name) => {
  if (name === undefined || name === '') return 0;
  if (name.length < 3) return 1;
}

async function addTalker(req, res) {
  const { name, age, talk } = req.body;

  if (validateName(name) === 0) {
    return res.status(401).json({ message: 'O campo "name" é obrigatório' });
  }
  if (validateName(name) === 1) {
    return
  }
  const newTalker = { name, age, talk };
  const data = await fs.readFile('./talker.json', 'utf-8');
  const obj = data.push(newTalker);
  const talker = JSON.parse(obj);
  fs.writeFile('talker.json', JSON.stringify(talker));
  res.status(201).json(talker);
}

module.exports = addTalker;