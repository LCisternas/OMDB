import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { actualizarEmail, autenticacion, actualizarContraseña } from '../../redux/actions/authAction';
import Swal from 'sweetalert2';
import style from './account.module.css';

const Account = () => {

  const username = useSelector( state => state.auth.user.user.name );
  const email = useSelector( state => state.auth.user.user.email );
  const userID = useSelector( state => state.auth.user.user._id );

  const dispatch = useDispatch();
  const updateEmail = (info) => dispatch( actualizarEmail(info) )
  const auth = () => dispatch( autenticacion() )
  const updatePassword = (info) => dispatch( actualizarContraseña(info) )

  const [newEmail, setEmail] = useState({
    Email: ''
  });
  const [newPassword, setPassword] = useState({
    Password: ''
  });
  const [goauth, setgoauth] = useState(false);

  const onChangeEmail = e => {
    setEmail({
      ...newEmail,
      [e.target.name]:e.target.value
    })
  }
  const onChangePassword = e => {
    setPassword({
      ...newPassword,
      [e.target.name]:e.target.value
    })
  }

  const { Email } = newEmail;
  const { Password } = newPassword;

  const changeEmail = e => {
    e.preventDefault()
    if(newEmail.Email === '') {
      Swal.fire({
        icon:'error',
        title:'You must enter a valid email address'
      })
    }
    updateEmail({ Email, userID })
    setgoauth(true)
    Swal.fire({
      icon: 'success',
      title: 'Updated email address'
    })
  }
  const changePassword = e => {
    e.preventDefault()
    if(newPassword.Password === '') {
      Swal.fire({
        icon: 'error',
        title: 'You must enter a valid password'
      })
    }
    updatePassword({ Password, userID })
    setgoauth(true)
    Swal.fire({
      icon: 'success',
      title: 'Update password successfully'
    })
  }
  
  useEffect(() => {
    if(goauth) {
      auth()
      setgoauth(false)
    }
  }, [goauth])

  if(!username) return null;
  if(!email) return null;

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
          <form onSubmit={changeEmail}>
            <input 
              type='text'
              name='Email'
              value={newEmail.email}
              placeholder='New Email'
              onChange={onChangeEmail}
            />
            <button type='submit'>Cambiar Email</button>
          </form>
          <form onSubmit={changePassword}>
            <input 
              type='password'
              name='Password'
              min='6'
              value={Password}
              placeholder='New password'
              onChange={onChangePassword}
            />
            <button type='submit'>Cambiar contraseña</button>
          </form>
          <form>
            <button>Eliminar cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Account;