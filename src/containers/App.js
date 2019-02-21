import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import loadable from '@loadable/component'

const AsyncPageA  = loadable(() => import(
  /* webpackChunkName: "PageA.js" */
  './PageA'
));

const AsyncPageB  = loadable(() => import(
  /* webpackChunkName: "PageB.js" */
  './PageB'
));

const Index = () => <h2>Home</h2>;


class App extends Component {
  render() {
    return (
      <div className="container-wrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-a">Page A</Link>
          </li>
          <li>
            <Link to="/page-b">Page B</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/page-a" component={AsyncPageA} />
          <Route path="/page-b" component={AsyncPageB} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
  }),
  dispatch => ({
  })
)(App));
