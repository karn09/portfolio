var React = require('react');
var PropTypes = React.PropTypes;
var FileItem = require('./FileItem');

var OpenFiles = React.createClass({

	render: function () {

		var fileNodes = this.props.files.map(function (file) {
			return (
				<FileItem key={file} name={file} />
			)
		});

		return (
			<div>
        {fileNodes}
			</div>
		);
	}

});

module.exports = OpenFiles;
