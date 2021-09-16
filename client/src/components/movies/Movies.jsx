import React, { useEffect } from 'react';
import style from './movies.module.css';
import Navbar from '../navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { cargaDePeliculasDefault } from '../../redux/actions/moviesAction'
import SingularMovie from './SingularMovie';

const Movies = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    // const cargaPaginaInicio = async () => {
    //   const cargarPeliculas = () => dispatch( cargaDePeliculasDefault() );
    //   await cargarPeliculas()
    // }
    // cargaPaginaInicio()
    const cargarPeliculas = () => dispatch( cargaDePeliculasDefault() );
    cargarPeliculas()
  }, [])

  const listadoPeliculas = useSelector( state => state.movies.peliculas )
  console.log(listadoPeliculas)

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