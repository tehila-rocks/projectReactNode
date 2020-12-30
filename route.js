const express = require('express');
const router = express.Router();

const {
    getCountries,
    submitPerson
} = require('../controllers/controller');

router.get('/', getCountries);
router.post('/', submitPerson);

module.exports = router;