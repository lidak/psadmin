'use strict';

var Dispatcher = require('./dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTyles')

var AuthorActions = {
  createAuthor: function (author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    Dispather.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  }
};

module.exports = AuthorActions;
