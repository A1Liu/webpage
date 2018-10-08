import React from 'react';
import WebList from './weblist';
import AppList from './applist';

class Bored extends React.Component {
  render() {
    return (
      <article className = "bored">

		<h2>
			Things to Do While Bored
		</h2>

		<h4>
			Webpages
		</h4>

		<WebList />

		<h4>
			Small Apps
		</h4>

		<AppList />

	</article>
    );
  }
} export default Bored;
