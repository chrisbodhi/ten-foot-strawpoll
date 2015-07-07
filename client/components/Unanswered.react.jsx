React = require('react');

var Unanswered = React.createClass({
  vote: function() {
    return null;
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <fieldset className="unanswered">
        <h4>
          "This is the question."
        </h4>
        <form onSubmit={this.vote}>
          <div>
            <label>
              <input type="radio" value="{}" />
              "{}"
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="{}" />
              "{}"
            </label>
          </div>
          <input type="submit" />
        </form>
      </fieldset>
      /* jshint ignore:end */
    );
  }
});

module.exports = Unanswered;