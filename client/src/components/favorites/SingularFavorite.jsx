import React from 'react';
import style from './favorites.module.css';

const SingularFavorite = ({ movie }) => {
  
  const { title, poster, movieID } = movie;

  return (
    <div className={style.favMovieContainer}>
      <div className={style.favMovieInfo}>
        <img src={poster} />
        <h1>{ title }</h1>
      </div>
      <div className={style.favMovieActions}>
        <form>
          <button
            type='submit'
          > <i className="fas fa-heart-broken"></i> </button>
        </form>
      </div>
    </div>
  );
}
 
export default SingularFavorite;