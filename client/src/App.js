import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Movies from './components/movies/Movies';
import MovieInfo from './components/movies/MovieInfo';
import Favorites from './components/favorites/Favorites';
import Account from './components/account/Account';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='main'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/principal' component={Movies} />
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/settings' component={Account} />
            <Route exact path='/viewmovie/:title' component={MovieInfo} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
