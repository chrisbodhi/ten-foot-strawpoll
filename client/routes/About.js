React = require('react');

var About = React.createClass({
	render: function() {
		return (
      /* jshint ignore:start */
      <div id="about">
			  <h3>About</h3>
        <p>Created by <a href="https://twitter.com/chrisbodhi" title="chrisbodhi on Twitter">@chrisbodhi</a></p>
        <p>July 2015</p>
        <p><a href="https://github.com/chrisbodhi/ten-foot-strawpoll" title="Ten Foot Strawpoll on GitHub">src code</a></p>
      </div>
      /* jshint ignore:end */
		);
	}
});

module.exports = About;
