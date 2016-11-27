'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
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

  saveAuthor: function (event) {
    event.preventDefault();

    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved.')
    this.transitionTo('authors');
  },

  render: function () {
    return (
      <div>
        <h1>
          Create a new author.
        </h1>
        <AuthorForm
          author={this.state.author}
          onChangeHandler={this.changeAuthor}
          saveAuthor={this.saveAuthor}
        />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
