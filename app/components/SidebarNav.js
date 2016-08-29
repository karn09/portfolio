var React = require('react');
var Folder = require('./Folder');

var PropTypes = React.PropTypes;
var SidebarNav = React.createClass({

	render: function () {
		return (
			<div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            Folders
              <Folder name='About' />
              <Folder name='Projects' />
          </li>
        </ul>
			</div>
		);
	}

});

styles = {
  header: {
    fontWeight: 800,
    color: '#40E0D0'
  },
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
