React = require('react');

var Form = React.createClass({
  submit: function() {
    // save to db...
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <div id="poll-form">
        <form onSubmit={this.submit}>
          <label>Question for polling: </label>
          <textarea id="question" placeholder="How much change is in my couch?" required autofocus />
          <input type="text" name="response" placeholder="None." required />
          <input type="text" name="response" placeholder="All of it." required />
          <input type="submit" />
        </form>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = Form;