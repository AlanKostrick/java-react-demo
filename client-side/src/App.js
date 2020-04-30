import React from 'react';

import Home from './pages/home';
import Campuses from './pages/campuses';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/campuses' component={Campuses} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
