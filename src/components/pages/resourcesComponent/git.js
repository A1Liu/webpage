import React from 'react';

class GitResources extends React.Component {
	render() {
		return (
			<div className = "resourcelist" name = "gitresources">
				<h3>
					Markdown
				</h3>

				<ul>
					<li>
						<a href="https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf">
						Github's Git Cheatsheet</a>&nbsp;-
						Really useful Git cheatsheet. I'd recommend printing this out
					</li>
					<li>
						<a href="http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde">
						Git Caret and Tilde Explanation</a>&nbsp;-
						How to use the Caret and Tilde in Git
					</li>
					{/* <li>
						<a href="firstlink">
						firstlinktext</a>&nbsp;-
						description
					</li> */}
					{/* <li>
						<a href="firstlink">
						firstlinktext</a>&nbsp;-
						description
					</li> */}
					{/* <li>
						<a href="firstlink">
						firstlinktext</a>&nbsp;-
						description
					</li> */}
				</ul>
			</div>
		);
	}
} export default GitResources;
