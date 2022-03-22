const fs = require('fs').promises;

async function searchTalker(req, res) {
  const { q } = req.query;
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const obj = JSON.parse(data);
    const finder = obj.filter((e) => e.name.includes(q));
    if (!finder) return res.status(200).send([]);
    res.status(200).json(finder);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = searchTalker;