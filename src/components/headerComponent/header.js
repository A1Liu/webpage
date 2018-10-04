import React, { Component } from 'react';

import {
	Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
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
	  </header>
    );
  }
}
export default Header;
