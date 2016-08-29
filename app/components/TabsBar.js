var React = require('react');
var PropTypes = React.PropTypes;

var TabsBar = React.createClass({

	render: function () {
		return (
				<ul className="nav nav-tabs">
					<li role="presentation" className="active">
						<a href="#">Home</a>
					</li>
					<li role="presentation">
						<a href="#">Profile X</a>
					</li>
					<li role="presentation">
						<a href="#">Messages</a>
					</li>
					<li role="presentation">
						<a href="#">Another</a>
					</li>
					<li role="presentation">
						<a href="#">Last One</a>
					</li>
				</ul>
		);
	}

});

var styles = {
    // topbar: 
};

module.exports = TabsBar;
