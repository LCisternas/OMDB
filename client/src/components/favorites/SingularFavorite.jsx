import React from 'react';
import { useDispatch } from 'react-redux';
import style from './favorites.module.css';
import { eliminandoPelicula } from '../../redux/actions/favoritesAction';
import Swal from 'sweetalert2'

const SingularFavorite = ({ movie }) => {
  
  const { title, poster, movieID } = movie;

  const dispatch = useDispatch()
  const eliminarPelicula = (info) => dispatch( eliminandoPelicula(info) )

  const onSubmit = e => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure you want to remove it from your favorites?',
      confirmButtonText: 'Yes!',
      showCancelButton: true
    }).then((result) => {
      if(result.isConfirmed) {
        eliminarPelicula(movieID)
      }
    })
  } 

  return (
    <div className={style.favMovieContainer}>
      <div className={style.favMovieInfo}>
        <img src={poster} alt="movie poster" />
        <h1>{ title }</h1>
      </div>
      <div className={style.favMovieActions}>
        <form onSubmit={onSubmit}>
          <button
            type='submit'
          > <i className="fas fa-heart-broken"></i> </button>
        </form>
      </div>
    </div>
  );
}
 
export default SingularFavorite;