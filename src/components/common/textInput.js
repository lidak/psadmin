'use strict';

var React = require('react');

var TextInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },
  render: function () {
    var wrapperClass = 'form-group';

    if(this.props.error && this.props.error.length) {
      wrapperClass += ' has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          name={this.props.name}
          type="text"
          className="form-control"
          value={this.props.value}
          ref={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <div className="input">{this.props.error}</div>
      </div>
    );
  }
});

module.exports = TextInput;
