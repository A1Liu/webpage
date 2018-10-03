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
					<Link to="/page2">Link2</Link>
				</li>
				<li className="last">
					<Link to="/page3">Link3</Link>
				</li>
			</ul>
		</nav>
	  </header>
    );
  }
}
export default Header;
