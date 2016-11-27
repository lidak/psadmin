'use strict';

var React = require('react');

var AuthorForm = React.createClass({
  render: function () {
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          className="form-control"
          value={this.props.author.firstName}
          ref="firstName"
          placeholder="First Name"
          onChange={this.props.onChangeHandler}
        />

        <label htmlFor="lastName">First Name</label>
        <input
          name="lastName"
          type="text"
          className="form-control"
          value={this.props.author.lastName}
          ref="lastName"
          placeholder="Last Name"
          onChange={this.props.onChangeHandler}
        />

        <input type="submit" value="Save" className="btn btn-default" />
      </form>
    );
  }
});

module.exports = AuthorForm;
