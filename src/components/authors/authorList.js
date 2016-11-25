'use strict';

var React = require('react');

var AuthorsList = React.createClass({
  propTypes: {
      authors: React.PropTypes.array.isRequired
  },
  render: function () {
    var createAuthotRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    }
    return (
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthotRow, this)}
        </tbody>
      </table>
    )
  }
})

module.exports = AuthorsList;
