import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

//Pages
import Homepage from './components/pages/homepage';
import Projects from  './components/pages/projects';
import Games from './components/pages/bored';
import Resources from  './components/pages/resources';

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">

			<Header />

				<Route exact path = '/' component={Homepage} />
				<Route exact path = '/projects' component={Projects} />
				<Route exact path = '/bored' component={Games} />
				<Route exact path = '/resources' component={Resources} />
				
			<Footer />

			</div>
		</Router>
    );
  }
}

export default App;
