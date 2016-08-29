var React = require('react');
var PropTypes = React.PropTypes;

var SidebarNav = React.createClass({

	render: function () {
		return (
			<div id="sidebar-wrapper">
				<ul className="sidebar-nav">
					<li className="sidebar-brand">
						<a href="#">
							Start Bootstrap
						</a>
					</li>
					<li>
						<a href="#">Dashboard</a>
					</li>
					<li>
						<a href="#">Shortcuts</a>
					</li>
					<li>
						<a href="#">Overview</a>
					</li>
					<li>
						<a href="#">Events</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		);
	}

});

styles = {
	sideBarWrapper: {
		background: 'whiteSmoke',
		'zIndex': 1000,
		position: 'fixed',
		left: '250px',
		width: 0,
		height: '100%',
		'marginLeft': '-250px',
		'overflowY': 'auto',
		background: '#000',
		'WebkitTransition': 'all 0.5s ease',
		'MozTransition': 'all 0.5s ease',
		'OTransition': 'all 0.5s ease',
		'transition': 'all 0.5s ease'
	},
	sideBarNav: {
		position: 'absolute',
		top: 0,
		width: '250px',
		margin: 0,
		padding: 0,
		'listStyle': 'none'
	}
}

module.exports = SidebarNav;
