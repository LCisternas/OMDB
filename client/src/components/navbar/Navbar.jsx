import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buscarPelicula } from '../../redux/actions/moviesAction';
import { logout } from '../../redux/actions/authAction';
import { misFavoritas, logoutMovies } from '../../redux/actions/favoritesAction';
import Swal from 'sweetalert2';
import style from './navbar.module.css';

const Navbar = () => {

  const dispatch = useDispatch();
  const buscandoPelicula = (pelicula) => dispatch( buscarPelicula(pelicula) )
  const misPeliculas = (info) => dispatch( misFavoritas(info) )
  const user_id = useSelector( state => state.auth.user.user._id )
  const cerrarSesion = () => dispatch( logout() )
  const cerrarSesionMovies = () => dispatch( logoutMovies() )
  const [nombrePelicula, setNombre] = useState('');
  const history = useHistory();

  const onSubmitPelicula = e => {
    e.preventDefault()
    buscandoPelicula(nombrePelicula)
    history.push('/principal')
  }
  const confirmarLogOut = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      confirmButtonText: 'Yes, sure',
      showCancelButton: true
    }).then((result) => {
      if(result.isConfirmed) {
        cerrarSesion()
        logoutMovies()
        history.push('/')
      }
    })
  }

  const consultandoPeliculas = () => {
    misPeliculas(user_id)
  }

  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLogo}>
        <Link to='/principal'><h1>OMDB</h1></Link>
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
        <Link to='/settings'><i className="far fa-user-circle"></i> </Link>
        <Link to='/favorites'
          onClick={() => consultandoPeliculas()}
        ><i className="fas fa-heart"></i></Link>
        <button
          type='button'
          onClick={() => confirmarLogOut()}
        ><i className="fas fa-sign-out-alt"></i></button>
      </div>
    </div>
  );
}
 
export default Navbar;