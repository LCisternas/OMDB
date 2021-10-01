import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { autenticacion } from '../../redux/actions/authAction';

const PrivateRoute = ({ component:Component, ...props }) => {

  const auth = useSelector( state => state.auth.autenticado )

  useEffect(() => {
    autenticacion()
  }, [])

  return (
    <Route 
      { ...props }
      render={ props => !auth ? (
        <Redirect to='/' />
      ): (
        <Component {...props} />
      )} 
    />
  );
}
 
export default PrivateRoute;