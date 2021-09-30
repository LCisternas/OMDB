const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { usuarioCorrecto } = require('../controllers/authControllers');

router.get('/', auth, usuarioCorrecto);
router.post('/')

module.exports = router;