const express = require('express');
const router = express.Router();

const { agregarPelicula, obtenerPeliculas } = require('../controllers/favoritesControllers');

router.post('/', agregarPelicula);
router.get('/', obtenerPeliculas);

module.exports = router;