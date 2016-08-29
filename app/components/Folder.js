var React = require('react');
var PropTypes = React.PropTypes;
var FolderItem = require('./FolderItem');

var styles = {
  folder: {
    textIndent: '20%',
    color: 'grey'
  }
};

function Folder(props) {
	return (
		<li style={styles.folder}>
			{props.name}
		</li>
	);
}

module.exports = Folder;
