var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Time App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <a href="https://github.com/kuwar" target="_blank">Saurav Kuwar</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
