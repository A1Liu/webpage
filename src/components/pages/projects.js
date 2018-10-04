import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className = "container-fluid">

		<h1>
			Projects
		</h1>

		<ul>

			<li>
				<a href = "https://github.com/a2liu/nyu-csci-201-cso">CSCI 201 - CSO</a>
			</li>
			<li>
				<a href = "https://github.com/A1Liu/webpage">Webpage (this thing)</a>
			</li>
			<li>
				<a href = "https://github.com/A1Liu/seek-quench">Seek-Quench</a>
			</li>
			// <li>
			// 	<a href = "temp">temp</a>
			// </li>
			// <li>
			// 	<a href = "temp">temp</a>
			// </li>
			// <li>
			// 	<a href = "temp">temp</a>
			// </li>
			// <li>
			// 	<a href = "temp">temp</a>
			// </li>

		</ul>

	  </div>
    );
  }
}
export default Projects;
