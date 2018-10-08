import React from 'react';
import WebResources from './web';
import MarkdownResources from './markdown';
import LatexResources from './latex';

class Resources extends React.Component {
  render() {
    return (
      <article className = "resources">

		<h1>
			Resources
		</h1>

		<p className="App-intro">
			This page contains links to resources that I've found over time.
			I don't claim credit for or endorse any content on the sites that the links point to.
		</p>
		<br />
		<WebResources />
		<br />
		<LatexResources />
		<br />
		<MarkdownResources />
		{/* <GenResources /> */}

	</article>
    );
  }
}
export default Resources;


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
