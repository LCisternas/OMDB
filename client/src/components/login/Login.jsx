import React from 'react';
import { Link } from 'react-router-dom';
import style from './login.module.css';

const Login = () => {

  return (
    <div className={style.loginContainer}>
        <form>
          <div className={style.loginTitle}>
            <h2>Inicia sesión</h2>
          </div>
          <div className={style.loginInput}>
            <label>Correo electronico</label>
            <input 
              type='text'
            />
          </div>
          <div className={style.loginInput}>
            <label>Contraseña</label>
            <input 
              type='password'
            />
          </div>
          <div className={style.loginButton}>
            <button>Iniciar sesión</button>
            <Link to='/register'>¿No tienes cuenta? Haz click aquí</Link>
          </div>
        </form>
    </div>
  );
}
 
export default Login;