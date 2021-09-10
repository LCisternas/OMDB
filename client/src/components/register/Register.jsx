import React from 'react';
import { Link } from 'react-router-dom';
import style from './register.module.css';

const Register = () => {
  return (
    <div className={style.registerContainer}>
        <form>
          <div className={style.registerTitle}>
            <h2>Registrate</h2>
          </div>
          <div className={style.registerInput}>
            <label>Nombre</label>
            <input 
              type='text'
            />
          </div>
          <div className={style.registerInput}>
            <label>Apellido</label>
            <input 
              type='text'
            />
          </div>
          <div className={style.registerInput}>
            <label>Correo electronico</label>
            <input 
              type='text'
            />
          </div>
          <div className={style.registerInput}>
            <label>Contraseña</label>
            <input 
              type='password'
            />
          </div>
          <div className={style.registerInput}>
            <label>Confirma la contraseña</label>
            <input 
              type='password'
            />
          </div>
          <div className={style.registerButton}>
            <button>Registrarse</button>
            <Link to='/'>¿Ya tienes una cuenta? Haz click aquí</Link>
          </div>
        </form>
    </div>
  );
}
 
export default Register;