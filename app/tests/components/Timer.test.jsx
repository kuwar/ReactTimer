var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Timer = require('Timer');

describe('Timer', () => {
  it ('should exist', () => {
    expect(Timer).toExist();
  });

  describe('render', () => {
    it('should start timer on started status', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should paused timer on paused status', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(10);
        done();
      }, 1001);
    });

    it('should stopped timer on stopped status', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
    });
  });
});
