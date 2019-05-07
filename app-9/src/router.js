import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Details from './Details';

export default (
      <Switch>
        <Route exact path='/' componet={Home} />
        <Route path='/signup' componet={Signup} />
        <Route path='/details' componet={Details} />
      </Switch>
  );
