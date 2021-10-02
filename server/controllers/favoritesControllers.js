const User = require('../models/User');
const Favorite = require('../models/Favorite');

const agregarPelicula = async (req, res) => {

  const { Title, Poster, imdbID, userID } = req.body;

  try {
    const newFavMovie = new Favorite({
      title: Title,
      poster: Poster,
      movieID: imdbID,
      user_id: userID
    })
    await newFavMovie.save()
    res.json({ newFavMovie })
  } catch (error) {
    console.log(error)
    res.status(500).send('ERROR!!!')
  } 
}

const obtenerPeliculas = async (req, res) => {

  const { userID } = req.body

  try {
    const listaPeliculas = await Favorite.find({ userID });
    res.json({ listaPeliculas })
  } catch (error) {
    console.log(error)
    res.status(500).send('ERROR!!!')
  }
}

module.exports = {
  agregarPelicula,
  obtenerPeliculas
}