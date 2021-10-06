const User = require('../models/User');
const Favorite = require('../models/Favorite');

const agregarPelicula = async (req, res) => {

  const { Title, Poster, imdbID, userID } = req.body;

  try {
    const newFavMovie = await new Favorite({
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

  try {
    const listaPeliculas = await Favorite.find({user_id: req.query.info})
    res.json({ listaPeliculas })
  } catch (error) {
    console.log(error)
    res.status(500)
  }

}

module.exports = {
  agregarPelicula,
  obtenerPeliculas
}