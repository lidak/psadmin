'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          404
        </h1>
        <p>
          This page does not actually exist. Do you wanna go <Link to="app">home page</Link>?
        </p>
      </div>
    );
  }
});

module.exports = NotFoundPage;
