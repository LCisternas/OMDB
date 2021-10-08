const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { usuarioCorrecto, usuarioAutenticado, actualizarEmail, actualizarContraseña, eliminarCuenta } = require('../controllers/authControllers');

router.get('/', auth, usuarioCorrecto);
router.post('/', usuarioAutenticado);
router.put('/', actualizarEmail);
router.put('/pass', actualizarContraseña)
router.delete('/', eliminarCuenta)

module.exports = router;