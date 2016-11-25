'use strict';

var React = require('react');

var Header = React.createClass({
  render: function () {
    return(
      <nav className="navbar navbar-fluid">
        <div className="container-fluid">
          <a href="/" className="navbar-nav">
            <img src="images/pluralsight-logo.jpg" style={{height: 50}} />
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/#">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#authors">Authors</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
