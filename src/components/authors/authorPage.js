'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
  getInitialState: function () {
    return{
      authors: []
    }
  },
  componentDidMount: function () {
    if(this.isMounted()) {
      this.setState({authors: AuthorApi.getAllAuthors()});
    }
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
      <div>
        <h1>
          Authors.
        </h1>
        <Link to="manage-author" className="btn btn-default">Add author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
})

module.exports = AuthorPage;
