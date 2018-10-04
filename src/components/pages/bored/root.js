import React from 'react';
import BoredList from './list';

class Bored extends React.Component {
  render() {
    return (
      <div className = "container-fluid">

		<h2>
			Things to Do While Bored
		</h2>

		<h4>
			Webpages
		</h4>

		< BoredList />

	  </div>
    );
  }
}
export default Bored;
