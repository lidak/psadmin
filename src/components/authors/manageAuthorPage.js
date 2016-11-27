'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
  getInitialState: function () {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    }
  },

  changeAuthor: function (event) {
    var fieldName = event.target.name;
    var fieldValue = event.target.value;

    this.state.author[fieldName] = fieldValue;
    this.setState({
      author: this.state.author
    });
  },

  render: function () {
    return (
      <div>
        <h1>
          Create a new author.
        </h1>
        <AuthorForm author={this.state.author} onChangeHandler={this.changeAuthor}/>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
