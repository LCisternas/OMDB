import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, autenticacion } from '../../redux/actions/authAction';
import { misFavoritas } from '../../redux/actions/favoritesAction';
import style from './login.module.css';
import Swal from 'sweetalert2';

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory()
  const auth = () => dispatch( autenticacion() );
  const misPeliculas = (info) => dispatch( misFavoritas(info) )
  const usuarioConfimado = useSelector( state => state.auth.autenticado );
  const user_id = useSelector( state => state.auth.user.user._id )

  useEffect(() => {
    if(usuarioConfimado){
      history.push('/principal');
      misPeliculas(user_id)
    }
  }, [usuarioConfimado])

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user;
  const logueando = ( info ) => dispatch( login(info) )
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    if(email === '' || password === '') {
      Swal.fire({
        icon:'error',
        title: 'Incomplete fields'
      })
    }
    try {
      await logueando({ email, password });
      auth()
    } catch (error) {
      console.log(error)
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