var React = require('react');
var PropTypes = React.PropTypes;

require('../styles/flat-ui/css/flat-ui.css');

var Main = React.createClass({

  render: function() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;
