import React from 'react';
import Navbar from '../navbar/Navbar';
import style from './account.module.css';

const Account = () => {
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
          <h2>Nombre : <span>Lucas Cisternas</span></h2>
          <h2>Email : <span>lucas@gmail.com</span></h2>
          <button>Cambiar Email</button>
          <button>Cambiar contraseña</button>
          <button>Eliminar cuenta</button>
        </div>
      </div>
    </div>
  );
}
 
export default Account;