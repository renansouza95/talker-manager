const fs = require('fs').promises;

async function editTalker(req, res) {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const talker = { name, age, id: Number(id), talk };
  if (!talk) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
   });
  }
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const obj = JSON.parse(data);
    const newObj = obj.map((e) => (e.id === Number(id) ? talker : e));
    await fs.writeFile('./talker.json', JSON.stringify(newObj));
    res.status(200).json(talker);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = editTalker;