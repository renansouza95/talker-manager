const fs = require('fs').promises;

async function deleteTalker(req, res) {
  const { id } = req.params;
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const obj = JSON.parse(data);
    const newObj = obj.filter((e) => e.id !== Number(id));
    await fs.writeFile('./talker.json', JSON.stringify(newObj));
    res.status(204).end();
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = deleteTalker;