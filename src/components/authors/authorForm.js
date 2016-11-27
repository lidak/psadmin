'use strict';

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  render: function () {
    return (
      <form>
        <Input
          name="firstName"
          value={this.props.author.firstName}
          label="First Name"
          onChange={this.props.onChangeHandler}
        />

        <Input
          name="lastName"
          value={this.props.author.lastName}
          label="Last Name"
          onChange={this.props.onChangeHandler}
        />

      <input type="submit" value="Save" className="btn btn-default" onClick={this.props.saveAuthor} />
      </form>
    );
  }
});

module.exports = AuthorForm;
