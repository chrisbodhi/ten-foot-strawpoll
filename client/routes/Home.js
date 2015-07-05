React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {value: "hola mundo"};
  },
  onSubmit: function() {
    // save to db...
  },
	render: function() {
		return (
      /* jshint ignore:start */
			<div id="poll-form">
        <form onsubmit="">
          <label>Question for polling: </label>
          <input type="text" id="question" placeholder="How much change is in my couch?" required autofocus />
          <input type="text" name="response" placeholder="None." required />
          <input type="text" name="response" placeholder="All of it." required />
          <input type="submit" />
        </form>
      </div>
      /* jshint ignore:end */
		);
	}
});

module.exports = Home;
