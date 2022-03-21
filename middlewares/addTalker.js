const fs = require('fs').promises;

async function addTalker(req, res) {
  const { name, age, talk } = req.body;
  const data = await fs.readFile('./talker.json', 'utf-8');
  const obj = JSON.parse(data);
  const newTalker = {
    id: obj.length + 1,
    name,
    age,
    talk,
  };
  obj.push(newTalker);
  await fs.writeFile('./talker.json', JSON.stringify(obj));
  res.status(201).json(newTalker);
}

module.exports = addTalker;