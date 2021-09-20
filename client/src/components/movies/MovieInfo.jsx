import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './movies.module.css';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const MovieInfo = () => {

  const movieID = useSelector( state => state.movies.idPelicula );
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if(movieID !== null) {
      const consultaMovieData = async () => {
        const API = `http://www.omdbapi.com/?i=${movieID}&apikey=c4ff2a47`
        const result = await axios.get(API);
        setMovieData(result.data)
      }
      consultaMovieData()
    }
  }, [movieID])

  if(!movieData) return null

  const { Title, Poster, Plot, Released, Runtime, Director, imdbRating, Genre } = movieData;

  return (
    <div className={style.movieDataContainer}>
      <div className={style.movieDataNavbar}>
        <Navbar />
      </div>
      <div className={style.movieGeneralData}>
        <div className={style.moviePoster}>
          <img src={Poster} />
        </div>
        <div className={style.movieInfo}>
          <div className={style.movieTitle}>
            <h1>{ Title }</h1><span>{Genre}</span>
          </div>
          <div className={style.movieDescription}>
            <p>{ Plot }</p>
          </div>
          <div className={style.movieDetails}>
            <span>Directed by :</span>{ Director }<p></p>
            <span>Duration :</span><p> {Runtime} </p>
            <span>Released :</span><p>{ Released }</p>
            <span>Rating :</span><p>{ imdbRating }</p>
          </div> 
        </div>
      </div>
    </div>
  );
}
 
export default MovieInfo;