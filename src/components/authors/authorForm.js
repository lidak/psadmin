'use strict';

var React = require('react');

var AuthorForm = React.createClass({
  render: function () {
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          value=""
          ref="firstName"
          placeholder="First Name"
        />

        <label htmlFor="lastName">First Name</label>
        <input
          type="text"
          className="form-control"
          value=""
          ref="lastName"
          placeholder="Last Name"
        />

        <input type="submit" value="Save" className="btn btn-default" />
      </form>
    );
  }
});

module.exports = AuthorForm;
