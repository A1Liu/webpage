import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom';


import './Assets/css/default.min.css';
import './Assets/css/bored.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

//Pages
import Homepage from './components/pages/homepage';
import About from './components/pages/about';
import Projects from  './components/pages/projects';
import Bored from './components/pages/bored/root';
import Resources from  './components/pages/resources';

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">

			<Header />

			<Route exact path = '/' component={Homepage} />
			<Route exact path = '/about' component={About} />
			<Route exact path = '/projects' component={Projects} />
			<Route exact path = '/bored' component={Bored} />
			<Route exact path = '/resources' component={Resources} />

			<Footer />

			</div>
		</Router>
    );
  }
}

export default App;
