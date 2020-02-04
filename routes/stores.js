const express = require('express');
const router = express.Router();
const { getStores } = require('../controllers/stores');

//Routes
router.route('/').get(getStores);

module.exports = router;
