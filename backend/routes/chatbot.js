const express = require('express');
const router = express.Router();
const { getSavingsTip } = require('../controllers/chatbotController');

router.route('/').post(getSavingsTip);

module.exports = router;