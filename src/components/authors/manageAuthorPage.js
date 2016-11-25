'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Create a new author.
        </h1>
        <AuthorForm />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
