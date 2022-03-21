const fs = require('fs').promises;

async function getTalkerById(req, res) {
  const { id } = req.params;
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const obj = JSON.parse(data);
    const talker = obj.find((e) => e.id === parseInt(id, 2));
    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(talker);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = getTalkerById;