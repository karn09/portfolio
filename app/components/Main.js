var React = require('react');
var PropTypes = React.PropTypes;
var TabsBar = require('./TabsBar');
var SidebarNav = require('./SidebarNav');
require('../styles/sidebar/css/bootstrap.css');
require('../styles/flat-ui/css/flat-ui.css');
require('../styles/sidebar/css/simple-sidebar.css');

var Main = React.createClass({

  render: function() {
    return (
      <div id="wrapper">
        <SidebarNav />
        <TabsBar />
        <div id="page-content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = Main;
