import React, { Component } from 'react';

import {
	Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
	  	<div className = "logo">
			LOGO
		</div>
		<nav>
			<ul>
				<li className= "first">
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/games">Games</Link>
				</li>
				<li className="last">
					<Link to="/resources">Resources</Link>
				</li>
			</ul>
		</nav>
	  </header>
    );
  }
}
export default Header;
