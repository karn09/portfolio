var React = require('react');
var PropTypes = React.PropTypes;
var FolderItems = require('./FolderItems');

function folderClick(e) {
	e.stopPropagation();
	console.log('header ', e.currentTarget);
}

var FolderList = React.createClass({

	render: function () {
		var folderImg = function () {
			return <img src="/assets/img/128closed_folder.png" style={styles.image}></img>
		}

		var folderNodes = this.props.folders.map(function (folder) {
			return (
				<div>
					<div style={styles.header} onClick={folderClick} key={folder.name}>
						<img src="/assets/img/arrow_down.png"></img>
						<img src="/assets/img/128closed_folder.png" style={styles.folderImage}></img>
						<span style={styles.folderText}>{folder.name}</span>
					</div>
					<FolderItems key={folder.contents} contents={folder.contents}/>
				</div>
			)
		});

		return (
			<div>
				{folderNodes}
			</div>
		);
	}

});

var styles = {
	header: {
		marginLeft: '5px',
		lineHeight: '20px',
		height: '40px',
		fontSize: '.9em',
		padding: '10px',
		marginBottom: '10px'
	},
	folderImage: {
		width: '20px',
		height: 'auto',
		marginRight: '20px',
		marginLeft: '15px'
	},
	folderText: {
		display: 'inline-block',
		verticalAlign: 'middle',
		lineHeight: 'normal',
	}
}

module.exports = FolderList;
