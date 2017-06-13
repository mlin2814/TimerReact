var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function () {
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Time Your Reaction</li>					
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
						</li>
						<li>
							<Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown Clock</Link>
						</li>
						<li className="menu-text">
							<a href="https://mlin2814.github.io/" target="_blank">Builder Portfolio </a>
						</li>
					</ul>
				</div>
			</div>
		);		
	}
});

module.exports = Nav;

