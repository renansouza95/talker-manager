const fs = require('fs').promises;

async function getTalker(req, res) {
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const obj = JSON.parse(data);
    if (obj.length === 0) return res.status(200).json([]);
    res.status(200).json(obj);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = getTalker;