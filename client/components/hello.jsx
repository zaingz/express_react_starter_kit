//jsx
var React = require('react');
var $ = require('jquery/dist/jquery.js');

var Hello = React.createClass({
	  getInitialState: function() {
    	return {message: "hello"};
  },

 componentDidMount: function() {
 var that = this;
  $.ajax({
        url: "/api",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            that.setState({message: res});
        }
    });

  },


    render: function(){
        return (
            <h1>{this.state.message.message}</h1>
        );
    }
});

module.exports = Hello;