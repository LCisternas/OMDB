import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarLogo}>
        <h1>OMDB</h1>
      </div>
      <div className={style.navbarSearch}>
        <form>
          <input 
            placeholder='Busca una pelicula'
          />
          <button><i class="fas fa-search"></i></button>
        </form>
      </div>
      <div className={style.navbarAccount}>
        <Link> <i class="far fa-user-circle"></i> </Link>
        <button><i class="fas fa-sign-out-alt"></i></button>
      </div>
    </div>
  );
}
 
export default Navbar;