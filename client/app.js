
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var IndexLink =  require('react-router').IndexLink
var IndexRoute = require('react-router').IndexRoute;
// Here we put our React instance to the global scope. Make sure you do not put it 
// into production and make sure that you close and open your console if the 
// DEV-TOOLS does not display

var Hello = require('./components/hello.jsx');
var App = require('./router.jsx');
var About = require('./pages/about.jsx');

 

  ReactDOM.render(
  	<Router>
    <Route path="/" component={App}>
     <IndexRoute component={Hello}/>
     <Route path="about" component={About}/>
    </Route>
  </Router>, document.getElementById("app"));



