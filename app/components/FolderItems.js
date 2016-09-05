var React = require('react');
var PropTypes = React.PropTypes;

function itemClick (e) {
	e.stopPropagation();
	console.log('item ', e.currentTarget)
}

function FolderItems (props) {
	return (
		<ul>
			{
				props.contents.map(function(content) {
					return <li style={styles.item} onClick={itemClick} key={content}>{content}</li>
				})
			}
		</ul>
	);
}

var styles = {
	item: {
		color: '#C0C0C0',
		listStyleImage: "url('/assets/img/text_resume.png')"

	}
}

module.exports = FolderItems;
