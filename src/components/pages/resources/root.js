import React from 'react';

class Resources extends React.Component {
  render() {
    return (
      <div className = "container-fluid">

		<h1>
			Resources
		</h1>

		<p className="App-intro">
			This page contains links to the resources that I've found over time.
			I don't claim credit for or endorse any content on the sites that the links point to.
			<br /><br />
		</p>

		<LatexResources />
		{/* <GenResources /> */}

	  </div>
    );
  }
}
export default Resources;

class LatexResources extends React.Component {
	render() {
		return (
			<div className = "resourcelist">
				<h3 name = "latex">
					LaTeX
				</h3>

				<ul>
					<li>
						<a href="https://www.nyu.edu/projects/beber/files/Chang_LaTeX_sheet.pdf">LaTeX Cheat Sheet</a>&nbsp;-
						PDF that lists some of the common LaTeX expressions
					</li>
					<li>
						<a href="https://reu.dimacs.rutgers.edu/Symbols.pdf">LaTeX Math Mode Symbols</a>&nbsp;-
						PDF with most if not all the math symbols in LaTeX.
					</li>
					{/* <li>
						<a href="">  </a>&nbsp;-
						desc
					</li> */}
				</ul>
			</div>
		);
	}
}

// class GenResources extends React.Component {
// 	render() {
// 		return (
// 			<h3 name = "name">
// 				name
// 			</h3>
//
// 			<ul>
// 				<li>
// 					<a href=""></a>&nbsp;-
// 					desc
// 				</li>
// 			</ul>
// 		);
// 	}
// }

// class GenResources extends React.Component {
// 	render() {
// 		return (
// 			<h3 name = "name">
// 				name
// 			</h3>
//
// 			<ul>
// 				<li>
// 					<a href="">  </a>&nbsp;-
// 					desc
// 				</li>
// 			</ul>
// 		);
// 	}
// }
