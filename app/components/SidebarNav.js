var React = require('react');
var FolderContainer = require('../containers/FolderContainer');
var PropTypes = React.PropTypes;

var SidebarNav = React.createClass({
	render: function () {
		return (
			<div id="sidebar-wrapper">
        <FolderContainer className="sidebar-nav">

        </FolderContainer>
			</div>
		);
	}

});

styles = {
  fileItem: {
    // textDecoration: 'none',
    listStyleType: 'none',
    display: 'block'
  },
  fileImg: {
    listStyleImage: "url('https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_folder_open_black_24px.svg')"
  }
}

module.exports = SidebarNav;
