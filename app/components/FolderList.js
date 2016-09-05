var React = require('react');
var PropTypes = React.PropTypes;
var FolderItems = require('./FolderItems');

function folderClick(e) {
  e.stopPropagation();
	console.log('header ', e.currentTarget);
}

var FolderList = React.createClass({
	render: function () {
		return (
			<ul>
				{this.props.folders.map(function (folder) {
					return <li style={styles.folder} onClick={folderClick} key={folder.name}>{folder.name}
						<FolderItems contents={folder.contents}></FolderItems>
					</li>
				})}
			</ul>
		);
	}

});

var styles = {
  folder: {
    color: '#40E0D0',
    listStyleImage: "url('/assets/img/closed_folder.png')",
    fontSize: '.8em',
    margin: '5%'
  }
}

module.exports = FolderList;
