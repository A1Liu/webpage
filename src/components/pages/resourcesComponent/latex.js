import React from 'react';

class LatexResources extends React.Component {
	render() {
		return (
			<div className = "resourcelist" name = "latexresources">
				<h3>
					LaTeX
				</h3>

				<ul>
					<li>
						<a href="https://www.nyu.edu/projects/beber/files/Chang_LaTeX_sheet.pdf">LaTeX Cheat Sheet</a>&nbsp;-
						PDF that lists some of the common LaTeX expressions
					</li>
					<li>
						<a href="https://reu.dimacs.rutgers.edu/Symbols.pdf">LaTeX Math Mode Symbols</a>&nbsp;-
						PDF with most if not all the math symbols in LaTeX
					</li>
					{/* <li>
						<a href="">  </a>&nbsp;-
						desc
					</li> */}
				</ul>
			</div>
		);
	}
} export default LatexResources;
