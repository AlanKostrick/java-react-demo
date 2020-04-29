import React from 'react';
import Campus from './components/campuses';
import Home from './pages/home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/campuses' component={Campus} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
