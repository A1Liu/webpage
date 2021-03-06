import React from 'react';

import {
	Link
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className = "header">

		<div className = "container">
		  	<div className = "logo">
				Albert Liu
			</div>
			<nav>
				<ul>
					<li className= "first">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Me</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/bored">Bored</Link>
					</li>
					<li className="last">
						<Link to="/resources">Resources</Link>
					</li>
				</ul>
			</nav>
		</div>

	  </header>
    );
  }
}
export default Header;
