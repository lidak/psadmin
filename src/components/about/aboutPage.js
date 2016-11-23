'use strict';

var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About the application</h1>
        <p>
          This appliction uses following technologies.
          <ul>
            <li>React.js</li>
            <li>Flux</li>
            <li>React Router</li>
            <li>Gulp</li>
            <li>Boorstrap</li>            
          </ul>
        </p>
      </div>
    )
  }
});
module.exports = About;
