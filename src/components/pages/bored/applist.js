import React from 'react';

class AppList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className = "bored-list">
    			<li>
    				<a href="/bored">[empty list]</a>
    			</li>
    		</ul>
		);
	}
} export default AppList;
