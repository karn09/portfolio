var React = require('react');
var PropTypes = React.PropTypes;

var MainContainer = React.createClass({

  render: function() {
    return (
      <div className="col-sm-12">
        {props.children}
      </div>
    );
  }

});

module.exports = MainContainer;
