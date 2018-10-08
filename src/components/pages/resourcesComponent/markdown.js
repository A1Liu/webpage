import React from 'react';

class MarkdownResources extends React.Component {
	render() {
		return (
			<div className = "resourcelist" name = "markdownresources">
				<h3>
					Markdown
				</h3>

				<ul>
					<li>
						<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatsheet</a>&nbsp;-
						Really great tutorial for the Markdown syntax
					</li>
					<li>
						<a href="https://dillinger.io/">Online Markdown Compiler</a>&nbsp;-
						Compiles Markdown to a number of formats
					</li>

					{/* <li>
						<a href="">  </a>&nbsp;-
						desc
					</li> */}
					{/* <li>
						<a href="">  </a>&nbsp;-
						desc
					</li> */}
					{/* <li>
						<a href="">  </a>&nbsp;-
						desc
					</li> */}
				</ul>
			</div>
		);
	}
} export default MarkdownResources;
