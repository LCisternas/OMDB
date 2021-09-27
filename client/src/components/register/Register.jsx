import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nuevoUsuario } from '../../redux/actions/authAction';
import { Link } from 'react-router-dom';
import style from './register.module.css';
import Swal from 'sweetalert2';

const Register = () => {

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  const onChange = e => {
    setRegisterData({
      ...registerData,
      [e.target.name]:e.target.value
    })
  }

  const dispatch = useDispatch()
  const registrando = (info) => dispatch( nuevoUsuario(info) )
  

  const { name, email, password, confirm } = registerData

  const onSubmit = e => {
    e.preventDefault()
    if(name === '' || email === '' || password === '' || confirm === '') {
      Swal.fire({
        icon: 'error',
        title: 'You forget something',
        text: 'All fields must be complete'
      })
      return;
    }
    if(password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Safety is important!',
        text: 'Please register a password with a minimum of 6 characters'
      })
      return;
    }
    if(password !== confirm) {
      Swal.fire({
        icon: 'error',
        title: 'Mhm...',
        text: 'Passwords must be the same'
      })
      return;
    }
    registrando(registerData)
  }

  return (
    <div className={style.registerContainer}>
        <form onSubmit={onSubmit}>
          <div className={style.registerTitle}>
            <h2>Register</h2>
          </div>
          <div className={style.registerInput}>
            <label>Name</label>
            <input 
              type='text'
              name='name'
              value={registerData.name}
              onChange={onChange}
            />
          </div>
          <div className={style.registerInput}>
            <label>Email</label>
            <input 
              type='text'
              name='email'
              value={registerData.email}
              onChange={onChange}
            />
          </div>
          <div className={style.registerInput}>
            <label>Password</label>
            <input 
              type='password'
              name='password'
              value={registerData.password}
              onChange={onChange}
            />
          </div>
          <div className={style.registerInput}>
            <label>Confirm password</label>
            <input 
              type='password'
              name='confirm'
              value={registerData.confirm}
              onChange={onChange}
            />
          </div>
          <div className={style.registerButton}>
            <button
              type='submit'
            >Registrarse</button>
            <Link to='/'>¿Ya tienes una cuenta? Haz click aquí</Link>
          </div>
        </form>
    </div>
  );
}
 
export default Register;