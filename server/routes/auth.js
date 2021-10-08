const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { usuarioCorrecto, usuarioAutenticado, actualizarEmail, actualizarContraseña } = require('../controllers/authControllers');

router.get('/', auth, usuarioCorrecto);
router.post('/', usuarioAutenticado);
router.put('/', actualizarEmail);
router.put('/pass', actualizarContraseña)

module.exports = router;