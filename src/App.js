import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom';

//CSS Style sheets
import './assets/css/default.min.css';
import './assets/css/bored.min.css';
import './assets/css/about.min.css';

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
		<div className="app">

			<Header />

				<article className = "main">
					<Route exact path = '/' component={Homepage} />
					<Route exact path = '/about' component={About} />
					<Route exact path = '/projects' component={Projects} />
					<Route exact path = '/bored' component={Bored} />
					<Route exact path = '/resources' component={Resources} />
				</article>
				<aside className = "aside aside-1"></aside>
				<aside className = "aside aside-2"></aside>

			<Footer />

		</div>
		</Router>
    );
  }
}

/* <div class="wrapper">
  <header class="header">Header</header>
  <article class="main">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </article>
  <aside class="aside aside-1">Aside 1</aside>
  <aside class="aside aside-2">Aside 2</aside>
  <footer class="footer">Footer</footer>
</div> */

export default App;
