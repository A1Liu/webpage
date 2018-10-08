import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom';

//CSS Style sheets
import './Assets/css/default.min.css';
import './Assets/css/bored.min.css';
import './Assets/css/about.min.css';

// Header and footer
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

//Pages
import Homepage from './components/pages/homepage';
import About from './components/pages/about';
import Projects from  './components/pages/projects';
import Bored from './components/pages/boredComponent/bored';
import Resources from  './components/pages/resourcesComponent/resources';

class App extends React.Component {
  render() {
    return (
		<Router>
		<div className="App">

			<Header />

			<div className = "container-fluid">
				<Route exact path = '/' component={Homepage} />
				<Route exact path = '/about' component={About} />
				<Route exact path = '/projects' component={Projects} />
				<Route exact path = '/bored' component={Bored} />
				<Route exact path = '/resources' component={Resources} />
			</div>

			<Footer />

		</div>
		</Router>
    );
  }
}

export default App;
