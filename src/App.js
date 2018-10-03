import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Page2 from  './components/pages/page2';
import Page3 from  './components/pages/page3';

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">

			<Header />

				<Route exact path = '/' component={Homepage} />
				<Route exact path = '/page2' component={Page2} />
				<Route exact path = '/page3' component={Page3} />

			<Footer />

			</div>
		</Router>
    );
  }
}

export default App;
