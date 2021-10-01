import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import style from './account.module.css';

const Account = () => {

  const username = useSelector( state => state.auth.user.user.name )
  const email = useSelector( state => state.auth.user.user.email )

  if(!username) return null
  if(!email) return null

  return (
    <div className={style.accountContainer}>
      <div className={style.accountNavbar}>
        <Navbar />
      </div>
      <div className={style.accountContent}>
        <div className={style.accountContentTitle}>
          <h1>Tus datos personales</h1>
        </div>
        <div className={style.accountContentActions}>
          <h2>Nombre : <span>{username}</span></h2>
          <h2>Email : <span>{email}</span></h2>
          <button>Cambiar Email</button>
          <button>Cambiar contraseña</button>
          <button>Eliminar cuenta</button>
        </div>
      </div>
    </div>
  );
}
 
export default Account;