'use strict';

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onChangeHandler: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
    saveAuthor: React.PropTypes.func.isRequired
  },
  render: function () {
    return (
      <form>
        <Input
          name="firstName"
          value={this.props.author.firstName}
          label="First Name"
          onChange={this.props.onChangeHandler}
          error={this.props.errors.firstName}
        />

        <Input
          name="lastName"
          value={this.props.author.lastName}
          label="Last Name"
          onChange={this.props.onChangeHandler}
          error={this.props.errors.lastName}
        />

      <input type="submit" value="Save" className="btn btn-default" onClick={this.props.saveAuthor} />
      </form>
    );
  }
});

module.exports = AuthorForm;
