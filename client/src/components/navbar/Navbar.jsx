import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { buscarPelicula } from '../../redux/actions/moviesAction';
import style from './navbar.module.css';

const Navbar = () => {

  const dispatch = useDispatch();
  const buscandoPelicula = (pelicula) => dispatch( buscarPelicula(pelicula) )
  const [nombrePelicula, setNombre] = useState('');
  
  const peliculaEspecifica = useSelector( state => state.movies.peliculaEspecifica );
  
  const onSubmitPelicula = e => {
    e.preventDefault()
    buscandoPelicula(nombrePelicula)
  }

  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLogo}>
        <h1>OMDB</h1>
      </div>
      <div className={style.navbarSearch}>
        <form onSubmit={onSubmitPelicula}>
          <input 
            placeholder='Busca una pelicula'
            name='titulo'
            value={nombrePelicula}
            onChange={(e) => setNombre(e.target.value)}
          />
          <button
            type='submit'
          ><i className="fas fa-search"></i></button>
        </form>
      </div>
      <div className={style.navbarAccount}>
        <Link to='!#'> <i className="far fa-user-circle"></i> </Link>
        <button><i className="fas fa-sign-out-alt"></i></button>
      </div>
    </div>
  );
}
 
export default Navbar;