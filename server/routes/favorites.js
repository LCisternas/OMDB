const express = require('express');
const router = express.Router();

const { agregarPelicula, obtenerPeliculas, eliminarPelicula } = require('../controllers/favoritesControllers');

router.post('/', agregarPelicula);
router.get('/', obtenerPeliculas);
router.delete('/', eliminarPelicula)

module.exports = router;