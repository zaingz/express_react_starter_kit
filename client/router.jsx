

//var injectTapEventPlugin = require('react-tap-event-plugin');
var React = require('react');

// Globaly set react so it becomes accesible every where

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header" >
          <h1>React is awesome</h1>
          <a href="#/about">About</a>
          <a href="#/">Index</a>
        </div>
        {this.props.children}
      </div>
    )
  }
});


module.exports = App;
