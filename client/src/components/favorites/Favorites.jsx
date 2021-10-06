import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import SingularFavorite from './SingularFavorite';
import style from './favorites.module.css';

const Favorites = () => {

  const misPeliculas = useSelector( state => state.favorites.favoritesMovies );

  useEffect(() => {

  }, [misPeliculas])

  return (
    <div className={style.favoritesContainer}>
      <div className={style.favoritesNavbar}>
        <Navbar />
      </div>
      <div className={style.favoritesContent}>
        {misPeliculas.map(one => (
          <SingularFavorite 
            key={one._id}
            movie={one}
          />
        ))}
      </div>
    </div>
  );
}
 
export default Favorites;