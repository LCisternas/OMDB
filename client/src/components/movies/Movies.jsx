import React, { useEffect } from 'react';
import style from './movies.module.css';
import Navbar from '../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { cargaDePeliculasDefault, busquedaExitosa } from '../../redux/actions/moviesAction'
import { misFavoritas } from '../../redux/actions/favoritesAction';
import SingularMovie from './SingularMovie';
import axios from 'axios';

const Movies = () => {

  const dispatch = useDispatch();
  const enviarPelicula = (pelicula) => dispatch( busquedaExitosa(pelicula) )
  const cargarPeliculas = () => dispatch( cargaDePeliculasDefault() );
  const misPeliculas = () => dispatch( misFavoritas() )
  const peliculaEspecificada = useSelector( state => state.movies.peliculaEspecifica )
  const auth = useSelector( state => state.auth.autenticado )
  
  useEffect(() => {
    if(peliculaEspecificada !== '') {
      const buscarPelicula = async () => {
        try {
          const result = await axios.get(`http://www.omdbapi.com/?s=${peliculaEspecificada}&apikey=c4ff2a47`);
          enviarPelicula(result.data.Search)
        } catch (error) {
          console.log(error)
        }
      }
      buscarPelicula()
    }
    if(peliculaEspecificada === '') {
      if(auth) {
        const cargaDefault = async () => {
          try {
            await cargarPeliculas()
            misPeliculas()
          } catch (error) {
            console.log(error)
          }
        }
        cargaDefault()
      }
    }
    // eslint-disable-next-line
  }, [peliculaEspecificada])

  const listadoPeliculas = useSelector( state => state.movies.peliculas )

  return (
    <div className={style.principalContainer}>
      <div className={style.principalNavbar}>
        <Navbar />
      </div>
      <div className={style.principalMovies}>
        {listadoPeliculas.map(oneMovie => (
          <SingularMovie 
            key={oneMovie.imdbID}
            oneMovie={oneMovie}
          />
        ))}
      </div>
    </div>
  );
}
 
export default Movies;