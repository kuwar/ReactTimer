var React = require('react');

var Controls = React.createClass({
  propType: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = function () {
      if (countdownStatus === 'started') {
        // Render pause button
        return (<button className="button secondary">Pause</button>);
      } else if (countdownStatus === 'paused') {
        // Render start button
        return (<button className="button primary">Start</button>);
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
