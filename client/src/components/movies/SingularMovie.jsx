import React from 'react';
import style from './movies.module.css';

const SingularMovie = ({ oneMovie }) => {

  const { Title, Poster, Year } = oneMovie;

  return (
    <div className={style.singularMovie}>
      <div className={style.singularTitle}>
        <h1>{Title} <span>{Year}</span></h1>
      </div>
      <div className={style.singularImg}>
        <img src={Poster} />
      </div>
      <div className={style.singularOptions}>
        <button
        >Agregar a favoritos</button>
      </div>
    </div>
  );
}
 
export default SingularMovie;