/* Middleware que verifica la autenticacion del usuario */
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if(!token) {
    return res.status(401).json({ msg: 'NO TOKEN, PERMISSION DENIED' });
  }
  try {
    /* Verificamos que el token este correctamente firmado */
    const encryption = jwt.verify(token, process.env.SECRET_WORD);
    req.user = encryption.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Permission denied' })
  }
}