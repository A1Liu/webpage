import React from 'react';

class WebResources extends React.Component {
	render() {
		return (
		<div name = "webresources">
			<h3>
				Web Development
			</h3>
			<p>
				Resources for web development.
			</p>

			<CSSResources />
			<HTMLResources />
		</div>
	);
	}
} export default WebResources;

class CSSResources extends React.Component {
	render() {
		return (
		<div name = "cssresources">
			<h5>
				CSS
			</h5>

			<ul>
				<li>
					<a href="https://www.cssfontstack.com/">CSS Font Stack</a>&nbsp;-
					Good site to decide which font to use
				</li>
				<li>
					<a href="https://css-tricks.com/">CSS Tricks</a>&nbsp;-
					 That's what they are
					 <ul>
						 <li>
		 					<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flex Box Guide</a>
		 				</li>
					 </ul>
				</li>
				<li>
					<a href="https://getbootstrap.com/">Bootstrap</a>&nbsp;-
					CSS Library that makes styling easier
				</li>
				{/* <li>
					<a href="temp">temp</a>&nbsp;-
					desc
				</li> */}
				{/* <li>
					<a href="temp">temp</a>&nbsp;-
					desc
				</li> */}
				{/* <li>
					<a href="temp">temp</a>&nbsp;-
					desc
				</li> */}
			</ul>
		</div>
		);
	}
}

class HTMLResources extends React.Component {
	render() {
		return (
		<div name = "htmlresources">
			<h5>
				HTML
			</h5>
			<ul>
				<li>
					<a href="https://www.w3schools.com/colors/colors_picker.asp?color=80ced6">HTML Color Picker</a>&nbsp;-
					Makes it easy to pick colors and then get their hex value
				</li>
				<li>
					<a href="https://convertingcolors.com/">Color Converter</a>&nbsp;-
					Converts colors from one format to another
				</li>
				{/* <li>
					<a href="temp">temp</a>&nbsp;-
					desc
				</li> */}
				{/* <li>
					<a href="temp">temp</a>&nbsp;-
					desc
				</li> */}
				{/* <li>
					<a href="temp">temp</a>&nbsp;-
					desc
				</li> */}
				{/* <li>
					<a href="temp">temp</a>&nbsp;-
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
// 					<a href="">  </a>&nbsp;-
// 					desc
// 				</li>
// 			</ul>
// 		);
// 	}
// }
