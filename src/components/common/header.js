'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function () {
    return(
      <nav className="navbar navbar-fluid">
        <div className="container-fluid">
          <Link to="app" className="navbar-nav">
            <img src="images/pluralsight-logo.jpg" style={{height: 50}} />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="authors">Authors</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
