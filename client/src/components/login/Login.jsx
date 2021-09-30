import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import style from './login.module.css';
import Swal from 'sweetalert2';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault()
    if(email === '' || password === '') {
      Swal.fire({
        icon:'error',
        title: 'Incomplete fields'
      })
    }
  }

  return (
    <div className={style.loginContainer}>
        <form onSubmit={onSubmit}>
          <div className={style.loginTitle}>
            <h2>Inicia sesión</h2>
          </div>
          <div className={style.loginInput}>
            <label>Correo electronico</label>
            <input 
              type='text'
              name='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className={style.loginInput}>
            <label>Contraseña</label>
            <input 
              type='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className={style.loginButton}>
            <button
              type='submit'
            >Iniciar sesión</button>
            <Link to='/register'>¿No tienes cuenta? Haz click aquí</Link>
          </div>
        </form>
    </div>
  );
}
 
export default Login;