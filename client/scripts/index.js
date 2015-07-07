var React = require('react'),
	  Router = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
      /* jshint ignore:start */
			<div className="page-header">
				<h1>ten-foot-strawpoll</h1>
			</div>
      /* jshint ignore:end */
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
      /* jshint ignore:start */
			<div className="nav">
				<Router.Link to="home">Home</Router.Link>
				&nbsp; | &nbsp;
				<Router.Link to="about">About</Router.Link>
			</div>
      /* jshint ignore:end */
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
      /* jshint ignore:start */
			<div className="container">
				<Header />
        <Router.RouteHandler/>
				<PageNav />
			</div>
      /* jshint ignore:end */
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	About: require('../routes/About')
};

var routes = (
  /* jshint ignore:start */
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={routes.Home}/>
		<Router.Route name="about" path="/about" handler={routes.About}/>
		<Router.DefaultRoute handler={routes.Home}/>
	</Router.Route>
  /* jshint ignore:end */
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  /* jshint ignore:start */
	React.render(<Handler/>, document.body);
  /* jshint ignore:end */
});
