var React = require('react');
var FolderContainer = require('../containers/FolderContainer');
var OpenFilesContainer = require('../containers/OpenFilesContainer');
var PropTypes = React.PropTypes;

var SidebarNav = React.createClass({
	render: function () {
		return (
			<div id="sidebar-wrapper">
				<p style={styles.header}>Open Files</p>
				<OpenFilesContainer />
				<hr />
				<p style={styles.header}>Folder</p>
        <FolderContainer />
			</div>
		);
	}

});

styles = {
	header: {
		padding: '10px'
	}
}

module.exports = SidebarNav;
