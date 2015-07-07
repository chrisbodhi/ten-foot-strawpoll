React = require('react');

var Form = require('../components/Form.react.jsx'),
    PollList = require('../components/PollList.react.jsx');

var Home = React.createClass({
  render: function() {
		return (
      /* jshint ignore:start */
      <div id="main">
			  <Form />
        <PollList />
      </div>
      /* jshint ignore:end */
		);
	}
});

module.exports = Home;
