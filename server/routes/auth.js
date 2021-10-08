const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { usuarioCorrecto, usuarioAutenticado, actualizarEmail } = require('../controllers/authControllers');

router.get('/', auth, usuarioCorrecto);
router.post('/', usuarioAutenticado);
router.put('/', actualizarEmail)

module.exports = router;