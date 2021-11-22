import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asigandoID } from '../../redux/actions/moviesAction';
import { peliculaFavorita, misFavoritas } from '../../redux/actions/favoritesAction';
import style from './movies.module.css';

const SingularMovie = ({ oneMovie }) => {

  const { Title, Poster, Year, imdbID } = oneMovie;
  const userID = useSelector( state => state.auth.user.user._id )
  const favMovies = useSelector( state => state.favorites.favoritesMovies )
  const history = useHistory();

  const dispatch = useDispatch();
  const setID = (movieID) => dispatch( asigandoID(movieID) )
  const misPeliculas = (info) => dispatch( misFavoritas(info) )

  const redireccion = (title) => {
    history.push(`/viewmovie/${title}`)
    setID(imdbID)
  }
  const agregarPelicula = (info) => dispatch( peliculaFavorita(info) )

  const onSubmit = async e => {
    e.preventDefault()
    try {
      await agregarPelicula({ Title, Poster, imdbID, userID })
      misPeliculas(userID)
    } catch (error) {
      
    }
  }

  const [favorite, setFavorite] = useState(false)

  const distincionPeliculas = (arr, idMovie) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].movieID === idMovie) {
        setFavorite(true)
      }
    }
  }

  useEffect(() => {
    distincionPeliculas(favMovies, imdbID);
    // eslint-disable-next-line
  }, [favMovies])

  return (
    <div className={style.singularMovie}>
      <div className={style.singularTitle}>
        <h1>{Title} <span>{Year}</span></h1>
      </div>
      <div className={style.singularImg}>
        {/* eslint-disable-next-line */}
        <a onClick={() => redireccion(Title)}><img src={Poster} alt='movie poster' /></a>
      </div>
      <div className={style.singularOptions}>
        <form onSubmit={onSubmit}>
        {favorite ? <button disabled className={style.heartButton}
        > <i className="fas fa-heart"></i> </button>
        : <button
          className={style.noHeartButton} type='submit'> <i className="far fa-heart"></i> </button>}
        </form>
      </div>
    </div>
  );
}
 
export default SingularMovie;