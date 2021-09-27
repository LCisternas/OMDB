const User = require('../models/User');
const bcryptjs = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const nuevoUsuario = async (req, res) => {
  /* Validacion y lectura de errores */
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { email, password } = req.body;

  try {
    /* Comprobando que no exista ya una cuenta con el mismo email */
    let user = await User.findOne({ email });
    if(user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    /* Si el usuario no existe lo creo */
    user = new User(req.body);
    /* Encriptando password */
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);
    /* Guardando nuevo usuario */
    await user.save();

    /* TOKEN JWT */
    const payload = {
      user: {
        id: user.id
      }
    }
    /* Firmando el token */
    jwt.sign(payload, process.env.SECRET_WORD, {
      expiresIn: '3d'
    }, (error, token) => {
      if(error) throw error
      /* Si no hay error enviamos el token */
      res.json({ token })
    });

  } catch (error) {
    console.log(error);
    res.status(400).send('ERROR!!!')
  }
  /* Comprabando que no exista ya una cuenta con el mismo email */
}






module.exports = {
  nuevoUsuario
}