const path = require('path')
const generator = require('./middleware/generator')

const createCsv = async(req, res) => {
    await generator(req.body.amount);
    res.download(path.join(__dirname, '..', 'ArchivosGenerados.csv'))
}

const getHtml = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
}

module.exports = { createCsv, getHtml }