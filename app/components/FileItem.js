var React = require('react');
var PropTypes = React.PropTypes;

function itemClick(e) {
	e.stopPropagation();
	console.log('item ', e.currentTarget)
}

var FileItem = React.createClass({

	render: function () {
		return (
			<div onClick={itemClick} style={styles.item}>
				<img style={styles.itemImage} src="/assets/img/Readme_Icon.png"></img>
				<span style={styles.itemText}>{this.props.name}</span>
			</div>
		);
	}

});

var styles = {
	item: {
		color: '#40E0D0',
		marginLeft: '20%',
		fontSize: '.75em',
		height: '35px'
	},
	itemImage: {
		width: '20px',
		height: 'auto',
		marginRight: '20px',
		marginLeft: '15px'
	},
	itemText: {
		display: 'inline-block',
		verticalAlign: 'middle',
		lineHeight: 'normal',
		marginTop: '2px'
	}
}

module.exports = FileItem;
