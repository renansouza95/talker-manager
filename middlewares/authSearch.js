const fs = require('fs').promises;

const authSearch = async (req, res, next) => {
  const { q } = req.query;
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const obj = JSON.parse(data);
    if (!q || q === '') return res.status(200).json(obj);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
  next();
};

module.exports = authSearch;