const User = require('../models/User');
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

/* Verifico que sea los datos del usuario correcto */
const usuarioCorrecto = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'ERROR!' })
  }
}



module.exports = {
  usuarioCorrecto
}