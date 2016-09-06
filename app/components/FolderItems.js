var React = require('react');
var PropTypes = React.PropTypes;
var FileItem = require('./FileItem');

function FolderItems (props) {
	return (
		<div>
			{
				props.contents.map(function(content) {
					return <span className="highlight">
						<FileItem key={content} name={content} />
					</span>
				})
			}
		</div>
	);
}

var styles = {
	item: {
		color: '#C0C0C0',
		fontSize: '.9em'
	}
}

module.exports = FolderItems;
