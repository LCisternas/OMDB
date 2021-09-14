import React from 'react';
import style from './movies.module.css';
import Navbar from '../navbar/Navbar';

const Movies = () => {
  return (
    <div className={style.principalContainer}>
      <div className={style.principalNavbar}>
        <Navbar />
      </div>
      <div className={style.principalMovies}>
        <h1>Movies</h1>
      </div>
    </div>
  );
}
 
export default Movies;