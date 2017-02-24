
const express = require('express');
const elastic = require('../elasticsearch');
const router = express.Router();


router.get('/suggest/:input', (req, res, next) => {
  elastic.getSuggestions(req.params.input)
    .then((result) => { res.json(result) });
});

router.post('/', (req, res, next) => {
  elastic.addDocument(req.body)
    .then((result) => { res.json(result) });
});

module.exports = router;
