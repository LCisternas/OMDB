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
    let user = await User.findOne({ email });
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
    console.log('error desde el controlador', error)
  }
}

const actualizarEmail = async (req, res) => {
  const { Email, userID } = req.body;
  try {
    let user = await User.findById(userID);
    const newEmail = {};
    newEmail.email = Email;
    user = await User.findOneAndUpdate(
      {_id: userID},
      newEmail,
      {new: true}
    )
    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
  }
}

const actualizarContraseña = async (req, res) => {
  const { Password, userID } = req.body;
  try {
    let user = await User.findById(userID);
    const newPassword = {};
    const salt = await bcryptjs.genSalt(10);
    newPassword.password = await bcryptjs.hash(Password, salt);
    user = await User.findOneAndUpdate(
      {_id: userID},
      newPassword,
      {new: true}
    )
    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
  }
}

const eliminarCuenta = async (req, res) => {
  try {
    await User.findOneAndRemove(
      { email: req.query.info }
    )
    res.json({ msg: 'delete' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  usuarioCorrecto,
  usuarioAutenticado,
  actualizarEmail,
  actualizarContraseña,
  eliminarCuenta
}