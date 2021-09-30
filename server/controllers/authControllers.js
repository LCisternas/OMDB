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

const usuarioAutenticado = async (req, res) => {
  /* Comprobacion de errores */
  const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
  try {
    /* Comprobacion de existencia de usuario en la BD */
    let user = User.findOne({ email });
    if(!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    /* Comprobacion de password correcta */
    const rightPass = await bcryptjs.compare(password, user.password);
    if(!rightPass) {
      return res.status(400).json({ msg: 'Incorrect Password' })
    }
    /* JWT SECTION */
    const payload = {
      user: {
        id: user.id
      }
    }
    /* Firmando el token */
    jwt.sign(payload, process.env.SECRET_WORD, {
      expiresIn: '1d'
    }, (error, token) => {
      if(error) throw error;
      res.json({ token })
    });
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  usuarioCorrecto,
  usuarioAutenticado
}