var React = require('react');
var PropTypes = React.PropTypes;
var OpenFiles = require('../components/OpenFiles');

var OpenFilesContainer = React.createClass({

 getInitialState: function () {
   return {
     open: []
   }
 },

 componentWillMount: function () {
   this.setState({ open: this.state.open })
 },

  render: function() {
    return (
      <OpenFiles open={this.state.open} />
    );
  }

});

module.exports = OpenFilesContainer;
