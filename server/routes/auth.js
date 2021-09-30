const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { usuarioCorrecto, usuarioAutenticado } = require('../controllers/authControllers');

router.get('/', auth, usuarioCorrecto);
router.post('/', usuarioAutenticado);

module.exports = router;