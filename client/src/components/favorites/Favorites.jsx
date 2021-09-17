import React from 'react';
import Navbar from '../navbar/Navbar';
import style from './favorites.module.css';

const Favorites = () => {
  return (
    <div className={style.favoritesContainer}>
      <div className={style.favoritesNavbar}>
        <Navbar />
      </div>
      <div className={style.favoritesContent}>
        <h1> Tus Peliculas favoritas</h1>
      </div>
    </div>
  );
}
 
export default Favorites;