const express = require('express');

const router = express();

const controller = require('../controllers/participant_controller')

router.post('/', (req, res) => controller.post(req, res));

module.exports = router;