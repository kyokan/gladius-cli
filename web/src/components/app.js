import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MastheadContentSplit from './mastheadContentSplit';
import Masthead from './masthead';
import Home from './home';

export default function App(props) {
  const { Router } = props;

  return (
    <MastheadContentSplit masthead={<Masthead />}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </MastheadContentSplit>
  );
}

App.propTypes = {
  Router: PropTypes.func.isRequired,
};
