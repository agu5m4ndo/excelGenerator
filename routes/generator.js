const express = require('express');
const router = express.Router();

const { createCsv, getHtml } = require('../controllers/generator');

router.route('/').post(createCsv) //generar descarga
router.route('/').get(getHtml); //mostrar html

module.exports = router;