'use strict';

var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1> Pluralsight administration</h1>
        <p>
          We used React to buid this masterpiese.
        </p>
      </div>
    );
  }
});

module.exports = Home;
