'use strict';

var React = require('react');

var Router =  require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
console.log(typeof NotFoundRoute, 'NotFoundRouteNotFoundRoute')
var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <Route name="manage-author" handler={require('./components/authors/manageAuthorPage')} />
    <NotFoundRoute handler={require('./components/common/notFoundPage')} />
  </Route>
);

module.exports = routes;
