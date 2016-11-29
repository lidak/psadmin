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
      },
      errors: {}
    }
  },

  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  changeAuthor: function (event) {
    this.setState({dirty: true});
    var fieldName = event.target.name;
    var fieldValue = event.target.value;

    this.state.author[fieldName] = fieldValue;
    this.setState({
      author: this.state.author
    });
  },

  authorFormIsValid: function () {
    var formIsValid = true;

    this.state.errors = {};

    if(this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'Fist name should be at least 3 characters long.';
      formIsValid = false;
    }

    if(this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name is too short.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors})

    return formIsValid;
  },

  saveAuthor: function (event) {
    event.preventDefault();
    this.setState({dirty: false});
    if(!this.authorFormIsValid()) {
        return;
    }

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
          errors={this.state.errors}
        />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
