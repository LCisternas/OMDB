const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { nuevoUsuario } = require('../controllers/usersControllers');

router.post('/',
[
  check('name', 'Mandatory name').not().isEmpty(),
  check('email', 'Invalid Email').isEmail(),
  check('password', 'minimum 6 characters').isLength({ min:6 })
],
nuevoUsuario
)

module.exports = router;