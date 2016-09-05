var React = require('react');
var FolderContainer = require('../containers/FolderContainer');
var OpenFilesContainer = require('../containers/OpenFilesContainer');
// var styles = require('../styles/sidebar.css');

var PropTypes = React.PropTypes;

var SidebarNav = React.createClass({
	render: function () {
		return (
			<div id="sidebar-wrapper">
				// <span className={ styles.header }>OPEN FILES</span>
				<OpenFilesContainer />
				<span>FOLDERS</span>
        <FolderContainer className="sidebar-nav" />
			</div>
		);
	}

});


module.exports = SidebarNav;
