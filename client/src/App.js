import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Movies from './components/movies/Movies';
import Favorites from './components/favorites/Favorites';
import Account from './components/account/Account';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/principal' component={Movies} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/settings' component={Account} />
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
