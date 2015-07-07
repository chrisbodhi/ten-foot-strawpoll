React = require('react');

var Unanswered = require('../components/Unanswered.react.jsx')

var PollList = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <div id="all-unanswered">
        <Unanswered />
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = PollList;